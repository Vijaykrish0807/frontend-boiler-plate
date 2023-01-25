import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image ,Button,Alert} from 'react-native';

export default function Home ({navigation}) {
    return(
        <View style={styles.container}>
            
            <View style={styles.content}>
                 
                <Text style={styles.mainText}>Get the world's first non-custodial cypher card</Text>
                <Text style={styles.helpText}>Explore all of web3 in one place.</Text>
                <Text style={styles.text}>
                <Image source={require('./assets/swap.png')} style={styles.Swap}></Image>
                Swap to get instant USD
                </Text>
                <Text style={styles.text}>
                <Image source={require('./assets/buy.png')} style={styles.Swap}></Image>
                Buy at an affordable price
                </Text>
                <Text style={styles.text}>
                <Image source={require('./assets/chain.png')} style={styles.Swap}></Image>
                9 chains supported- more coming soon    
                </Text>
                <Text style={styles.text}>
                <Image source={require('./assets/browser.png')} style={styles.Swap}></Image>
                Accepted all over the world!!
                </Text>
                <Button title="Click Here" onPress={() => navigation.navigate('PageTwo', { name: 'Page Two' })}/>
                

                
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    Swap: {
      width: 50,
    height: 50,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "grey"
      
    },
    text: {
      flex: 1,
      justifyContent: 'left',
      alignItems: 'left',
      alignSelf: 'left'
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
    mainText: {
      fontSize: 20,
      fontWeight: 'bold',
      
    },
    helpText: {
      fontSize: 16,
      textAlign: 'center',
      marginTop: 10
    },
    hintText: {
      fontSize: 16,
      textAlign: 'center',
      marginTop: 15
    }
  });