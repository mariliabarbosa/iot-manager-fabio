import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../App';

export default function LoginScreen() {
    const navigation = useNavigation<StackTypes>();

    return(
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Entrar</Text>
            <TextInput style={styles.input} placeholder='E-mail'></TextInput>
            <TextInput style={styles.input} placeholder='Senha'></TextInput>
            <TouchableHighlight style={styles.button} onPress={() => navigation.navigate("MainScreen")}>
                <Text style={{color: "#fff"}}>Logar</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginTop: 80,
        marginHorizontal: 30,
        justifyContent: 'center',
        flex: 1
    },
    sectionTitle: {
        fontWeight: "500",
        fontSize: 25,
    },
    button: {
        marginTop: 20,
        width: "100%",
        borderRadius: 10,
        height: 60,
        backgroundColor: "#2186a3",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        marginTop: 20,
        width: "100%",
        borderRadius: 10,
        height: 60,
        padding: 20,
        backgroundColor: "#fff",
        borderColor: "#2186a3",
        borderWidth: 2
    },
})