/**
 * Created by HOANDHTB on 6/13/2017.
 */
/**
 * Created by HOANDHTB on 6/13/2017.
 */
import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {View, Text, TouchableOpacity, NavigatorIOS} from 'react-native'
import CartView from './CartView';
import ProductDetail from '../ProductDetail/ProductDetail'

export default class Cart extends Component {

    gotoDetail() {
        const {navigate} = this.props.navigation;
        navigate('product_detail')
    }

    render() {

        return (
            <MainScreenNavigator />
        )
    }

}
const MainScreenNavigator = StackNavigator({
    Home: {
        screen: CartView,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    Detail: {
        screen: ProductDetail, headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
});