import web3 from "./web3";

const address = "0x0a65c3660771279FeDE36cc8AD304c3E9AD150e3";
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


// deployed contract address: 0x4f4840Ef91948c3FD4D35F8Ac35cC2afE2b47e82