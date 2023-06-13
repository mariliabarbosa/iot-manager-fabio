import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import DeviceButton from './DeviceButton';

import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../App';

export default function MainScreen() {
    const navigation = useNavigation<StackTypes>();

    return(
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Seus dispositivos</Text>
            <TouchableOpacity onPress={() => navigation.navigate("DeviceScreen")}>
                <DeviceButton/>
            </TouchableOpacity>
            <TouchableHighlight style={styles.button} onPress={() => navigation.navigate("CreateScreen")}>
                <Text style={{color: "#fff"}}>Novo dispositivo</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginTop: 80,
        marginHorizontal: 30
    },
    sectionTitle: {
        fontWeight: "500",
        fontSize: 25,
        marginBottom: 20
    },
    button: {
        marginTop: 20,
        width: "100%",
        borderRadius: 10,
        height: 60,
        backgroundColor: "#2186a3",
        alignItems: "center",
        justifyContent: "center",
    }
})