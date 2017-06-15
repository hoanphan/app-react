/**
 * Created by HOANDHTB on 6/13/2017.
 */
import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions,TouchableOpacity,ListView} from 'react-native';

import sp1 from '../../../../media/temp/sp1.jpeg'
import sp2 from '../../../../media/temp/sp2.jpeg'
import sp3 from '../../../../media/temp/sp3.jpeg'
import sp4 from '../../../../media/temp/sp4.jpeg'
import sp5 from '../../../../media/temp/sp5.jpeg'
const url='http://demoapp.ga/images/product/';

export default class TopProduct extends Component {
    gotoDetail(product)
    {
        const {navigator}=this.props;
        navigator.push({name:'DETAIL',product})
    }

    render() {
        const {topProduct}=this.props;
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

                <ListView
                    enableEmptySections
                    contentContainerStyle={body}
                    dataSource={new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}).cloneWithRows(topProduct)}
                    renderRow={(e)=>(  <TouchableOpacity style={productContainer} onPress={()=>this.gotoDetail(e)} key={e.id}>
                        <Image source={{uri:`${url}${e.images[0]}`}} style={productImage}/>
                        <Text style={productName}>{e.name.toUpperCase()}</Text>
                        <Text style={productPrice}>{e.price}$</Text>
                    </TouchableOpacity>)}
                renderSeparator={(sectionID, rowID, adjacentRowHighlighted)=>{
                    if(rowID%2===1)
                        return<View style={{width:width,height:10}}></View>
                } }/>
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
        shadowOpacity: 0.2,

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
// {cartArray.map(e => (

// ))}