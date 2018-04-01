pragma solidity ^0.4.18;

contract MyContract {
    uint activeNumber;
    /* Constructor */
    function MyContract(uint number) public {
        activeNumber = number;
    }
    
    function setActiveNumber(uint newNumber) public {
        activeNumber = newNumber;
    }
    
    function getActiveNumber() public constant returns(uint)  {
        return activeNumber;
    }
    
}