//MyToken on etherchain.org

1.Contract

MyToken


2.Address
Address 0x8A772004af0b8FCA5e7093C6f277bA7B0E8Fa97a

Balance:	0 Ether
Created by:	0xf6b11c80377a3cc36c928650c38f755e36b41847f6d6d50d3d0c04eb4940aca3


3.Code
Verified contract source code available!
How does it work?
Contract name: MyToken
Compiler version: v0.3.0-2016-03-11-1f9578c
Optimization used: Yes
Source:

contract owned {
    address public owner;

    function owned() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        if (msg.sender != owner) throw;
        _
    }

    function transferOwnership(address newOwner) onlyOwner {
        owner = newOwner;
    }
}

contract tokenRecipient { function sendApproval(address _from, uint256 _value, address _token); }

contract MyToken is owned { 
    /* Public variables of the token */
    string public name;
    string public symbol;
    uint8 public decimals;
	uint8 public disableconstruction;
    /* This creates an array with all balances */
    mapping (address => uint256) public balanceOf;

    /* This generates a public event on the blockchain that will notify clients */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /* Initializes contract with initial supply tokens to the creator of the contract */
    function MyTokenLoad(uint256 initialSupply, string tokenName, uint8 decimalUnits, string tokenSymbol, address centralMinter) {
		if(disableconstruction != 2){
            if(centralMinter != 0 ) owner = msg.sender;         // Sets the minter
            balanceOf[msg.sender] = initialSupply;              // Give the creator all initial tokens                    
            name = tokenName;                                   // Set the name for display purposes     
            symbol = tokenSymbol;                               // Set the symbol for display purposes    
            decimals = decimalUnits;                            // Amount of decimals for display purposes        
		}
    }
    function MyToken(){
        MyTokenLoad(10000000000000,'Kraze',8,'KRZ',0);
		disableconstruction=2;
    }
    /* Send coins */
    function transfer(address _to, uint256 _value) {
        if (balanceOf[msg.sender] < _value) throw;           // Check if the sender has enough   
        if (balanceOf[_to] + _value < balanceOf[_to]) throw; // Check for overflows
        balanceOf[msg.sender] -= _value;                     // Subtract from the sender
        balanceOf[_to] += _value;                            // Add the same to the recipient            
        Transfer(msg.sender, _to, _value);                   // Notify anyone listening that this transfer took place
    }

    /* This unnamed function is called whenever someone tries to send ether to it */
    function () {
        throw;     // Prevents accidental sending of ether
    }
}


Contract creation bytecode:
0x6000805433600160a060020a0319909116178155600560609081527f4b72617a6500000000000000000000000000000000000000000000000000000060805260e0604052600360a08181527f4b525a000000000000000000000000000000000000000000000000000000000060c0529054610133936509184e72a0009392600892909190610100900460ff1660021461015f575b600160a060020a033316600090815260046020908152604082208790556001805487519382905290927fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6600283861615610100026000190190931692909204601f90810184900483019391929189019083901061016657805160ff19168380011785555b506101969291505b808211156101ef576000815560010161011f565b6003805461ff0019166102001790556105b3806102236000396000f35b50506003805460ff1916841790555b5050505050565b82800160010185558215610117579182015b82811115610117578251826000505591602001919060010190610178565b50508160026000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101f357805160ff19168380011785555b5061015092915061011f565b5090565b828001600101855582156101e3579182015b828111156101e357825182600050559160200191906001019061020556606060405236156100775760e060020a6000350463041d0c0b811461007f57806306fdde03146101f1578063313ce5671461024e57806353ffab1d1461025a57806370a082311461026c5780638da5cb5b1461028457806395d89b4114610296578063a9059cbb146102f3578063f2fde38b14610322575b610343610002565b60408051602060248035600481810135601f8101859004850286018501909652858552610343958135959194604494929390920191819084018382808284375050604080516020606435808b0135601f810183900483028401830190945283835297999835989760849750919550602491909101935090915081908401838280828437509496505093359350505050600354610100900460ff1660021461045d57600160a060020a038116600014610151576000805473ffffffffffffffffffffffffffffffffffffffff1916331790555b600160a060020a033316600090815260046020908152604082208790556001805487519382905290927fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6600283861615610100026000190190931692909204601f90810184900483019391929189019083901061046457805160ff19168380011785555b506104949291505b808211156104ed57600081556001016101dd565b61034560018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104465780601f1061041b57610100808354040283529160200191610446565b6103b360035460ff1681565b6103b360035460ff6101009091041681565b6103ca60043560046020526000908152604090205481565b6103dc600054600160a060020a031681565b61034560028054604080516020601f600019600186161561010002019094168590049384018190048102820181019092528281529291908301828280156104465780601f1061041b57610100808354040283529160200191610446565b61034360043560243533600160a060020a03166000908152600460205260409020548190101561052157610002565b61034360043560005433600160a060020a039081169116146103f957610002565b005b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103a55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6040805160ff929092168252519081900360200190f35b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b6000805473ffffffffffffffffffffffffffffffffffffffff19168217905550565b820191906000526020600020905b81548152906001019060200180831161042957829003601f168201915b505050505081565b50506003805460ff1916841790555b5050505050565b828001600101855582156101d5579182015b828111156101d5578251826000505591602001919060010190610476565b50508160026000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106104f157805160ff19168380011785555b5061044e9291506101dd565b5090565b828001600101855582156104e1579182015b828111156104e1578251826000505591602001919060010190610503565b600160a060020a038216600090815260046020526040902054808201101561054857610002565b600160a060020a03338116600081815260046020908152604080832080548790039055938616808352918490208054860190558351858152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a3505056


