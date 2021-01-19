import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput, Image } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';



const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    backButton: {
        // flex: 1,
        position: 'absolute',
        top: 10,
        left: 10,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'indigo',
        height: 60,
        width: 60,
        borderRadius: 30,
    }
});

function MapViews() {
    return (
        <View style={styles.container} >

            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            </MapView>
            <TouchableOpacity style={styles.backButton}>
                <Icon name="chevron-left" size={42} color="#FFFFFF" />
            </TouchableOpacity>


            <View style={{
                position: 'absolute',
                bottom: 65,
                backgroundColor: '#FFFFFF',
                borderBottomColor: '#FF007F',
                borderBottomWidth: 1,
                width: '90%',
            }}>
                <TextInput placeholder="Pin location" autoCapitalize="words" style={{ fontSize: 22, alignSelf: 'center' }} />

            </View>

             <View
                style={{
                    //  flex: 1,
                    // flexDirection: 'row',
                    position: 'relative',
                    bottom: 10,
                    borderStyle: 'solid',
                    borderRadius: 1,
                    borderWidth: 1,
                    borderColor: 'blue',
                    backgroundColor: 'red',
                    // borderBottomColor: '#FF007F',
                    width: '90%',
                    height: 50,
                    // alignSelf: 'flex-end',
                    justifyContent: 'center',
                    // right: 20,
                }}>

                <TouchableOpacity 
                    onPress={() => Actions.searchMap() }
                style={{
                    // padding: 2,
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'yellow',
                    // alignSelf: "flex-end",
                    // marginRight: 10,
                    marginHorizontal: 10,
                }}>
                    <Image source={require('../../../assets/ambulance.png')}
                        style={{ width: 50, height: 50 }} />
                    <Text style={{ fontSize: 22, color: 'blue' }}>Change</Text>
                </TouchableOpacity>
            </View>


        </View>

    );
}
export default MapViews;