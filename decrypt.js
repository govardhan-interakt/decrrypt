const fs = require('fs')
 const king = require('./king.json');
// //console.log(king)
// fs.readFile("king.json","utf-8",(err,data)=>{
//    // console.log(data)
   
// })
// king.map(({eth_address})=>console.log(eth_address))




 var crypto = require('crypto')

const algorithm = 'aes-256-cbc'; 
const encrpt ='s1XrWeMEc2aJn1tu5HMpKeTh'
const key = crypto.createHash('sha256').update(String(encrpt)).digest('base64').substr(0, 32);
const iv = encrpt.toString('hex').slice(0, 16);

function decryptdata(text){
    const decipher = crypto.createDecipheriv(algorithm,key,iv)
    const decrypted = decipher.update(text,'hex','utf8') + decipher.final('utf8');
    return decrypted;
}

console.log(decryptdata('2686b6c12f4f324a3bd5426e2c9df50648918c541e9bff8456ad585530ba19c4df637766ac525f300def7111348f6520'))