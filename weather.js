import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet, Platform } from 'react-native';
export default class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      city: ''
    };
    this.handlePress = this.handlePress.bind(this);
  }

  // When the component mounts..
  componentDidMount() {
    // Call our detchData function on the movie that was passed in as props
    this.fetchData(this.props.name)
  }

  fetchData(city) {
    // We pass the movie the user entered in into the URL for the API call.
    fetch('http://api.openweathermap.org/data/2.5/weather?apikey=25d0e33815ed1751148f40a266fb8f15&units=imperial&q=' + city)
    .then(response => response.json())
    .then((responseData) => {
      // After the data is received, we set this.state.movie to the result of the API call.
      console.log(responseData);
      this.setState({ city: responseData });
      this.setState({ loading: false });
    })
    .catch(err => console.log(err));
  }

  // The handlePress function will return us to the previous page
  handlePress() {
    this.props.navigator.pop();
  }

  render() {

    if (!this.state.loading) {

      return (
        <View style={styles.container}>

          <View style={styles.header}>
            <Text style={styles.title}>Dat Weather in: {this.props.name}</Text>
          </View>

          <Image
            style={styles.imageStyle}
            source={{ uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfDL4TrvqtLEzEGdNQuyoc7TBZwWQMf5RQB6hCocaPqDLz3equF7T6-0Y' }}
          />

          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
            <View style={styles.infoTextContainer}>
              <Text style={styles.bigInfoText}>{this.state.city.name},{this.state.city.sys.country}</Text>
              <Text style={styles.smallInfoText}>Location:</Text>
            </View>
            
          </View>

          <Text style={styles.bigLightText}>Temperature: {this.state.city.main.temp} F</Text>
          <Text style={styles.bigLightText}>Temp Max: {this.state.city.main.temp_max} F</Text>
          <Text style={styles.bigLightText}>Temp Min: {this.state.city.main.temp_min} F</Text>
          <Text style={styles.bigLightText}>Humidity: {this.state.city.main.humidity} %</Text> 
          

          <View style={{flexDirection:'row', justifyContent:'center', margin: 40}}>
            <TouchableHighlight onPress={this.handlePress} style={{width:100}}>
              <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'white', borderRadius: 50}}>
                <Text style={{color: 'rgba(76,217,175,1)', fontWeight: 'bold'}}>Go Back</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      );
    } 
    else {
      return (
        <View>
          <Text>Loading {this.props.name} information!</Text>
          <TouchableHighlight onPress={this.handlePress}>
            <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#c9f3e7'}}>
              <Text>Go Back!</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(76,217,175,1)'
  },
  infoTextContainer: {
    flexDirection: 'column', 
    alignItems: 'center'
  },
  imageStyle: {
    height: 150,
    width: 360,
    alignSelf: "center",
    marginTop: (Platform.OS === 'ios') ? 10 : 0
  },
  bigInfoText: {
    fontSize: 32, 
    fontWeight: 'bold', 
    color: 'white'
  },
  smallInfoText: {
    color: 'white', 
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light'
  },
  bigLightText: {
    color: 'white', 
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light',
    fontSize:25, 
    textAlign:'center'
  },
  text: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    marginBottom: 20,
    color: 'white',
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light',
    textAlign: 'center'
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#35977a',
    height: 50,
  },
  title: {
    color: '#fff6d1',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