3.Transactions received
Last 100 received transactions

Hash	From	Amount	Time
0xa637b04e...	0xC84a032c26F5b1E8fC6560A4675020C7649b4B69	0 Ether	2016-08-08 09:25:29 (3 months ago)
0x8a6430e8...	0xC84a032c26F5b1E8fC6560A4675020C7649b4B69	0 Ether	2016-08-05 06:30:57 (4 months ago)
0x9ec0f965...	0xC84a032c26F5b1E8fC6560A4675020C7649b4B69	0 Ether	2016-08-05 06:29:13 (4 months ago)
0x0e677060...	0x18D80127f70486Ca6Ba4E8D284098AAcf1B713fa	0 Ether	2016-08-05 05:38:07 (4 months ago)
0x5b6dddc5...	0x18D80127f70486Ca6Ba4E8D284098AAcf1B713fa	0 Ether	2016-08-05 05:36:19 (4 months ago)
0x1f0d3ba9...	0xf41B0132DE5015712c87ea59571C8a295414D1f0	0 Ether	2016-08-05 02:20:42 (4 months ago)
0x81f28921...	0xf41B0132DE5015712c87ea59571C8a295414D1f0	0 Ether	2016-08-05 02:18:30 (4 months ago)
0xf6b11c80...	0xf41B0132DE5015712c87ea59571C8a295414D1f0	0 Ether	2016-03-24 07:35:50 (8 months ago)


4.Created by:
Tx: 0xf6b11c80377a3cc36c928650c38f755e36b41847f6d6d50d3d0c04eb4940aca3
Block: 1207013
Time: 2016-03-24 07:35:50 (8 months ago)
From: 0xf41B0132DE5015712c87ea59571C8a295414D1f0
To: 0x8A772004af0b8FCA5e7093C6f277bA7B0E8Fa97a
Amount: 0 Ether
Account Nonce: 1
Gas Price: 2e-8 Ether
Gas Limit: 680,538
Total Gas Used: 580,538
Tx Price: 0.01361076 Ether
Payload:

