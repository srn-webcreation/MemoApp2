import React from  'react';
import {
    View, Text, TextInput, StyleSheet, TouchableOpacity,
} from 'react-native';

import AppBar from "../components/AppBar";
import Button from "../components/Button";

export default function SignUpScreen() {
    return(
        <View style={styles.container}>
            <AppBar />
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput style={styles.input} value="Email Address" />
                <TextInput style={styles.input} value="Password" />
                <Button label="Submit" />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registered?</Text>
                    <TouchableOpacity>
                        <Text style={styles.footerlink}>Log In.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 24,
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        fontsize: 16,
        height: 48,
        borderColor: '#ddd',
        borderWidth: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    footerText: {
        fontsize: 14,
        lineHeight: 24,
        marginRight: 8,
    },
    footerlink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467fd3',
    },
    footer: {
        flexDirection: 'row',
    }
});
