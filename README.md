# mnemonic
***
This function receives a mnemonic as string and an account number(0,1,2...) as integer giving as a return value the address and private key

## usage to connect to a contract
***
In order to comunicate to a contract, you'll need a signer connected to the blockchain. But
first,we need to installed the ethers library:
```
npm i ethers
```
or 
```
yarn add ethers
```
with this library the Wallet(signer) creation is pretty straightforward.
Down below is an example of how to do it with the private key we got from the function:

```
//importing ethers library 
const { ethers } = require("ethers");

//obtaining provider to connect to the blockchain
const provider = ethers.getDefaultProvider('homestead', {
        alchemy: "your_alchemy_API_token"
    });
//creating wallet(signer) from private key and connecting it to the provider 
const wallet = new ethers.Wallet(privateKey, provider);
```
As you can see there's a previous step before creating the signer and that is getting a provider. 
The provider is what actually connect us to the blockchain. In this case we call ethers.getDefaultProvider() which accepts two parameters, the first is the type of network ('homestead' for mainnet, 'rinkeby' if using the rinkeby testnet, etc) and the second is an object where you specified your node service. there's a number of services to choose from, but the most famous are <a href= "https://alchemyapi.io/">alchemy</a>, <a href= "https://infura.io/">infura</a> and <a href= "https://etherscan.io/">etherscan</a>. In this case we decide alchemy because is the most widely used, once your are registered, place your alchemy API TOKEN and the provider is ready.  
Then we set the signer with ``` new ethers.Wallet(privateKey, provider)```.  
Finally to be able to call a contract function we do this:
```
const someVariable = await myContract.connect(wallet).someFunction();
```
And that's it!
