import EthManager from "../src/centerpirme.js";

const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;


app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
    console.log('api/users called!!!!')
    res.json(users);
});

// var ethManager = new EthManager("https://ropsten.infura.io/v3/1ebda450682b4897920d8a721a289303");
// ethManager.getEtherBalance("0x6dBe810e3314546009bD6e1B29f9031211CdA5d2").then(
//     res=>{
//         console.log(res);
//     }, error=>{
//         console.log(error);
//     }
// );


// let keystore = {"address":"07da59bf9aec3d9fe3feab247c8522254a08a9d2","crypto":{"cipher":"aes-128-ctr","ciphertext":"4e5e90aac0855c0e608df649c90eabf1830eda5acaa92e4b0e40c35a78c32306","cipherparams":{"iv":"c2c6c212dfb31d4a98b2c84eef8f9199"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":4096,"p":6,"r":8,"salt":"52ead110bbec5556bf089411de3f1d268bd3605a03ca746e50b6a760b6dd13eb"},"mac":"1c5739ff59d5075c95a743563b42132b60ca12cef583f6ec924f7432d2622f38"},"id":"2cb2f27f-d358-451d-81fe-7a825ebf069e","version":3}
// let password = "12345";
// let amount = 12
// let toAddress = '0x38C1E1204C10C8be90ecA671Da8Ea8a9AEb16031'


// let tokenContractAddress = '0xa1825717848bdeb9b1b2389471fe0d98c0af71a5';

// ethManager.sendToken(keystore,password,tokenContractAddress, toAddress,amount,3).then(res=>{
//     console.log(res);
// })