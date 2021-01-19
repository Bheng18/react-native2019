import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ToastAndroid,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';

class UsersRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, username, email, image } = this.props;
        return (
            <View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        //  backgroundColor: key % 2 == 0 ? '#f9e1e0' : '#dffff6',
                        padding: 5,
                        marginVertical: 2,
                        marginHorizontal: 5,
                    }}>
                    {/* <Image
                        source={{ uri: image }}
                        style={{ width: 80, height: 100, margin: 6, borderColor: 'red', borderWidth: 1 }}
                    /> */}
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                        }}>
                        <Text>{name}</Text>
                        <Text>{username}</Text>
                        <Text>{email}</Text>
                    </View>
                </View>
                <View style={{ height: 1, backgroundColor: 'red' }}></View>
            </View>
        );
    }
}
export default UsersRow;