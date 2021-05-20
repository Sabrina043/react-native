import React from 'react';
import { TextInput, View, SafeAreaView, StyleSheet, Switch, Animated } from 'react-native';
import { Slider } from 'react-native-elements';


const Form = () => {

    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);


    return (

        <View style={styles.container2} >

            <Slider
                value={number}
            />

            <SafeAreaView>


                <Switch

                    value={Boolean}
                    

                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />

                <Switch

                    value={Boolean}

                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                />


            </SafeAreaView>

        </View>
    );
}

export default Form;

const styles = StyleSheet.create({
    container2: {
        // flex: 1,
        backgroundColor: '#F3F8',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

