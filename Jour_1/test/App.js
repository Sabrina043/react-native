import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, Button, showAlert,Alert } from 'react-native';

export default function App() {


  



  return (
    <ScrollView style={styles.container}>

      <View style={styles.textColor}>

        <Text style={styles.premier}>Premier</Text>
        <Text style={styles.deuxième}>Deuxième</Text>
        <Text style={styles.troisième}>Troisième</Text>

        <Image
          source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}
          style={{ width: 315, height: 100 }} />

        <Image source={require("./images/konexio-logo_1.png")}
          style={{ width: 315, height: 100 }} />

    [



      </View>

{/* const App = () => (      */}
        <View style={styles.container}>
          {/* <Button title="Show alert" onPress={showAlert} Alert= {Alert}/> */}
          <Button
          onPress={() => {
            alert('You tapped the button!');
          }}
          title="Press Me" color="#fff9"
        />
          
        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },
  textColor: {
    
    backgroundColor: '#fff',
    
  },
  premier: {
    
    fontSize: '30px',
    
  },
  deuxième: {
    
    textAlign: 'center',
    
  },
  troisième: {
    
    fontWeight: 'bold',
    
  },
  
});


