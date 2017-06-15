/**
 * Created by HOANDHTB on 6/13/2017.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';

import littleIcon from  '../../../../media/temp/little.jpg'
import maxiIcon from  '../../../../media/temp/maxi.jpg'
import partyIcon from  '../../../../media/temp/party.jpg'


const {width, height} = Dimensions.get('window');
const url='http://demoapp.ga/images/type/';
export default class Category extends Component {

    gotoListProduct()
    {
        const {navigator}=this.props;
        navigator.push({name:'LIST_PRODUCT'})
    }
    render() {

        const {wrapper, text_style, image_style, cateTitle} = styles;
        const {types}=this.props;
        return (
            <View style={wrapper}>
                <View style={{justifyContent: 'center', height: 50}}>
                    <Text style={text_style}>LIST OF CATEGORY</Text>
                </View>
                <View style={{justifyContent: 'flex-end'}}>
                    <Swiper showsPagination width={imageWidth} height={imageHeight} >
                        { types.map(e => (
                            <TouchableOpacity onPress={() => this.gotoListProduct(e)} key={e.id}>
                                <Image source={{ uri: `${url}${e.image}` }} style={image_style}>
                                    <Text style={cateTitle}>{e.name}</Text>
                                </Image>
                            </TouchableOpacity>
                        )) }
                    </Swiper>
                </View>
            </View>)
    }
}
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#FFF',
        width: width - 20,
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2
        , padding: 10,
        paddingTop: 0
    },
    text_style: {
        fontSize: 15,
        color: '#AFAEAF'
    },
    image_style: {
        height: imageHeight,
        width: imageWidth,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cateTitle: {
        fontSize: 15,
        color: '#9A9A9A'
    }

})