import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { Input, Image, Button, Icon } from'react-native-elements'
import Login from '../Screens/Login';

const ForgotPassword = ({navigation}) => {
    const [ForgotPassword, ResetPassword] = useState("");

  return (
    <View>
      <Text 
      style={{
        marginTop: 40,
        left: 40,
      }}>ENTER YOUR EMAIL ADDRESS</Text>
        <TextInput
        style={{
            height: 40,
            width: '80%',
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 20,
            padding: 10,
            left: 40,
            marginTop: 15,
        }}
         placeholder='Forgot Password'
         secureTextEntry={true}
         onChangeText={(text) => ResetPassword(text)}
         value={ForgotPassword}
        />
        <Button
        onPress={() => navigation.navigate('Login')}
         containerStyle={{
           width: 190, 
           left: 2, 
           marginTop: 10,
           left: 100,
           }}
           type="outline" title="Reset Password"
           titleStyle={{
             color: 'saddlebrown'
           }}
           />
    </View>
    
  )
}

export default ForgotPassword

const styles = StyleSheet.create({})