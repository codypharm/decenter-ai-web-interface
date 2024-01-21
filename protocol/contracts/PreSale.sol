// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";



contract PresaleContract is Ownable {
   

    IERC20 acceptedToken;
    IERC20 dcenToken;
    address payable tressuryAddress;
    mapping(address => uint256) contributions;
    uint256 nativeRate = 100000000000000;
    uint256 tokenRate = 50000000000000000;
    bool withdrawalEnabled;
    uint256 totalERC20TokensDeposited = 0;
    uint256 totalNativeTokensDeposited = 0;
    uint256 totalTokensOwed = 0;

    constructor(
    address _acceptedToken,
    address payable _tressuryAddress
    )Ownable(msg.sender){
        acceptedToken = IERC20(_acceptedToken);
        tressuryAddress = _tressuryAddress;
        withdrawalEnabled = false;
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
        contributions[msg.sender] = contributions[msg.sender] + calculateNativeRate(msg.value);
        totalNativeTokensDeposited + msg.value;
        totalTokensOwed + calculateNativeRate(msg.value);
        tressuryAddress.transfer(msg.value);
    }

    // Accept ERC20 contributions
    function contributeERC20(uint256 amount) external {
        require(!withdrawalEnabled, "Withdrawal already enabled");
        require(acceptedToken.transferFrom(msg.sender, tressuryAddress, amount), "ERC20 transfer failed");
        contributions[msg.sender] = contributions[msg.sender] + calculateTokenRate(amount);
        totalERC20TokensDeposited + amount;
        totalTokensOwed + calculateTokenRate(amount);
    }


    // Claim tokens
    function claimTokens() external {
        require(withdrawalEnabled, "Withdrawal not yet enabled");
        contributions[msg.sender] = 0; // Reset contribution
        totalTokensOwed + contributions[msg.sender];
        require(dcenToken.transfer(msg.sender, contributions[msg.sender]), "Token transfer failed");
       
    }


}
