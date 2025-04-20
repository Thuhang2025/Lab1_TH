import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const LoginScreen = () => {
  const navigation = useNavigation(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      setSuccessModalVisible(true);
      
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/logofirebase.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.welcomeText}>Welcome back!</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.linkText}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>Create a new account</Text>
      </TouchableOpacity>

      {/* Success Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={successModalVisible}
        onRequestClose={() => setSuccessModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Login Successful!</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSuccessModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  logoContainer: { marginBottom: 20 },
  logo: { width: 100, height: 100 },
  welcomeText: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '100%', height: 40, borderWidth: 1, borderColor: '#ccc', marginVertical: 10, padding: 10, borderRadius: 5 },
  loginButton: { backgroundColor: '#f28c38', padding: 10, borderRadius: 5, width: '100%', marginVertical: 10 },
  loginButtonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
linkText: { color: '#1da1f2', marginVertical: 5 },

  
  modalContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)' 
  },
  modalContent: { 
    width: '80%', 
    padding: 20, 
    backgroundColor: 'white', 
    borderRadius: 10, 
    alignItems: 'center' 
  },
  modalText: { fontSize: 18, fontWeight: 'bold' },
  closeButton: { 
    marginTop: 20, 
    backgroundColor: '#f28c38', 
    padding: 10, 
    borderRadius: 5 
  },
  closeButtonText: { color: '#fff', textAlign: 'center' },
});

export default LoginScreen;