import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Button,
} from 'react-native';

const Home = () => {

    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [result, setResult] = useState(0)

    const handleCalc = operation => {
        operation === '+' ? setResult(parseFloat(input1, 10) + parseFloat(input2, 10)) :
        operation === '-' ? setResult(parseFloat(input1, 10) - parseFloat(input2, 10)) :
        operation === '*' ? setResult(parseFloat(input1, 10) * parseFloat(input2, 10)) :
        setResult(parseFloat(input1, 10) / parseFloat(input2, 10))
    }

    return (
        <SafeAreaView style={styles.global}>
            <View style={styles.container}>
                <TextInput style={styles.input}
                    placeholder='Primeiro número'
                    onChangeText={setInput1}
                    value={input1} />
                <TextInput style={styles.input}
                    placeholder='Segundo número'
                    onChangeText={setInput2}
                    value={input2} />
            </View>
            <View style={styles.container}>
                <View style={styles.buttonArea}>
                    <Button title='+' onPress={() => handleCalc('+')} />
                </View>
                <View style={styles.buttonArea}>
                    <Button title='-' onPress={() => handleCalc('-')} />
                </View>
                <View style={styles.buttonArea}>
                    <Button title='*' onPress={() => handleCalc('*')} />
                </View>
                <View style={styles.buttonArea}>
                    <Button title='/' onPress={() => handleCalc('/')} />
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.simpleText}>Resultado: {result}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    global: {
        flex: 1,
        justifyContent: 'center',
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
        
    },

    simpleText: {
        color: 'black',
        fontSize: 20,
    },

    input: {
        height: 50,
        margin: 20,
        borderWidth: 3,
        borderRadius: 15,
        borderColor: '#b4b3b5',
        fontSize: 20,
    },

    buttonArea: {
        width: 30,
        marginHorizontal: 10,
    }

});

export default Home;