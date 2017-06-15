/**
 * Created by HOANDHTB on 6/13/2017.
 */
import React, {Component} from 'react';
import {View,Text,StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native';

import ImageBanner from '../../../../media/temp/banner.jpg'
import ListProduct from '../ListProduct/ListProduct'
const {width,height}=Dimensions.get('window');

export default class Collection extends Component
{
    gotoListProduct()
    {
        const {navigator}=this.props;
        navigator.push('LIST_PRODUCT')
    }
    render()
    {
        const {wrapper,text_styles,image_style}=styles;
        return(
            <View style={wrapper}>
                <View style={{flex:1,justifyContent:'center',height:50}}>
                    <Text style={text_styles}>SPRING COLLECTION</Text>
                </View>
                <TouchableOpacity style={{flex:4}} onPress={this.gotoListProduct.bind(this)}>
                    <Image source={ImageBanner} style={image_style}/>
                </TouchableOpacity>
        </View>)
    }
}
const imageWidth=width-40;
const imageHeight=imageWidth*456/933;
const styles=StyleSheet.create({
    wrapper:{
        width:width-20,
        backgroundColor:'#FFF',
        margin:10,
        shadowColor:'#2E272B',
        shadowOffset:{width:0,height:3},
        shadowOpacity:0.2
        ,padding:10,
        paddingTop:0
    },
    textStyles:{
        fontSize:20,
        color:'#AFAEAF'
    },
    image_style:{
        height:imageHeight,
        width:imageWidth
    }

})