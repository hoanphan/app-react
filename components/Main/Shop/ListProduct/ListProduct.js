/**
 * Created by HOANDHTB on 6/13/2017.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import backIcon from '../../../../media/appIcon/backList.png'
import sp1 from '../../../../media/temp/sp1.jpeg'
export default class ListProduct extends Component {
    goBack() {
        const {navigator} = this.props;
        navigator.pop();
    }

    gotoDetail() {
        const {navigator} = this.props;
        navigator.push({
            name: 'PRODUCT_DETAIL'
        });
    }

    render() {
        const {
            container,
            header,
            wrapper,
            backStyle,
            titleStyle,
            productContainer,
            productInfor,
            productImage,
            lastRowInfor,
            txtName,
            txtPrice,
            txtMeterial,
            txtColor,
            txtShowDetail
        } = styles;
        return (
            <ScrollView style={container}>
                <View style={wrapper}>

                    <View style={header}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}>
                            <Image source={backIcon} style={backStyle}/>
                        </TouchableOpacity>
                        <Text style={titleStyle}>Party Dress</Text>
                        <View style={{width: 30}}/>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImage} source={sp1}/>
                        <View style={productInfor}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMeterial}>Material silk </Text>
                            <View style={lastRowInfor}>
                                <Text style={txtColor}> Colo RoyalBlue</Text>
                                <View style={{backgroundColor: 'cyan', width: 16, height: 16, borderRadius: 8}}/>
                                <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
                                    <Text style={txtShowDetail}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImage} source={sp1}/>
                        <View style={productInfor}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMeterial}>Material silk </Text>
                            <View style={lastRowInfor}>
                                <Text style={txtColor}> Colo RoyalBlue</Text>
                                <View style={{backgroundColor: 'cyan', width: 16, height: 16, borderRadius: 8}}/>
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImage} source={sp1}/>
                        <View style={productInfor}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMeterial}>Material silk </Text>
                            <View style={lastRowInfor}>
                                <Text style={txtColor}> Colo RoyalBlue</Text>
                                <View style={{backgroundColor: 'cyan', width: 16, height: 16, borderRadius: 8}}/>
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImage} source={sp1}/>
                        <View style={productInfor}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMeterial}>Material silk </Text>
                            <View style={lastRowInfor}>
                                <Text style={txtColor}> Colo RoyalBlue</Text>
                                <View style={{backgroundColor: 'cyan', width: 16, height: 16, borderRadius: 8}}/>
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImage} source={sp1}/>
                        <View style={productInfor}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMeterial}>Material silk </Text>
                            <View style={lastRowInfor}>
                                <Text style={txtColor}> Colo RoyalBlue</Text>
                                <View style={{backgroundColor: 'cyan', width: 16, height: 16, borderRadius: 8}}/>
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImage} source={sp1}/>
                        <View style={productInfor}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMeterial}>Material silk </Text>
                            <View style={lastRowInfor}>
                                <Text style={txtColor}> Colo RoyalBlue</Text>
                                <View style={{backgroundColor: 'cyan', width: 16, height: 16, borderRadius: 8}}/>
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImage} source={sp1}/>
                        <View style={productInfor}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>117$</Text>
                            <Text style={txtMeterial}>Material silk </Text>
                            <View style={lastRowInfor}>
                                <Text style={txtColor}> Colo RoyalBlue</Text>
                                <View style={{backgroundColor: 'cyan', width: 16, height: 16, borderRadius: 8}}/>
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dbdbd8',
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center'
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        margin: 10,
        paddingHorizontal: 10
    },
    backStyle: {
        width: 30,
        height: 30
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#b10d65',
        fontSize: 20
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        // justifyContent:'space-between'
    },
    productInfor: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1
    },
    productImage: {
        width: 90,
        height: 90 * 452 / 361
    },
    lastRowInfor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    txtName: {
        fontFamily: 'Avenir',
        fontSize: 17,
        color: '#bcbcbc',
        fontWeight: '700',
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#b10d65',
    },
    txtMeterial: {
        fontFamily: 'Avenir',
    },
    txtColor: {
        fontFamily: 'Avenir',
    },
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#b10d65',
        fontSize: 10
    }
});