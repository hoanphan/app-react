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

    constructor(props) {
        super(props);

    }

    gotoDetail() {
        const {navigate} = this.props.navigation;
        navigate('product_detail')
    }

    render() {

        return (
            this.getNavigation()
        )
    }
    componentDidMount()
    {

    }
    getNavigation() {
        const {cartArray}=this.props;
        const MainScreenNavigator = StackNavigator({
            Home: {
                screen: CartView,
                headerMode: 'none',
                header: null,
                navigationOptions: {
                    header: null
                },
                initialRouteParams: { someParam: 'Bonjour' }
            },
            Detail: {
                screen: ProductDetail, headerMode: 'none',
                header: null,
                navigationOptions: {
                    header: null
                }
            },
        },
        {
            initialRouteParams:{cartArray:cartArray  }
        });

        return (<MainScreenNavigator/> )
    }
}

