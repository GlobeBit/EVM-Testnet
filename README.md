{
	"compiler": {
		"version": "0.8.7+commit.e28d00a7"
	},
	"language": "Solidity",
	"output": {
		"abi": [
			{
				"inputs": [],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "spender",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "Approval",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "previousOwner",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "OwnershipTransferred",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "Transfer",
				"type": "event"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "spender",
						"type": "address"
					}
				],
				"name": "allowance",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "spender",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "approve",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "account",
						"type": "address"
					}
				],
				"name": "balanceOf",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "burn",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "account",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "burnFrom",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "decimals",
				"outputs": [
					{
						"internalType": "uint8",
						"name": "",
						"type": "uint8"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "spender",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "subtractedValue",
						"type": "uint256"
					}
				],
				"name": "decreaseAllowance",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "spender",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "addedValue",
						"type": "uint256"
					}
				],
				"name": "increaseAllowance",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "mint",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "name",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "owner",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "renounceOwnership",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "symbol",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "totalSupply",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "transfer",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "transferFrom",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "transferOwnership",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			}
		],
		"devdoc": {
			"kind": "dev",
			"methods": {
				"allowance(address,address)": {
					"details": "See {IERC20-allowance}."
				},
				"approve(address,uint256)": {
					"details": "See {IERC20-approve}. Requirements: - `spender` cannot be the zero address."
				},
				"balanceOf(address)": {
					"details": "See {IERC20-balanceOf}."
				},
				"burn(uint256)": {
					"details": "Destroys `amount` tokens from the caller. See {ERC20-_burn}."
				},
				"burnFrom(address,uint256)": {
					"details": "Destroys `amount` tokens from `account`, deducting from the caller's allowance. See {ERC20-_burn} and {ERC20-allowance}. Requirements: - the caller must have allowance for ``accounts``'s tokens of at least `amount`."
				},
				"decimals()": {
					"details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
				},
				"decreaseAllowance(address,uint256)": {
					"details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
				},
				"increaseAllowance(address,uint256)": {
					"details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
				},
				"name()": {
					"details": "Returns the name of the token."
				},
				"owner()": {
					"details": "Returns the address of the current owner."
				},
				"renounceOwnership()": {
					"details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
				},
				"symbol()": {
					"details": "Returns the symbol of the token, usually a shorter version of the name."
				},
				"totalSupply()": {
					"details": "See {IERC20-totalSupply}."
				},
				"transfer(address,uint256)": {
					"details": "See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`."
				},
				"transferFrom(address,address,uint256)": {
					"details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`."
				},
				"transferOwnership(address)": {
					"details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
				}
			},
			"version": 1
		},
		"userdoc": {
			"kind": "user",
			"methods": {},
			"version": 1
		}
	},
	"settings": {
		"compilationTarget": {
			"contract-99e5d069f9.sol": "Ormera"
		},
		"evmVersion": "london",
		"libraries": {},
		"metadata": {
			"bytecodeHash": "ipfs"
		},
		"optimizer": {
			"enabled": false,
			"runs": 200
		},
		"remappings": []
	},
	"sources": {
		"@openzeppelin/contracts@4.3.2/access/Ownable.sol": {
			"keccak256": "0x6bb804a310218875e89d12c053e94a13a4607cdf7cc2052f3e52bd32a0dc50a1",
			"license": "MIT",
			"urls": [
				"bzz-raw://b2ebbbe6d0011175bd9e7268b83de3f9c2f9d8d4cbfbaef12aff977d7d727163",
				"dweb:/ipfs/Qmd5c7Vxtis9wzkDNhxwc6A2QT5H9xn9kfjhx7qx44vpro"
			]
		},
		"@openzeppelin/contracts@4.3.2/token/ERC20/ERC20.sol": {
			"keccak256": "0xb03df8481a954604ad0c9125680893b2e3f7ff770fe470e38b89ac61b84e8072",
			"license": "MIT",
			"urls": [
				"bzz-raw://b34655953d18ba3a45b762fb6bdbb6549af69a27435e10ece178742bf70baf45",
				"dweb:/ipfs/QmcqjUoFLLMyx7dbwSHUnDBH6aphkVHXWQvQRRev5EAWEh"
			]
		},
		"@openzeppelin/contracts@4.3.2/token/ERC20/IERC20.sol": {
			"keccak256": "0x027b891937d20ccf213fdb9c31531574256de774bda99d3a70ecef6e1913ed2a",
			"license": "MIT",
			"urls": [
				"bzz-raw://087318b21c528119f649899f5b5580566dd8d7b0303d4904bd0e8580c3545f14",
				"dweb:/ipfs/Qmbn5Mj7aUn8hJuQ8VrQjjEXRsXyJKykgnjR9p4C3nfLtL"
			]
		},
		"@openzeppelin/contracts@4.3.2/token/ERC20/extensions/ERC20Burnable.sol": {
			"keccak256": "0xf98cb1651a90d20ef77d8c1dd10d5fce4954e747603e5672a8292bd4368120dd",
			"license": "MIT",
			"urls": [
				"bzz-raw://76b539a8edd558b010d1ff3e462c5d4edd039b790b91f31a5bce18957655cc9f",
				"dweb:/ipfs/QmSdJehhx1SwCWLSFFgHQTmUY2YwDTBQjTVjkmhXhA1srb"
			]
		},
		"@openzeppelin/contracts@4.3.2/token/ERC20/extensions/IERC20Metadata.sol": {
			"keccak256": "0x83fe24f5c04a56091e50f4a345ff504c8bff658a76d4c43b16878c8f940c53b2",
			"license": "MIT",
			"urls": [
				"bzz-raw://d4c3df1a7ca104b633a7d81c6c6f5192367d150cd5a32cba81f7f27012729013",
				"dweb:/ipfs/QmSim72e3ZVsfgZt8UceCvbiSuMRHR6WDsiamqNzZahGSY"
			]
		},
		"@openzeppelin/contracts@4.3.2/utils/Context.sol": {
			"keccak256": "0x90565a39ae45c80f0468dc96c7b20d0afc3055f344c8203a0c9258239f350b9f",
			"license": "MIT",
			"urls": [
				"bzz-raw://26e8b38a7ac8e7b4463af00cf7fff1bf48ae9875765bf4f7751e100124d0bc8c",
				"dweb:/ipfs/QmWcsmkVr24xmmjfnBQZoemFniXjj3vwT78Cz6uqZW1Hux"
			]
		},
		"contract-99e5d069f9.sol": {
			"keccak256": "0xb663f6786d2441632e43fb34ca9ecb946dd7d0b0f4cecaece9f521ed1d8c5985",
			"license": "MIT",
			"urls": [
				"bzz-raw://639c8d63e461c8fe059cd9a7d3ea12beda6e4f3ca24c150840c2dde10a15e3f3",
				"dweb:/ipfs/QmVweg3oeabgksDYHzHtjEr4XrB6vGnUjiPc57BgPf4HS7"
			]
		}
	},
	"version": 1
}
