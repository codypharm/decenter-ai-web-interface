// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";


contract PresaleContract is Ownable {
   

    IERC20  public acceptedToken;
    IERC20 public dcenToken;
    address payable treasuryAddress;
    mapping(address => uint256) public benefits;
    uint256 public rate ;
    bool public withdrawalEnabled;
    uint256 public totalERC20TokensDeposited = 0;
    uint256 public totalNativeTokensDeposited = 0;
    uint256 public totalTokensOwed = 0;
    
    address maticAggregator = 0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada;
    address usdtAggregator = 0x92C09849638959196E976289418e5973CC96d645;
    AggregatorV3Interface internal maticFeed ;
    AggregatorV3Interface internal usdtFeed ;
    

    event ContibutionWorth(
        address indexed account,
        uint256 benefit,
        bytes   tokenType
    );


    event tokenClaimed(
        address indexed account,
        uint256 contribution
    );

    constructor(
    address _acceptedToken,
    address payable _treasuryAddress,
    uint256  _rate ,
    AggregatorV3Interface _maticFeed,
    AggregatorV3Interface _usdtFeed
    )Ownable(msg.sender){
        acceptedToken = IERC20(_acceptedToken);
        treasuryAddress = _treasuryAddress;
        withdrawalEnabled = false;
        rate = _rate;
       maticFeed = _maticFeed;
       usdtFeed = _usdtFeed;
    }

  
    //set rate for native token
    function setRate (uint _rate) public onlyOwner{
        rate = _rate;
    }
   
    // Enable token withdrawal
    function enableWithdrawal(address _dcenToken) public onlyOwner {
        withdrawalEnabled = true;
         dcenToken = IERC20(_dcenToken);

    }

    function getMaticRate() internal view returns(int answer){
       (
            /* uint80 roundID */,
            answer,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = maticFeed.latestRoundData();
      
    }
    function getUsdtRate() internal view returns(int answer){
       
       (
            /* uint80 roundID */,
            answer,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = usdtFeed.latestRoundData();
    }

    // Receive native tokens
    receive() external payable {
        require(!withdrawalEnabled, "Withdrawal already enabled");
        (bool success, ) = treasuryAddress.call{value: msg.value}("");
        require(success, "Payment Failed");
        uint currRate = uint(getMaticRate()); //Matic/USD
        uint amountDeposited = msg.value * 10 ** 8; //adding extra 8, 0s
        uint tokenWorthUSD = amountDeposited / currRate; // token worth in usd
        benefits[msg.sender] += (tokenWorthUSD * 10 ** 18 )/ rate ;
        totalNativeTokensDeposited += msg.value;
        totalTokensOwed += (tokenWorthUSD * 10 ** 18 ) / rate;
        emit ContibutionWorth(msg.sender, (tokenWorthUSD * 10 ** 18 ) / rate, "native");
    }
    // Receive native tokens
    function payNative() external payable {
       require(!withdrawalEnabled, "Withdrawal already enabled");
        (bool success, ) = treasuryAddress.call{value: msg.value}("");
        require(success, "Payment Failed");
        uint currRate = uint(getMaticRate()); //Matic/USD
        uint amountDeposited = msg.value * 10 ** 8; //adding extra 8, 0s
        uint tokenWorthUSD = amountDeposited / currRate; // token worth in usd
        benefits[msg.sender] += (tokenWorthUSD * 10 ** 18 ) / rate ;
        totalNativeTokensDeposited += msg.value;
        totalTokensOwed += (tokenWorthUSD * 10 ** 18 ) / rate;
        emit ContibutionWorth(msg.sender, (tokenWorthUSD * 10 ** 18 ) / rate, "native");
    }

    // Accept ERC20 contributions
    function contributeERC20(uint256 amount) external {
        require(!withdrawalEnabled, "Withdrawal already enabled");
        require(acceptedToken.transferFrom(msg.sender, treasuryAddress, amount), "ERC20 transfer failed");
        uint currRate = uint(getUsdtRate()); //USDT/USD
        uint amountDeposited = amount * 10 ** 8; //adding extra 8, 0s
        uint tokenWorthUSD = amountDeposited / currRate; // token worth in usd
        benefits[msg.sender] += (tokenWorthUSD * 10 ** 18 ) / rate ;
        totalERC20TokensDeposited += amount;
        totalTokensOwed += (tokenWorthUSD * 10 ** 18 ) / rate;
        emit ContibutionWorth(msg.sender, (tokenWorthUSD * 10 ** 18 ) / rate, "erc20");
    }


    // Claim tokens
    function claimTokens() external {
        require(withdrawalEnabled, "Withdrawal not yet enabled");
        totalTokensOwed -= benefits[msg.sender];
        uint256 amtToPay = benefits[msg.sender];
        benefits[msg.sender] = 0; // Reset contribution
        require(dcenToken.transfer(msg.sender, amtToPay), "Token transfer failed");
        emit tokenClaimed(msg.sender, amtToPay);
    }


}
