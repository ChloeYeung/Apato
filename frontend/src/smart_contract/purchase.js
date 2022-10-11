import web3 from "./web3";

//replace with your contract address
const address = "0xC1BaF2554ee64b640363AA1b4b6BB3253D90d4ce";

// replace with your abi
const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
    signature: "constructor",
  },
  {
    inputs: [],
    name: "apato",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0xa1d711ff",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "balancesOfCustomer",
    outputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "refund", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0xfd9fbcd5",
  },
  {
    inputs: [],
    name: "get_Refund_Percentage",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0x12afa5b8",
  },
  {
    inputs: [],
    name: "purchaseWithLuck",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
    signature: "0xb279abe8",
  },
  {
    inputs: [],
    name: "purchaseWithOutLuck",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
    signature: "0xeb02392b",
  },
  {
    inputs: [],
    name: "recieve",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
    signature: "0xa9e10bf2",
  },
  {
    inputs: [],
    name: "refund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
    signature: "0x590e1ae3",
  },
];

export default new web3.eth.Contract(abi, address);

// current contract address: 0xD92Ca917dea7Fa95f6b8b3b97cDc8A0fdEc8aA50
