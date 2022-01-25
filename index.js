const { ethers } = require("ethers");
//if using typescript
//import { ethers } from "ethers";


//PARAMETERS
//mnemonic is the mnemonic phrase as string
//account is the number of account to access as an integer starting from 0 
const mnemonicFunc = (mnemonic, account) => {
    const walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/${account}`)
    return {
        publicKey: walletMnemonic.address,
        privateKey: walletMnemonic.privateKey
    }
}
export default mnemonicFunc