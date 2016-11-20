contract CiticToken {

	/* Public variables of the token */
    string public name;
    string public symbol;
    uint8 public decimals;

    /* This creates an array with all balances */
    mapping (address => uint256) public balanceOf;
    mapping (address => bool) public frozenAccount;

    /* This generates a public event on the blockchain that will notify clients */
    event Transfer(address indexed from, address indexed to, uint256 value);
	event FrozenFunds(address target, bool frozen);


    /* Initializes contract with initial supply tokens to the creator of the contract */
	function CiticToken(uint256 initialSupply, string tokenName, uint8 decimalUnits, string tokenSymbol) {
	    balanceOf[msg.sender] = initialSupply;              // Give the creator all initial tokens
	    name = tokenName;                                   // Set the name for display purposes
	    symbol = tokenSymbol;                               // Set the symbol for display purposes
	    decimals = decimalUnits;                            // Amount of decimals for display purposes
	}


	/* Send coins */
	function transfer(address _to, uint256 _value) {
		if (frozenAccount[msg.sender]) throw;

    	/* if the sender doenst have enough balance the stop */
	    if (balanceOf[msg.sender] < _value) throw;
	    if (balanceOf[_to] + _value < balanceOf[_to]) throw;

	    /* Add and subtract new balances */
	    balanceOf[msg.sender] -= _value;
	    balanceOf[_to] += _value;

	    /* Notify anyone listening that this transfer took place */
    	Transfer(msg.sender, _to, _value);
	}


	function freezeAccount(address target, bool freeze) onlyOwner {
	    frozenAccount[target] = freeze;
	    FrozenFunds(target, freeze);
	}

}
