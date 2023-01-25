//Generated Mnemonic and Hdpath equivalent to it
import * as React from 'react';
import { Button, View, Alert, Text } from 'react-native';
const bip39 = require('bip39')
const HDWallet = require('ethereum-hdwallet')


const PageThree = () => {
    const mnemonic = bip39.generateMnemonic()
    const hdwallet = HDWallet.fromMnemonic(mnemonic)
    keypair = new web3.Account(nacl.sign.keyPair.fromSeed(derivedSeed).secretKey);

    
   return (
    <view>
        <Text>Generated Mnemonic!!!!  

        </Text>
        <Text></Text>
   <Text>{mnemonic}</Text>
   
   
  <Button title="Page3" onPress={() => navigation.navigate('PageThree', { name: 'Page Three' })}/>
    
   </view>
   )
};

export default PageThree;