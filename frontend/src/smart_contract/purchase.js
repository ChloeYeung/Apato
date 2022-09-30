import web3 from "./web3";

const address = "0xD9279a79a78e491D17A574001be204A90062e771";
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
    inputs: [],
    name: "customer",
    outputs: [{ internalType: "address payable", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0x2804b2c0",
  },
  {
    inputs: [],
    name: "purchase",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
    signature: "0x64edfbf0",
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
];

export default new web3.eth.Contract(abi, address);

// deployed contract address: 0xD9279a79a78e491D17A574001be204A90062e771
