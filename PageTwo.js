import * as React from 'react';
import { Button, View, Alert, Text } from 'react-native';
const bip39 = require('bip39')

const PageTwo = () => {
    const mnemonic = bip39.generateMnemonic()
    
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

export default PageTwo;