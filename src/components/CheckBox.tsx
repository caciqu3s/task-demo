import React from 'react';
import { View, GestureResponderEvent, TouchableOpacity, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';

type CheckProps = {
    checked: boolean;
    onPress: (event: GestureResponderEvent) => void;
}

const CheckBox = ({checked, onPress}: CheckProps) => {
  
    const showIcon = () => <Feather name="check" size={28} />

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                { checked ? showIcon() : null }
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width:40,
        height:40,
        backgroundColor: 'gray',
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    }
});

export default CheckBox;