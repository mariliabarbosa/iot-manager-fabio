import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';


export default function DeviceScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>AC 1</Text>
            <Text style={styles.deviceType}>Ar-condicionado</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={{color: "#fff"}}>Ligar</Text>
            </TouchableOpacity>
            <View style={styles.temperatureContainer}>
                <View style={styles.temperatureTextWrapper}>
                    <Text style={{fontSize: 50}}>20</Text>
                    <Text style={{fontSize: 30}}>ºc</Text>
                </View>
                <View style={styles.temperatureButtonsWrapper}>
                    <TouchableOpacity style={styles.temperatureButton}>
                        <Text style={{color: "#fff", fontSize: 40}}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.temperatureButton}>
                        <Text style={{color: "#fff", fontSize: 40}}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
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
    },
    button: {
        width: "100%",
        borderRadius: 10,
        height: 60,
        backgroundColor: "#2186a3",
        alignItems: "center",
        justifyContent: "center",
    },
    deviceType: {
        fontSize: 20,
        color: "#2186a3",
        marginBottom: 20
    },
    temperatureButton: {
        backgroundColor: "#2186a3",
        width: "50%",
        height: 60,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    temperatureButtonsWrapper:{
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        height: 80
    },
    temperatureContainer: {
        alignItems: "center",
        marginTop: 20,
    },
    temperatureTextWrapper:{
        display: 'flex',
        flexDirection: 'row',
    },

})