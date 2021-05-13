import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

export const TodoScreen = ({goBack, obj}) => {
    return <View>
        <Text>{obj.title}</Text>
        <Button title="Back" onPress={goBack}/>
    </View>
}

const styles = StyleSheet.create({})