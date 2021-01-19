import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

class Flexbox extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.box1}>
                    <Text style={{ textAlign: 'right' }}>X</Text>
                </View>

                <View style={styles.threeBoxContainer}>
                    <View style={styles.box2}>
                        <View style={{ backgroundColor: 'pink', width: 80, height: 80, textAlign: 'center'}}>
                           <Text style={{ textAlign: 'center' }}>Box 1</Text>
                        </View>
                    </View>

                    <View style={styles.box3}>
                        <Text style={{ textAlign: 'center' }}>
                            We need your permission to access your location.
                            For better experience, please set it to High Accuracy.
                        </Text>
                    </View>

                    <View style={styles.box4}>
                        <Text style={{ textAlign: 'center' }}>Box 3</Text>
                    </View>
                </View>

            </View>
        );
    }

}
// const borderStyles = StyleSheet.enum('solid', 'dotted', 'dashed');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        // alignItems: 'center',
        backgroundColor: 'black',
        marginHorizontal: 16,
        // marginRight: 20,
        // marginLeft: 20,
    },
    box1: {
        backgroundColor: 'yellow',
        paddingBottom: 10,
        // borderColor: 'black', 
        // marginTop: 10,
        // marginLeft: 10,
        // marginRight: 10,
    },
    threeBoxContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        // alignItems: 'center',
        backgroundColor: 'pink',
        marginHorizontal: 16,
    },
    box2: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'space-between',
        alignItems: 'center'
        // padding: 60,
    },
    box3: {
        flex: 3,
        backgroundColor: 'blue',
        // marginTop: 60,
    },
    box4: {
        flex: 3,
        backgroundColor: 'green',
        // padding: 60,
    },
});

export default Flexbox;