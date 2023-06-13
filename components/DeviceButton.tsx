import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function DeviceButton() {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.deviceName}>AC 1</Text>
                <Text>Ar-condicionado</Text>
            </View>
            <View>
                <Text>Status</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d5e6eb",
        width: "100%",
        height: 60,
        borderRadius: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    deviceName: {
        fontWeight: "600",
        color: "#2186a3"
    }
})