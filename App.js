import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here goes the logic for login
  }

  const handleReset = () => {
    setEmail('');
    setPassword('');
  }

  const handleSignup = () => {
    // Here goes the logic to navigate to the Signup screen
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signupLink} onPress={handleSignup}>
        <Text style={styles.signupLinkText}>Don't you have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#384d6e',
  },
  title: {
    fontSize: 32,
    marginBottom: 32,
    color: '#FFFE'
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
    borderRadius: 6,
    backgroundColor: '#FFFE',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 16,
  },
  resetButton: {
    backgroundColor: '#CCC',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  resetButtonText: {
    color: '#333',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#7f8fa6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  signupLink: {
    marginTop: 24,
  },
  signupLinkText: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

export default Login;
