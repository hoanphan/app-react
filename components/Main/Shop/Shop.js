/**
 * Created by HOANDHTB on 6/13/2017.
 */
import React, {Component} from 'react';
import {View, Image, StyleSheet, Platform} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header'

import initData from '../../../api/initData'
import saveCart from '../../../api/saveCart'
import getCart from '../../../api/getCart'


import HomeIconS from '../../../media/appIcon/home.png'
import HomeIcon from '../../../media/appIcon/home0.png'
import CartIconS from '../../../media/appIcon/cart.png'
import CartIcon from '../../../media/appIcon/cart0.png'
import SearchIconS from '../../../media/appIcon/search.png'
import SearchIcon from '../../../media/appIcon/search0.png'
import ContactIconS from '../../../media/appIcon/contact.png'
import ContactIcon from '../../../media/appIcon/contact0.png'
import global from '../../golal';
export default class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: "home",
            types: [],
            topProduct: [],
            cartArray: []
        }
        global.addProductCart = this.addProducttoCart.bind(this);
    }

    addProducttoCart(product) {
        this.setState({
            cartArray: this.state.cartArray.concat({
                product,
                quality: 1
            })
        }, () => saveCart(this.state.cartArray))
        ;
    }

    componentDidMount() {
        return initData()
            .then((responseJson) => {
                const {type, product} = responseJson;
                this.setState({
                    types: type,
                    topProduct: product
                })

            })
            .catch((error) => {
                console.error(error);
            });
        getCart().then(cartArray => this.setState({cartArray}))
    }

    openMenu() {
        const {open} = this.props;
        open();
    }

    render() {
        const {iconStyle} = styles;
        const {types, selectedTab, topProduct, cartArray} = this.state;

        return (
            <View style={{flex: 1}}>
                <Header onOpen={this.openMenu.bind(this)}/>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={selectedTab === 'home'}
                        title="Home"
                        onPress={() => this.setState({selectedTab: 'home'})}
                        selectedTitleStyle={{color: '#34B089', fontFamily: 'Avenir'}}
                        renderIcon={() => <Image source={HomeIcon} style={iconStyle}/>}
                        renderSelectedIcon={() => <Image source={HomeIconS} style={iconStyle}/>}
                    >
                        <Home types={types} topProduct={topProduct}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'cart'}
                        title="Cart"
                        onPress={() => this.setState({selectedTab: 'cart'})}
                        renderIcon={() => <Image source={CartIcon} style={iconStyle}/>}
                        renderSelectedIcon={() => <Image source={CartIconS} style={iconStyle}/>}
                        badgeText={cartArray.length}
                        selectedTitleStyle={{color: '#34B089', fontFamily: 'Avenir'}}
                    >

                        <Cart naviagtor={this.props.navigator} cartArray={cartArray}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'search'}
                        title="Search"
                        onPress={() => this.setState({selectedTab: 'search'})}
                        renderIcon={() => <Image source={SearchIcon} style={iconStyle}/>}
                        renderSelectedIcon={() => <Image source={SearchIconS} style={iconStyle}/>}
                        selectedTitleStyle={{color: '#34B089', fontFamily: 'Avenir'}}
                    >
                        <Search/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'contact'}
                        title="Contact"
                        onPress={() => this.setState({selectedTab: 'contact'})}
                        renderIcon={() => <Image source={ContactIcon} style={iconStyle}/>}
                        renderSelectedIcon={() => <Image source={ContactIconS} style={iconStyle}/>}
                        selectedTitleStyle={{color: '#34B089', fontFamily: 'Avenir'}}
                    >
                        <Contact/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    iconStyle: {width: 20, height: 20}
})