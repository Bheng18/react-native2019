import React, { Component } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { View, FlatList, ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Content, Text } from 'native-base';
import { bindActionCreators } from 'redux';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import { getUsers, getUsersSuceed } from '../../actions';
// import {
//   fetchProducts,
//   fetchCurrentUser
// } from '../../../actions/functions/categories';

class PointHistory extends Component {
  componentWillMount() {
    // this.props.fetchDataProducts();
    // this.props.fetchDataCurrentUser();
    this.props.onFetchData();
  }
//   mapProducts = () => {
//     const { productsData } = this.props;
//     if (productsData) {
//       return productsData.products.edges.map(product => {
//         console.log("Test Product", product)
//         return (
//           <View key={product.node.id}>
//             <Text>{product.node.name}</Text>
//           </View>
//         );
//       });
//     }
//   };
  mapCurrentUser = () => {
    const { currentUserData } = this.props;
    if (currentUserData) {
      console.log("Test Profile", currentUserData)
    //   return currentUserData.currentUser.map((user, key) => {
        // console.log("User", user)
        return (
          <View>
            <Text>{currentUserData.firstName}</Text>
            <Text>{currentUserData.lastName}</Text>
            <Text>{currentUserData.email}</Text>
          </View>
        );
    //   });
    }
  };
  render() {
    return (
      <View>
        <ScrollView>
          <Text>Products: </Text>
          {this.mapProducts()}
          <Text>Profile: </Text>
          {this.mapCurrentUser()}
        </ScrollView>
      </View>
    );
  }
}

const styles = ScaledSheet.create({
  item: {
    backgroundColor: '#FFFFFF',
    marginTop: 0,
    paddingHorizontal: '18@s',
    borderBottomWidth: 1,
    borderColor: '#EFEFEF',
    height: '64@s',
  },
  dateIDRow: {
    marginTop: '13@s',
  },
  branchPointRow: {
    marginBottom: '15@s',
  },
  dateIDText: {
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 0.5,
    fontFamily: 'Roboto',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  branch: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    fontFamily: 'Roboto_bold',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  points: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.6)',
  },
});

const mapStateToProps = state => {
  return {
    productsData: state.productsData,
    currentUserData: state.currentUserData ? state.currentUserData.currentUser : null,
    data: state.usersReducer ? state.usersReducer.users : null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDataProducts: () => {
      return dispatch(fetchProducts());
    },
    fetchDataCurrentUser: () => {
      return dispatch(fetchCurrentUser());
    },
    onFetchData: () => dispatch(getUsers()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PointHistory);
