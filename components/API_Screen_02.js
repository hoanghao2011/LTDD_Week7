import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function API_Screen_02({ route, navigation }) {
  const { name } = route.params;

  const [tasks, setTasks] = useState([
    { id: '1', name: 'To check email', completed: true },
    { id: '2', name: 'UI task web page', completed: true },
    { id: '3', name: 'Learn javascript basic', completed: false },
    { id: '4', name: 'Learn HTML Advance', completed: false },
    { id: '5', name: 'Medical App UI', completed: false },
    { id: '6', name: 'Learn Java', completed: false },
  ]);

  const [searchText, setSearchText] = useState('');

  const filteredTasks = tasks.filter(task => 
    task.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi {name}</Text>
      <Text style={styles.subGreeting}>Have a great day ahead</Text>

      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={24} color="#aaa" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <FlatList
        data={filteredTasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
              <Icon 
                name={item.completed ? 'checkmark-circle' : 'ellipse-outline'} 
                size={24} 
                color={item.completed ? '#4CAF50' : '#aaa'} 
              />
            </TouchableOpacity>
            <Text style={styles.taskText}>
              {item.name}
            </Text>
            <TouchableOpacity>
              <Icon name="pencil-outline" size={24} color="#F44336" />
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.taskList}
      />

      <View style={styles.addButtonContainer}>
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={() => navigation.navigate('API_Screen_03', { name })} 
        >
          <Icon name="add-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subGreeting: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  taskList: {
    paddingBottom: 100,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
  },
  taskText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    marginLeft: -30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  addButton: {
    backgroundColor: '#00BCD4',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
