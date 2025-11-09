import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TextInput } from 'react-native';

export default function ProfilePage() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile Page</Text>
      </View>

      {/* Image Section */}
      <Image
        source={require('../assets/IMG_5870.jpeg')} 
        style={styles.profileImage}
      />

      {/* Information Section */}
      <ScrollView style={styles.scrollSection}>
        <Text style={styles.infoText}>It's really beautiful day outside.</Text>
        <Text style={styles.infoText}>Traditionally, high school athletes abash new team members; some call it roockie or freshman.</Text>
        <Text style={styles.infoText}>You often hear the phase "aid and abet" on crime shows like Law and Order.</Text>
        <Text style={styles.infoText}>Justin's one bad grade seemed to be an aberration given his history of strong academic performance.</Text>
        <Text style={styles.infoText}>Getting pushed into the gym pool and yelling "Holy cow, that's cold" doesn't count as an ablution.</Text>
      </ScrollView>

      {/* Input Form Section */}
      <View style={styles.formSection}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Write a comment"
          value={comment}
          onChangeText={setComment}
        />
        <Text style={styles.submitButton}>Submit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E7',
  },
  header: {
    backgroundColor: '#6C63FF',
    paddingVertical: 25,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    color: '#FFFACD',
    fontWeight: 'bold',
  },
  profileImage: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
    marginVertical: 10,
  },
  scrollSection: {
    padding: 15,
    marginVertical: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    lineHeight: 22,
  },
  formSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  submitButton: {
    textAlign: 'center',
    backgroundColor: '#4B9CD3',
    color: '#fff',
    paddingVertical: 12,
    borderRadius: 8,
    fontWeight: 'bold',
  },
});
