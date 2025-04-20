import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation(); 

  const handleSendResetEmail = () => {
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Reset your password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.resetButton} onPress={handleSendResetEmail}>
        <Text style={styles.resetButtonText}>SEND RESET EMAIL</Text>
      </TouchableOpacity>

      {/* Quay lại màn hình Login */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backToLoginText}>Go back to login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  headerText: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '100%', height: 40, borderWidth: 1, borderColor: '#ccc', marginVertical: 10, padding: 10, borderRadius: 5 },
  resetButton: { backgroundColor: '#f28c38', padding: 10, borderRadius: 5, width: '100%', marginVertical: 10 },
  resetButtonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  backToLoginText: { color: '#1da1f2', marginVertical: 10 },
});

export default ForgotPasswordScreen;