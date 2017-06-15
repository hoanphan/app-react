/**
 * Created by HOANDHTB on 6/13/2017.
 */
import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions,TouchableOpacity} from 'react-native';

import sp1 from '../../../../media/temp/sp1.jpeg'
import sp2 from '../../../../media/temp/sp2.jpeg'
import sp3 from '../../../../media/temp/sp3.jpeg'
import sp4 from '../../../../media/temp/sp4.jpeg'
import sp5 from '../../../../media/temp/sp5.jpeg'


export default class TopProduct extends Component {
    gotoDetail()
    {
        const {navigator}=this.props;
        navigator.push({name:'DETAIL'})
    }

    render() {
        const {
            container, titleContainer, title, body,
            productContainer, productImage,
            productName,
            productPrice
        } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP MODEL</Text>
                </View>
                <View style={body}>
                    <TouchableOpacity style={productContainer} onPress={this.gotoDetail.bind(this)}>
                        <Image source={sp1} style={productImage}/>
                        <Text style={productName}>Name</Text>
                        <Text style={productPrice}>250$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress={this.gotoDetail.bind(this)}>
                        <Image source={sp2} style={productImage}/>
                        <Text>Name</Text>
                        <Text>400$</Text>
                    </TouchableOpacity>
                    <View style={{height:50,width:width}}/>
                    <TouchableOpacity style={productContainer} onPress={this.gotoDetail.bind(this)}>
                        <Image source={sp3} style={productImage}/>
                        <Text style={productName}>Name</Text>
                        <Text style={productPrice}>250$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress={this.gotoDetail.bind(this)}>
                        <Image source={sp4} style={productImage}/>
                        <Text>Name</Text>
                        <Text>400$</Text>
                    </TouchableOpacity>
                </View>
            </View>)
    }

}
const {width, height} = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productHeight = (productWidth / 361 ) * 452;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,

    },
    title: {
        color: '#D3d3cf',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap:'wrap',
        marginBottom:10
    },
    productContainer: {
        width: productWidth,
        shadowColor: '#2E272B',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2
    },
    productImage: {
        width: productWidth,
        height: productHeight
    },
    productName:{
        paddingLeft:10,
        color: '#D3d3cf',
        fontWeight:'500',
        marginVertical:5
    },
    productPrice:{
        paddingLeft:10,
        color:'#662F90'
    }
})