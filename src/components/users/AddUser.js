import React, { Component } from 'react'
import { View, Text, SafeAreaView, TextInput, Button } from 'react-native';

class AddUser extends Component {

    constructor() {
        super();
        this.state = {
            currentUser: '',
        }
    }

    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Add User</Text>
                    <TextInput
                        style={{ fontSize: 18, height: 50, borderColor: 'red', borderWidth: 1, margin: 10 }}
                        value={this.state.currentUser} placeholder="Add User"
                        onChangeText={(text) => this.setState({ currentUser: text })}
                    />
                    <Button
                        title="Submit"
                        onPress={() => { }}
                    />
                </View>
            </SafeAreaView>
        )
    }
}
export default AddUser;
