import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Header, Left, Body, Title, Right, Button, Icon, Content, Text, Input, Item, } from 'native-base';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps


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

});

class HeaderFlexbox extends Component {
    constructor() {
        super();
    }



    render() {
        const { width, height } = Dimensions.get('window');
        return (
            <Container>
                <Header style={{
                    paddingTop: 24,
                    backgroundColor: '#FFFFFF',
                    elevation: 10,
                }}>
                    <Left style={{
                        flex: 1,
                        //  backgroundColor: 'yellow' 
                    }}>
                        <MaterialIcons name="chevron-left" size={32} color="#000000" />
                    </Left>
                    <Body style={{
                        alignItems: 'center',
                        // backgroundColor: 'pink'
                    }}>
                        <Title style={{ color: '#000000' }}>Header</Title>
                    </Body>
                    <Right style={{
                        flex: 1,
                        // backgroundColor: '#FFFFFF', 
                        paddingRight: 6,
                    }}>
                        <MaterialCommunityIcons name="map-outline" size={32} color="#000000" />
                    </Right>
                </Header>


                <Content style={{
                    marginTop: 16
                }}>
                    <Item style={{
                        // backgroundColor: 'yellow',
                        // marginLeft: 16,
                        marginRight: 16,
                        borderColor: 'transparent',
                    }}>
                        <MaterialIcons name="location-on" size={32} color="indigo" />
                        <Input placeholder="G|" style={{
                            // backgroundColor: 'yellow', 
                            borderBottomWidth: 0.5,
                            color: 'indigo'
                        }} />
                    </Item>
                    <View style={{ marginTop: 16, height: 0.5, backgroundColor: 'gray', elevation: 16, }} ></View>


     
                    <View style={{ width, height}}>
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

                    </View>
                    </Content>



            </Container>

        );
    }

}

// const styles = StyleSheet.create({
//     container: {
//         height: 80,
//         marginLeft: 15,
//         marginRight: 15,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'flex-end',
//         backgroundColor: 'pink',
//     },
//     inputContainer: {
//         height: 35,
//         width: '60%',
//         backgroundColor: '#bad1f5',
//         borderColor: 'red',
//         borderBottomWidth: 1,
//         // alignSelf: 'center', //center from top - bottom
//         fontSize: 24,
//     }
// });

export default HeaderFlexbox;