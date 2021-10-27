import React from  'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import AppBar from "../components/AppBar";
import Button from "../components/Button";

export default function LogInScreen() {
    return(
        <View style={styles.container}>
            <AppBar />
            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
                <TextInput style={styles.input} value="Email Address" />
                <TextInput style={styles.input} value="Password" />
                <Button label="Submit" />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registered?</Text>
                    <Text style={styles.footerlink}>Sign up here!</Text>
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
