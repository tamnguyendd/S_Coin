const MetamaskValue = {
    ADDRESS:  "0x5005AA757A18d71a6ed708860c8066803dD27387",
    ABI:[
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
                    "name": "_vi",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "item_id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_tien",
                    "type": "uint256"
                }
            ],
            "name": "LogThanhToanTien",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "item_id",
                    "type": "uint256"
                }
            ],
            "name": "ThanhToanTien",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "TongTien",
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
            "inputs": [],
            "name": "rutTien",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]

}
export default MetamaskValue