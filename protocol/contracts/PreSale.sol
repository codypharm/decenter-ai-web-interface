// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";



contract Presale is Ownable {
   

    IERC20  public acceptedToken;
    IERC20 public dcenToken;
    address payable public treasuryAddress;
    mapping(address => uint256) public contributions;
    uint256 public nativeRate ;
    uint256 public tokenRate ;
    bool public withdrawalEnabled;
    uint256 public totalERC20TokensDeposited = 0;
    uint256 public totalNativeTokensDeposited = 0;
    uint256 public totalTokensOwed = 0;

    event ContibutionWorth(
        address indexed account,
        uint256 contribution,
        bytes   tokenType
    );


    event tokenClaimed(
        address indexed account,
        uint256 contribution
    );

    constructor(
    address _acceptedToken,
    address payable _treasuryAddress,
    uint256  _nativeRate ,
    uint256  _tokenRate 
    )Ownable(msg.sender){
        acceptedToken = IERC20(_acceptedToken);
        treasuryAddress = _treasuryAddress;
        withdrawalEnabled = false;
        nativeRate = _nativeRate;
        tokenRate = _tokenRate;
    }

    //set token address
    function setTokenAddress(address _dcenToken) external onlyOwner{
         dcenToken = IERC20(_dcenToken);
    }

    //set rate for native token
    function setNativeRate (uint rate) external onlyOwner{
        nativeRate = rate;
    }

    // set rate for erc20 token
    function setTokenRate (uint rate) external onlyOwner{
        tokenRate = rate;
    }

    //calculate native rate
    function calculateNativeRate(uint amt) internal view returns (uint value) {
            value  = amt/nativeRate;
    }

    //calculate erc20
    function calculateTokenRate(uint amt) internal view returns (uint value) {
            value  = amt/tokenRate;
    }

    // Enable token withdrawal
    function enableWithdrawal() external onlyOwner {
        withdrawalEnabled = true;
    }

    // Receive native tokens
    receive() external payable {
        require(!withdrawalEnabled, "Withdrawal already enabled");
        (bool success, ) = treasuryAddress.call{value: msg.value}("");
        require(success, "Payment Failed");
        contributions[msg.sender] = contributions[msg.sender] + calculateNativeRate(msg.value);
        totalNativeTokensDeposited + msg.value;
        totalTokensOwed += calculateNativeRate(msg.value);
        emit ContibutionWorth(msg.sender, contributions[msg.sender], "native");
    }
    // Receive native tokens
    function payNative() external payable {
        require(!withdrawalEnabled, "Withdrawal already enabled");
        (bool success, ) = treasuryAddress.call{value: msg.value}("");
        require(success, "Payment Failed");
        contributions[msg.sender] = contributions[msg.sender] + calculateNativeRate(msg.value);
        totalNativeTokensDeposited + msg.value;
        totalTokensOwed += calculateNativeRate(msg.value);
        emit ContibutionWorth(msg.sender, contributions[msg.sender], "native");
    }

    // Accept ERC20 contributions
    function contributeERC20(uint256 amount) external {
        require(!withdrawalEnabled, "Withdrawal already enabled");
        require(acceptedToken.transferFrom(msg.sender, treasuryAddress, amount), "ERC20 transfer failed");
        contributions[msg.sender] = contributions[msg.sender] + calculateTokenRate(amount);
        totalERC20TokensDeposited + amount;
        totalTokensOwed += calculateTokenRate(amount);
        emit ContibutionWorth(msg.sender, amount, "erc20");
    }


    // Claim tokens
    function claimTokens() external {
        require(withdrawalEnabled, "Withdrawal not yet enabled");
        totalTokensOwed -= contributions[msg.sender];
        uint256 amtToPay = contributions[msg.sender];
        contributions[msg.sender] = 0; // Reset contribution
        require(dcenToken.transfer(msg.sender, amtToPay), "Token transfer failed");
        emit tokenClaimed(msg.sender, contributions[msg.sender]);
    }


}
