const users = [
  { "_id": "61aeea9868c91355a4f309aa",
    "address": "0x9cc86daa3869c8d9464d3fec5fa31f7266035ebf",
    "deposit_amount": 1500 },
  { "_id": "61b1848a62bf5888afb08d22",
    "address": "0xa047ccb3d40dad0eb1284fdc1d941bc79e6d1aa6",
    "deposit_amount": 1500 },
  { "_id": "61b2a2f462bf5888afb08d25",
    "address": "0x1d3888fc2a43621828020cb3f9957baf43f1f21c",
    "deposit_amount": 1504.90579 },
  { "_id": "61b6f9b162bf5888afb08d29",
    "address": "0x7faa81c1bd05557dfaa0d2a7f90542474a9ec894",
    "deposit_amount": 1500 },
  { "_id": "61b9d7c762bf5888afb08d2f",
    "address": "0x860c003a2a83c1c860a06a1b99e0c41f9dc19870",
    "deposit_amount": 1474 },
  { "_id": "61bb1f3562bf5888afb08d35",
    "address": "0x9cfbc8feed201b79418c9e84f25bd630c8c066f6",
    "deposit_amount": 1500 },
  { "_id": "61bb2a3962bf5888afb08d36",
    "address": "0x7cb1f2f07b4e82600893924d8f3ba9b96845a83f",
    "deposit_amount": 1500 },
  { "_id": "61bb2b2962bf5888afb08d37",
    "address": "0x7cb1f2f07b4e82600893924d8f3ba9b96845a83f",
    "deposit_amount": 1500 },
  { "_id": "61bb2d0962bf5888afb08d38",
    "address": "0x4c44dfd8ed01df9e689f7a088d4a3941708c9157",
    "deposit_amount": 1500 },
  { "_id": "61bcd05862bf5888afb08d39",
    "address": "0x5a5c21b7d8786abeef2688e3ecaed28444d2a24c",
    "deposit_amount": 1500 },
  { "_id": "61bd6b8162bf5888afb08d3a",
    "address": "0x05e3f85b15081edadf9475a245c542ff60dc4d33",
    "deposit_amount": 1500 },
  { "_id": "61bd95b162bf5888afb08d3c",
    "address": "0x69bdc682dd379d7e10f0c87ad9b7415adb95eb38",
    "deposit_amount": 1500 },
  { "_id": "61c12a9862bf5888afb08d42",
    "address": "0xb84e04587e97ef9ffa695ba17108fa3c3c0d5386",
    "deposit_amount": 1500 },
  { "_id": "61c1631462bf5888afb08d44",
    "address": "0xb4bb28d94d2b4f21baabcfec8571b16139310e52",
    "deposit_amount": 1500 },
  { "_id": "61c30a6062bf5888afb08d48",
    "address": "0x5c1c5672d5fb851bed5fa2f400cad31ab471486b",
    "deposit_amount": 1500 },
  { "_id": "61c4609262bf5888afb08d4a",
    "address": "0x347a4c77e8c4083390d2c0459d8c8ff956d3673d",
    "deposit_amount": 1475 },
  { "_id": "61c5b55f62bf5888afb08d4d",
    "address": "0x5fb806ff98667ef25eefa31d329840704c1aca5a",
    "deposit_amount": 2621.241853 },
  { "_id": "61c5be4462bf5888afb08d4e",
    "address": "0xd480f4a387b1e40bfb5dfb97ecd9a27f651478f5",
    "deposit_amount": 1500 },
  { "_id": "61ce7b3562bf5888afb08d51",
    "address": "0x6aed43c6095576c44163dfe7bdee8de9df958194",
    "deposit_amount": 1500 },
  { "_id": "61d3de1562bf5888afb08d55",
    "address": "0xbea8650d485c67bfb45ea71ef9019dbc249bd769",
    "deposit_amount": 1500 },
    { "_id": "61dd847a62bf5888afb08d67",
    "address": "0x8c548380b648170d659100ab9436824bdb06cdf5",
    "deposit_amount": 1505 },
  { "_id": "61dd8a9262bf5888afb08d68",
    "address": "0x9161fe6806ce7803391ba2eeefd8361b58b70342",
    "deposit_amount": 1500 },
  { "_id": "61deb162e66c1330d3fcbf5f",
    "address": "0x5f93280297738c86c6d2182b1a60267e51642041",
    "deposit_amount": 1500 },
  { "_id": "62318430107b761eb69ab5b7",
    "address": "0x3f5e304ae865096285191295c78d9161b77088bf",
    "deposit_amount": 1500 },
  { "_id": "62385704107b761eb69ba978",
    "address": "0x143f52618664ec0b39def733400126f47d3a0e83",
    "deposit_amount": 1500 },
  { "_id": "623ab353107b761eb69bfdf1",
    "address": "0xee8e18bf7a1a68f6f74192887067e213de668e67",
    "deposit_amount": 1500 },
  { "_id": "623ae5f5107b761eb69c0526",
    "address": "0x36a59042321c85ead0b9e748c85d92849fb1b099",
    "deposit_amount": 1500 },
  { "_id": "62440c78d52088c110a49150",
    "address": "0x92db7088bf30b115490c258da5ed7202d8e6862a",
    "deposit_amount": 1500 },
  { "_id": "624a8081d52088c110a90306",
    "address": "0xee8572d1b119cf631b0ef14a8281aac08169ace0",
    "deposit_amount": 1500 }
  ]

const user_details = [];
var Web3=require('web3');
var web3 = new Web3('https://mainnet.infura.io/v3/44e3fa3c1271400f96c4718047e3d646')
const contractAddress='0xdAC17F958D2ee523a2206206994597C13D831ec7'
const abi =[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}]
  function getBalance(address){
      return new Promise((resolve, reject)=>{
          // balance getting logic
          var contractInstance = new web3.eth.Contract(abi,contractAddress)
        var current_balance=  contractInstance.methods.balanceOf(address)
          //keep the balance in the resolve
          resolve({balance:current_balance})
      })
  }

 const check_user_balances = async () => {
      Promise.all(
          users.map(async (s_user) => {

                  getBalance(s_user.address).then(result=>{
                      if(result.balance>0){
                          let obj = {
                              _id:s_user._id,
                              address:s_user.address,
                              
                              usdt_balance:result.balance
                          };
                          user_details.push(obj);
                          resolve(true)
                      }else{
                          resolve(true)
                      }
                  })
              
          })
      ).then(finished=>{
          console.log('=========Total list=========',users.length);
          console.log('++++++++++User with balances count+++++++', user_details.length);
          console.log(user_details);
      })

  }

  setTimeout(()=>{
      check_user_balances();
  },5000)