import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input, Image, Button, Icon } from'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import Registre from '../Screens/Registre';
import {NavigationContainer} from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import ForgotPassword from './ForgotPassword';

const BASE_URI = 'https://cdn.pixabay.com/photo/2023/09/04/10/31/swan-8232481_960_720.jpg';

const Login = ({ navigation }) => {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

  return (
    <View style={styles.Container}>
    <StatusBar style="auto" />
    <View style={styles.ImageContainer}>
    <Image source={{
        uri: BASE_URI 
    }} 
      style={{
        width: 200,
        height: 200,
        borderRadius: 100,
      }}
    />
    </View>
    <View style={styles.InputContainer}>
      <Input 
        placeholder="Username"
        autoFocus 
        type="username"
        value={Username}
        onChangeText={(text) => setUsername(text)}
        leftIcon={
          <AntDesign name="user" size={24} color="saddlebrown" />
        }
        style={styles.input }
      />

      <Input 
        placeholder="Password"
        secureTextEntry 
        type="password"
        value={Password}
        onChangeText={(text) => setPassword(text)}
        leftIcon={
          <MaterialCommunityIcons name="onepassword" size={30} color="saddlebrown" />
        }
      />
      <Button 
      containerStyle={{
        width: 190, 
        left: 2,
        marginTop: 10,
      }} buttonStyle={{
        backgroundColor: 'saddlebrown',
      }} title="Login"  />
      <Button 
      onPress={() => navigation.navigate('Registre')}
      containerStyle={{
        width: 190, 
        left: 2, 
        marginTop: 10,
        }} 
        type="outline" title="Register" 
        titleStyle={{
          color: 'saddlebrown'
        }}
        />
        <Text 
        style={{
          color: 'dodgerblue',
          width: 190, 
          left: 40,
          marginTop: 20,
        }}
          onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot Paswword ?
          </Text>

    </View>
      <Button
        title="SIGN IN WITH FACEBOOK"
        icon={{
          name: 'facebook',
          type: 'FontAwesome',
          size: 24,
          color: 'white',
        }}
        iconContainerStyle={{ marginRight: 5, right: 50 }}
        titleStyle={{ fontWeight: '600', left: 15,}}
        buttonStyle={{
          backgroundColor: 'sienna',
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 30,
          right: 1
        }}
        containerStyle={{
          width: 370,
          marginHorizontal: 50,
          marginVertical: 10,
          right: 20,
        }}
      />
      <Button 
        title="SIGN IN WITH GOOGLE"
        icon={{
          name: '',
          type: 'FontAwesome',
          size: 15,
          color: 'white',
        }}
        iconContainerStyle={{ marginRight: 5, right: 50  }}
        titleStyle={{ fontWeight: '600', left: 15 }}
        buttonStyle={{
          backgroundColor: 'saddlebrown',
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          width: 370,
          marginHorizontal: 50,
          marginVertical: 10,
          right: 20,
        }}
      />
      <Button 
        title="SIGN IN WITH LINKEDIN"
        icon={{
            name: '',
            type: 'EvilIcons',
            size: 24,
            color: 'white',
          }
        }
        iconContainerStyle={{ marginRight: 5, right: 50  }}
        titleStyle={{ fontWeight: '600', left: 15 }}
        buttonStyle={{
          backgroundColor: 'saddlebrown',
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 30,
          right: 1,
        }}
        containerStyle={{
          width: 370,
          marginHorizontal: 50,
          marginVertical: 10,
          right: 20,
        }}
      />
    </View>
  )
};

export default Login

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFF',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    ImageContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    InputContainer: {
      flex: 8,
      justifyContent: 'center',
      alignItems: 'center',
      // padding: 10,
      height: 150,
    },
    input: {
      width: 190,
      margin: 5,
    },
})