0x6000805433600160a060020a0319909116178155600560609081527f4b72617a65000000000000000000000000000000000000000000000000000000608052
60e0604052600360a08181527f4b525a000000000000000000000000000000000000000000000000000000000060c0529054610133936509184e72a000939260
0892909190610100900460ff1660021461015f575b600160a060020a033316600090815260046020908152604082208790556001805487519382905290927fb1
0e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6600283861615610100026000190190931692909204601f90810184900483019391
929189019083901061016657805160ff19168380011785555b506101969291505b808211156101ef576000815560010161011f565b6003805461ff0019166102
001790556105b3806102236000396000f35b50506003805460ff1916841790555b5050505050565b82800160010185558215610117579182015b828111156101
17578251826000505591602001919060010190610178565b50508160026000509080519060200190828054600181600116156101000203166002900490600052
602060002090601f016020900481019282601f106101f357805160ff19168380011785555b5061015092915061011f565b5090565b8280016001018555821561
01e3579182015b828111156101e357825182600050559160200191906001019061020556606060405236156100775760e060020a6000350463041d0c0b811461
007f57806306fdde03146101f1578063313ce5671461024e57806353ffab1d1461025a57806370a082311461026c5780638da5cb5b1461028457806395d89b41
14610296578063a9059cbb146102f3578063f2fde38b14610322575b610343610002565b60408051602060248035600481810135601f81018590048502860185
01909652858552610343958135959194604494929390920191819084018382808284375050604080516020606435808b0135601f810183900483028401830190
945283835297999835989760849750919550602491909101935090915081908401838280828437509496505093359350505050600354610100900460ff166002
1461045d57600160a060020a038116600014610151576000805473ffffffffffffffffffffffffffffffffffffffff1916331790555b600160a060020a033316
600090815260046020908152604082208790556001805487519382905290927fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6
600283861615610100026000190190931692909204601f90810184900483019391929189019083901061046457805160ff19168380011785555b506104949291
505b808211156104ed57600081556001016101dd565b61034560018054604080516020600284861615610100026000190190941693909304601f810184900484
028201840190925281815292918301828280156104465780601f1061041b57610100808354040283529160200191610446565b6103b360035460ff1681565b61
03b360035460ff6101009091041681565b6103ca60043560046020526000908152604090205481565b6103dc600054600160a060020a031681565b6103456002
8054604080516020601f600019600186161561010002019094168590049384018190048102820181019092528281529291908301828280156104465780601f10
61041b57610100808354040283529160200191610446565b61034360043560243533600160a060020a0316600090815260046020526040902054819010156105
2157610002565b61034360043560005433600160a060020a039081169116146103f957610002565b005b60405180806020018281038252838181518152602001
915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103a55780820380516001836020036101000a03
1916815260200191505b509250505060405180910390f35b6040805160ff929092168252519081900360200190f35b60408051918252519081900360200190f3
5b60408051600160a060020a03929092168252519081900360200190f35b6000805473ffffffffffffffffffffffffffffffffffffffff19168217905550565b
820191906000526020600020905b81548152906001019060200180831161042957829003601f168201915b505050505081565b50506003805460ff1916841790
555b5050505050565b828001600101855582156101d5579182015b828111156101d5578251826000505591602001919060010190610476565b50508160026000
509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106104f157805160ff191683
80011785555b5061044e9291506101dd565b5090565b828001600101855582156104e1579182015b828111156104e15782518260005055916020019190600101
90610503565b600160a060020a038216600090815260046020526040902054808201101561054857610002565b600160a060020a033381166000818152600460
20908152604080832080548790039055938616808352918490208054860190558351858152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4
a11628f55a4df523b3ef929081900390910190a3505056
 (ASCII: `T3`` `
U```RKraze`R`à`@R`` RKRZ`ÀRTa3e	Nr `a`ÿ`a_W[`` `
3`R`` R`@ U`TQR±-Rv;&îÍýq~j2ôKJúÂ°s-Ëâ·úö`a``afWQ`ÿU[PaP[aïW`U`aV[`TaÿaUa³a#`9`ó[PP`T`ÿU[PPPPPV[`UaW[aWQ`PU` `axV[PP``PQ` T``a``R` ` `` `aóWQ`ÿU[PaPPaV[PV[`UaãW[aãWQ`PU` `aV```@R6awW`à`
`5caWcýÞañWc1<ågaNWcSÿ«aZWcp 1alWc¥Ë[aWcØAaWc©»aóWcòýãa"W[aCaV[`@Q` `$5`5`RRaC5`D7PP`@Q` `d55`RR5`PP`$PP7PPP5PPPP`Ta`ÿ`a]W`` `
`aQW`Tsÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ3U[`` `
3`R`` R`@ U`TQR±-Rv;&îÍýq~j2ôKJúÂ°s-Ëâ·úö`a``adWQ`ÿU[PaP[aíW`U`aÝV[aE`T`@Q` `a``RRaFW`aWaTR` aFV[a³`T`ÿV[a³`T`ÿaV[aÊ`5`` R`R`@ TV[aÜ`T`` `
V[aE`T`@Q` ```aRRaFW`aWaTR` aFV[aC`5`$53`` `
`R`` R`@ Ta!WaV[aC`5`T3`` `
aùWaV[[`@Q` RQR` PQ` ``` ```ñPP`a¥WQ`` a
R` P[PPPP`@Qó[`@Q`ÿRQ` ó[`@QRQ` ó[`@Q`` `
RQ` ó[`TsÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿUPV[`R` ` [TR`` a)W`[PPPPPV[PP`T`ÿU[PPPPPV[`UaÕW[aÕWQ`PU` `avV[PP``PQ` T``a``R` ` `` `añWQ`ÿU[PaNPaÝV[PV[`UaáW[aáWQ`PU` `aV[`` `
`R`` R`@ TaHWaV[`` `
3`R`` R`@ TUR TUQRQÝòR­âÈiÂ°hü7ª+§ñcÄ¡(õZMõ#³ï£PPV)


5.from(Transaction sent)
0xf6b11c80...	0x8A772004af0b8FCA5e7093C6f277bA7B0E8Fa97a	0 Ether	2016-03-24 07:35:50 (8 months ago)


6.Tx: 0x81f28921d844d4977c04f8b35ae32999fabb43925fa45a1b9656d8961176175d
Block: 2012862
Time: 2016-08-05 02:18:30 (4 months ago)
From: 0xf41B0132DE5015712c87ea59571C8a295414D1f0
To: 0x8A772004af0b8FCA5e7093C6f277bA7B0E8Fa97a
Amount: 0 Ether
Account Nonce: 5
Gas Price: 2e-8 Ether
Gas Limit: 128,165
Total Gas Used: 28,165
Tx Price: 0.0025633 Ether
Function Execution:
transferOwnership("0x18d80127f70486ca6ba4e8d284098aacf1b713fa")

Payload:
0xf2fde38b00000000000000000000000018d80127f70486ca6ba4e8d284098aacf1b713fa (ASCII: òýãØ'÷Êk¤èÒ	¬ñ·ú)


7.Tx: 0x1f0d3ba949e44ed267511c25b0776cce8978c88158342f1208ae9deb0fc50cc0
Block: 2012875
Time: 2016-08-05 02:20:42 (4 months ago)
From: 0xf41B0132DE5015712c87ea59571C8a295414D1f0
To: 0x8A772004af0b8FCA5e7093C6f277bA7B0E8Fa97a
Amount: 0 Ether
Account Nonce: 6
Gas Price: 2e-8 Ether
Gas Limit: 150,904
Total Gas Used: 35,904
Tx Price: 0.00301808 Ether
Function Execution:
transfer("0x18d80127f70486ca6ba4e8d284098aacf1b713fa", 10000000000000)

Payload:
0xa9059cbb00000000000000000000000018d80127f70486ca6ba4e8d284098aacf1b713fa000000000000000000000000000000000000000000000000000009
184e72a000
 (ASCII: ©»Ø'÷Êk¤èÒ	¬ñ·ú	Nr )


8.Tx: 0x5b6dddc51bb096fad315a157b137796ec8ce6af92309bdc1f1ee6df90f145acc
Block: 2013673
Time: 2016-08-05 05:36:19 (4 months ago)
From: 0x18D80127f70486Ca6Ba4E8D284098AAcf1B713fa
To: 0x8A772004af0b8FCA5e7093C6f277bA7B0E8Fa97a
Amount: 0 Ether
Account Nonce: 0
Gas Price: 2e-8 Ether
Gas Limit: 128,165
Total Gas Used: 28,165
Tx Price: 0.0025633 Ether
Function Execution:
transferOwnership("0xc84a032c26f5b1e8fc6560a4675020c7649b4b69")

Payload:
0xf2fde38b000000000000000000000000c84a032c26f5b1e8fc6560a4675020c7649b4b69 (ASCII: òýãÈJ,&õ±èüe`¤gP ÇdKi)


9.Tx: 0x0e677060c5b3de3034e91f4035f184ac430bcf028a2d9434472171bf88dcadc6
Block: 2013685
Time: 2016-08-05 05:38:07 (4 months ago)
From: 0x18D80127f70486Ca6Ba4E8D284098AAcf1B713fa
To: 0x8A772004af0b8FCA5e7093C6f277bA7B0E8Fa97a
Amount: 0 Ether
Account Nonce: 1
Gas Price: 2e-8 Ether
Gas Limit: 150,904
Total Gas Used: 35,904
Tx Price: 0.00301808 Ether
Function Execution:
transfer("0xc84a032c26f5b1e8fc6560a4675020c7649b4b69", 10000000000000)

Payload:
0xa9059cbb000000000000000000000000c84a032c26f5b1e8fc6560a4675020c7649b4b69000000000000000000000000000000000000000000000000000009
184e72a000
 (ASCII: ©»ÈJ,&õ±èüe`¤gP ÇdKi	Nr )

 10.Tx: 0x9ec0f965586e06effbf890b7ffe264d2709dcf5b5c2661c49a7a206cf3b110a3
Block: 2013881
Time: 2016-08-05 06:29:13 (4 months ago)
From: 0xC84a032c26F5b1E8fC6560A4675020C7649b4B69
To: 0x8A772004af0b8FCA5e7093C6f277bA7B0E8Fa97a
Amount: 0 Ether
Account Nonce: 0
Gas Price: 2e-8 Ether
Gas Limit: 150,904
Total Gas Used: 35,904
Tx Price: 0.00301808 Ether
Function Execution:
transfer("0x18d80127f70486ca6ba4e8d284098aacf1b713fa", 10000000000000)

Payload:
0xa9059cbb00000000000000000000000018d80127f70486ca6ba4e8d284098aacf1b713fa000000000000000000000000000000000000000000000000000009
184e72a000
 (ASCII: ©»Ø'÷Êk¤èÒ	¬ñ·ú	Nr )

 11.Tx: 0x8a6430e8138c18445df15b9cd0205ecc3d64bbc6413102d3e6e204f498afab44
Block: 2013888
Time: 2016-08-05 06:30:57 (4 months ago)
From: 0xC84a032c26F5b1E8fC6560A4675020C7649b4B69
To: 0x8A772004af0b8FCA5e7093C6f277bA7B0E8Fa97a
Amount: 0 Ether
Account Nonce: 1
Gas Price: 2e-8 Ether
Gas Limit: 128,165
Total Gas Used: 28,165
Tx Price: 0.0025633 Ether
Function Execution:
transferOwnership("0x18d80127f70486ca6ba4e8d284098aacf1b713fa")

Payload:
0xf2fde38b00000000000000000000000018d80127f70486ca6ba4e8d284098aacf1b713fa (ASCII: òýãØ'÷Êk¤èÒ	¬ñ·ú)

12.Tx: 0xa637b04ef89f10397c53b339e013c4dc3f55aa6fc9bdb1bb2b23b82170d71f97
Block: 2032788
Time: 2016-08-08 09:25:29 (3 months ago)
From: 0xC84a032c26F5b1E8fC6560A4675020C7649b4B69
To: 0x8A772004af0b8FCA5e7093C6f277bA7B0E8Fa97a
Amount: 0 Ether
Account Nonce: 2
Gas Price: 2e-8 Ether
Gas Limit: 150,776
Total Gas Used: 150,776
Tx Price: 0.00301552 Ether
Function Execution:
transfer("0x59bc61238a2059e33d5fc0f91b8b8ce5cb45858d", 100000000)

Payload:
0xa9059cbb00000000000000000000000059bc61238a2059e33d5fc0f91b8b8ce5cb45858d000000000000000000000000000000000000000000000000000000
0005f5e100
 (ASCII: ©»Y¼a# Yã=_ÀùåËEõá)

 