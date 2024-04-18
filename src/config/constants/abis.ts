export const ABI_ERC20 = [
    // approve(_spender, _value)
    {
        inputs: [
        { internalType: "address", name: "_spender", type: "address" },
        { internalType: "uint256", name: "_value", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "success", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    // totalSupply()
    {
        // constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
        {
            name: "",
            type: "uint256",
        },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        // constant: true,
        inputs: [
        {
            name: "_owner",
            type: "address",
        },
        ],
        name: "balanceOf",
        outputs: [
        {
            name: "balance",
            type: "uint256",
        },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
];