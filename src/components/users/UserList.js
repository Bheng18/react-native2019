import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView, ActivityIndicator, Dimensions, TouchableOpacity, View, Button } from 'react-native';
// import dataSource from '../../assets/dataSource';
import UsersRow from '../../common/UsersRow';
import { connect } from 'react-redux';
import { getUsers, getUsersSuceed } from '../../actions';
import { Actions } from 'react-native-router-flux';

class UsersList extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         data: [],
    //         fetching: false,
    //         loggedIn: true,
    //     }
    // }

    // UNSAFE_componentWillMount() {
    //     this.setState({ fetching: true })
    // }

    // const urlApi = 'https://hplussport.com/api/products.php';
    componentDidMount() {
        this.props.onFetchData();
        // fetch('https://jsonplaceholder.typicode.com/users')
        // fetch('https://hplussport.com/api/products.php')
        // .then(response => response.json())
        // .then(responseData => this.setState({
        //     data: responseData,
        //     fetching: false
        // }))
        // .catch(err => console.log(err))
    }

    mapCurrentUser = () => {
        const { currentUserData } = this.props;
        if (currentUserData) {
          console.log("Test Profile", currentUserData)
          return currentUserData.currentUser.map((user, key) => {
            console.log("User", user)
            return (
              <View key={key}>
                <Text>{user.firstName}</Text>
                <Text>{user.lastName}</Text>
                <Text>{user.email}</Text>
              </View>
            );
          });
        }
      };


    render() {
        const { data } = this.props
        console.log('data =>', data)
        return (
            
        );
        // return (
        //     // <View>
        //     <SafeAreaView>
        //         <Button
        //             // onPress={() => Actions.viewMap()}
        //             onPress={() => Actions.addUser()}
        //             title="Add User"
        //             color="#841584"
        //         />
        //          <Button
        //             onPress={() => Actions.viewMap()}
        //             title="View Map"
        //             color="#666999"
        //         />
        //         {/* <TouchableOpacity
        //             style={{}}
        //                 onPress={() => Actions.addUser()}
        //             >
        //                 <Text>Add User</Text>
        //             </TouchableOpacity> */}
        //         <ScrollView>
        //             {
        //                data.length > 0 ? data.map((item) => (
        //                     <UsersRow
        //                         key={item.id}
        //                         // image={item.image}
        //                         name={item.name}
        //                         username={item.username}
        //                         email={item.email}
        //                     />
        //                 ))
        //                     : //<Text>Jajajajajajajj</Text>
        //                     <ActivityIndicator
        //                         size="large"
        //                         style={styles.spinner}
        //                         // animating={this.state.fetching}
        //                         // animating={true}
        //                         color='red'
        //                     />
        //             }
        //         </ScrollView>
        //     </SafeAreaView>
        //     // </View>
        // )
    }
}

const styles = StyleSheet.create({
    spinner: {
        // position: 'relative',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },

})

const mapStateToProps = (state) => {
    console.log('statez:', state)
    return {
        data: state.usersReducer ? state.usersReducer.users : null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchData: () => dispatch(getUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList); 
