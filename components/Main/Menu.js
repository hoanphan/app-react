/**
 * Created by HOANDHTB on 6/13/2017.
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import profileIcon from '../../media/temp/profile.png'

export default class Menu extends Component {
    gotoAuthentiction()
    {
        const navigator=this.props.navigator;
        navigator.push({name:'AUTHENTICATION'});
    }
    gotoChangeInfor()
    {
        const navigator=this.props.navigator;
        navigator.push({name:'CHANGE_INFOR'});
    }
    gotoOrderHistory()
    {
        const navigator=this.props.navigator;
        navigator.push({name:'ORDER_HISTORY'});
    }
    constructor(props)
    {
        super(props);
        this.state={
            isLogin:true
        }
    }
    render() {
        const {container, profile, btnStyle, btnText, styleSigIn, btnTextSigIn} = styles;
        const logoutJSX = (<View style={{flex: 1}}>
            <TouchableOpacity style={btnStyle} onPress={this.gotoAuthentiction.bind(this)}>
                <Text style={btnText}>
                    Sing In
                </Text>
            </TouchableOpacity>
        </View>);
        const loginJSX=(
            <View>
                <TouchableOpacity style={styleSigIn} onPress={this.gotoOrderHistory.bind(this)} >
                    <Text style={btnTextSigIn}>
                        Order History
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleSigIn} onPress={this.gotoChangeInfor.bind(this)}>
                    <Text style={btnTextSigIn}>
                        Chang Infor
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleSigIn} >
                    <Text style={btnTextSigIn}>
                        Sing out
                    </Text>
                </TouchableOpacity>
            </View>
        );
        const mainJSX=this.state.isLogin?loginJSX:logoutJSX;
        return (
            <View style={container}>
                <Image source={profileIcon} style={profile}/>

                <View style={{flex: 1,justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{color:'#fff',fontSize:10}}>Phan Van Hoan</Text>
                    {mainJSX}
                </View>
            </View>)
    }



}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        borderRightWidth: 3,
        borderColor: '#fff',
        alignItems: 'center'
    },
    profile: {
        width: 128,
        height: 128,
        borderRadius: 60,
        marginVertical: 30
    },
    btnStyle: {
        height: 50,
        paddingHorizontal: 70,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#34B089',
        fontSize: 20
    },
    styleSigIn: {
        height: 50,
        width: 200,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        paddingLeft: 10,
        marginBottom: 10
    },
    btnTextSigIn: {
        color: '#34B089',
        fontSize: 15
    }
})