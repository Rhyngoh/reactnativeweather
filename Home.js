import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Dimensions, Platform, TextInput } from 'react-native';

export default class Home extends Component {
  constructor(){
    super();
    this.state={
      textCity: ""
    }
  }
  // The press function takes in an argument (movie name) and pushes to the navigator the individual movie page
  // It also passes along the name of the movie which will be used fetch information from the OMDB API
  press(city) {
    this.props.navigator.push({ 
      id: 2,
      // We can pass any information we want to the next scene as props
      passProps: {
        name: city
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Search Dat Weather<Text style={{color:'#ff4981'}}>.</Text></Text>
        {/*Each button will call the press function with a different movie name*/}
        <TextInput 
        style={styles.input}
        placeholderTextColor="black"
        placeholder="Search by City"
        onChangeText={(text) => this.setState({ textCity: text })}
        onSubmitEditing={()=>this.press(this.state.textCity)}
        />
        <TouchableHighlight onPress={() => this.press('Austin')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.weatherText}>Austin</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press("Dallas")} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.weatherText}>Dallas</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('London')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.weatherText}>London</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('Singapore')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.weatherText}>Singapore</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press('Seattle')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.weatherText}>Seattle</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(76,217,175,1)'
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    marginTop: 75,
    marginBottom: 50,
    fontWeight: 'bold',
    color: '#fff6d1'
  },
  weatherText: {
    fontSize: 20,
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light'
  },
  outerButton: {
    paddingVertical: 3,
    paddingHorizontal: 30
  },
  innerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#c9f3e7',
    borderLeftWidth: 5,
    borderColor: '#ff4981'
  },
  input: {
    color: 'white',
    margin: 10,
    height: 45,
    paddingLeft: 10,
    backgroundColor: 'rgba(76,217,175,1)',
    fontSize: 18,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
});
