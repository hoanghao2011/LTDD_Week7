import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'; // Make sure to import Image

export default function API_Screen_03({ route, navigation }) {
  const { name } = route.params; 
  const [job, setJob] = useState('');

  const handleFinish = () => {
    if (job) {
      alert(`Job added: ${job}`);
      navigation.navigate('TaskList', { name }); 
    } else {
      alert('Please input your job');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi {name}</Text>
      <Text style={styles.subGreeting}>Have a great day ahead</Text>

      <TextInput
        style={styles.input}
        placeholder="Input your job"
        value={job}
        onChangeText={setJob}
      />

      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.buttonText}>FINISH →</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/Image95.png')}  
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subGreeting: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    width: '100%',
  },
  button: {
    backgroundColor: '#00BCD4',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 100, 
    height: 100,
    resizeMode: 'contain',
  },
});
