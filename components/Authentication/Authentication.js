/**
 * Created by HOANDHTB on 6/13/2017.
 */
import React, {Component} from "react";
import {View, Text, TouchableOpacity, Image, StyleSheet, TextInput} from "react-native";

import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';

export default class Authentication extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            isSignIn:false

        }
    }
    goBack()
    {
        const {navigator}=this.props;
        navigator.pop();
    }
    signIn()
    {
        this.setState({
            isSignIn:false
        })
    }
    signUp()
    {
        this.setState({
            isSignIn:true
        })
    }
    render() {

        const {
            row1,
            icon_styles,
            title_style,
            container,
            controlStyle,
            signInStyle,
            signUpStyle,
            activeStyle,
            inactiveStyle,
            inputStyle,
            bigButton,
            buttonText
        } = styles;
        const sigInJSX=(   <View>
            <TextInput underlineColorAndroid='transparent' style={inputStyle} placeholder="Enter your email"/>
            <TextInput style={inputStyle} placeholder="Enter your password"/>
            <TouchableOpacity style={bigButton}>
                <Text style={buttonText}>SIGN I NOW</Text>
            </TouchableOpacity>
        </View>);
        const sigUpJSX=(  <View>
            <TextInput style={inputStyle} underlineColorAndroid='transparent' placeholder="Enter your name"/>
            <TextInput style={inputStyle}  underlineColorAndroid='transparent' placeholder="Enter your email"/>
            <TextInput style={inputStyle} underlineColorAndroid='transparent' placeholder="Enter your password"/>
            <TextInput style={inputStyle}  underlineColorAndroid='transparent' placeholder="Re-enter your password"/>
            <TouchableOpacity style={bigButton}>
                <Text style={buttonText}>SIGN UP  NOW</Text>
            </TouchableOpacity>
        </View>);
        const {isSignIn}=this.state;
        const MainJSX=isSignIn?sigUpJSX:sigInJSX;
        return (
            <View style={container}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.goBack.bind(this)}>
                        <Image source={icBack} style={icon_styles}/>
                    </TouchableOpacity>
                    <Text style={title_style}>Wearing a Dress</Text>
                    <Image source={icLogo} style={icon_styles}/>
                </View>
                {MainJSX}
                <View style={controlStyle}>
                    <TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)}>
                        <Text style={isSignIn?inactiveStyle:activeStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signUpStyle} onPress={this.signUp.bind(this)}>
                        <Text style={isSignIn?activeStyle:inactiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        padding: 20,
        justifyContent: 'space-between'
    },
    row1: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
    title_style: {fontFamily: 'Avenir', color: '#FFF', fontSize: 20},
    icon_styles: {width: 30, height: 30},
    controlStyle: {
        flexDirection: 'row',
       alignSelf:'stretch'
    },
    signInStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 20,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1
    },
    signUpStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 20,
        flex: 1,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: 1
    },
    inactiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#34B089'
    },
    inputStyle: {
        height:50,
        backgroundColor:'#fff',
        marginBottom:10,
        borderRadius:20,
        paddingLeft:30,

    },
    bigButton:{
        height:50,
        borderRadius:20,
        borderWidth:1,
        borderColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        color:'#fff',
        fontSize:15
    }
})