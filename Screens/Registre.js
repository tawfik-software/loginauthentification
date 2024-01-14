import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input, Image, Button } from'react-native-elements'
import Login from '../Screens/Login'

const Registre = ({navigation}) => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  return (
  <View style={styles.Container}>
    <View style={styles.InputContainer}>
      <Input 
        placeholder="first name"
        autoFocus 
        type="Firstname"
        value={Firstname}
        onChangeText={(text) => setFirstname(text)}
        style={styles.input}
      />
      <Input 
        placeholder="last name"
        autoFocus 
        type="last name"
        value={Lastname}
        onChangeText={(text) => setLastname(text)}
        style={styles.input }
      />
      <Input 
        placeholder="Username" 
        autoFocus 
        type="username"
        value={Username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input }
      />
      <Input 
        placeholder="Email" 
        autoFocus 
        type="Email"
        value={Email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input }
      />
      <Input 
        placeholder="Password" 
        secureTextEntry 
        type="password"
        value={Password}
        onChangeText={(text) => setPassword(text)}
      />
      <Input 
        placeholder="Verify Password" 
        autoFocus 
        type="Verify Password"
        value={ConfirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        style={styles.input }
      />
      <Button 
      onPress={() => navigation.navigate('Login')}
      containerStyle={{
        width: 190, 
        left: 2, 
        marginTop: 10,
        }} type="outline" title="Register" 
        titleStyle={{
          color: 'saddlebrown'
        }}
        />
    </View>
  </View>
  )
}

export default Registre

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FFF',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  InputContainer: {
    flex: 1,
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