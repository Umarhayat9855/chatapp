import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
Geocoder.init('AIzaSyCEmkn-T2z0T2OlGPSW6oZHLMUqYR7C360');
export default class LocationDemo extends Component {

    constructor() {
        super()
        this.state = {
            latitude: 0,
            longitude: 0,
            error: null,
            Address: null
        }
    }

     componentDidMount() {
  
        Geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
console.log("ERRRRR")
// Geocoder.fallbackToGoogle('AIzaSyCEmkn-T2z0T2OlGPSW6oZHLMUqYR7C360');
                Geocoder.from(position.coords.latitude, position.coords.longitude)
// console.log("ERRRRR")
                    .then(res=>{
              //  console.log(res)
                        var addressComponent = json.res[0].address_components;
                        this.setState({
                            Address: addressComponent
                        })
                        console.log(addressComponent);
                   } )
console.log('eeeeeeerrr')
                    .catch(error => console.warn(error));
console.log('eeeeeeerrr')
            },
            (error) => {
                // See error code charts below.
                 this.setState({ error: error.message }),
                   console.log(error.code, error.message);
             },
            { enableHighAccuracy: false, timeout: 10000, maximumAge: 100000 }
        );
// Geolocation.getCurrentPosition(
//   (position) => {
//     try {
//         Geocoder.geocodePosition(position.coords.latitude, position.coords.longitude ).then(res =>
//              console.log(res)
//         )} catch(err) {
//       console.log(err);
//     }
//   },
//   (error) => this.setState({ error: error.message }),
//   { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
// );
    }

    render() {
        return (
//             <View style={styles.MainContainer}>
//                 <Text style={styles.text}> Latitude = {this.state.latitude}</Text>
//                 <Text style={styles.text}> Longitude = {this.state.longitude}</Text>
//                 <Text style={styles.text}>{this.state.Address}</Text>
//                 {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
//             </View>
<View>
  <Text>snvoniwiv</Text>
  <Text style={styles.text}> Latitude = {this.state.latitude}</Text>
  <Text style={styles.text}> Longitude = {this.state.longitude}</Text>
  <Text style={styles.text}>{this.state.Address}</Text>
</View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f5fcff',
        padding: 11
    },
    text: {
        fontSize: 22,
        color: '#000',
        textAlign: 'center',
        marginBottom: 10
    },
});