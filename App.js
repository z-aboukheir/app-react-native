import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {
 
const [sampleGoals, setSampleGoals] = useState([
    { key: '1', title: "Faire les courses" },
    { key: '2', title: "Aller à la salle de sport 3 fois par semaine" },
    { key: '3', title: "Acheter mon premier appartement"},
    { key: '4', title:  "Perdre 5 kgs"},
    { key: '5', title: "Gagner en productivité" },
    { key: '6', title:  "Apprendre un nouveau langage" },
    { key: '7', title: "Faire une mission en freelance" },
    { key: '8', title: "Organiser un meetup autour de la tech" },
    { key: '9', title: "Faire un triathlon" },
  ]);

  return (
    <>
      
      <StatusBar style="auto"/>
    
      <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>

      <FlatList
        data={sampleGoals}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor = {(item) => item.key}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 15,
  },
});




