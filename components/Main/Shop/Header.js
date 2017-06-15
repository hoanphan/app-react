/**
 * Created by HOANDHTB on 6/13/2017.
 */
import React, {Component} from 'react';
import {View, Text,TouchableOpacity,Dimensions,Image,TextInput,StyleSheet} from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png'

const {height} = Dimensions.get('window');

export default class Header extends Component {
    constructor(props)
    {
        super(props);

    }
    render() {
        const {wrapper,row1,text_input,icon_styles,title_style}=styles;
        return (
            <View style={wrapper}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu} style={icon_styles}/>
                    </TouchableOpacity>
                    <Text style={title_style}>Wearing a Dress</Text>
                    <Image source={icLogo} style={icon_styles}/>
                </View>
                <TextInput style={text_input} placeholder='What do you buy?'  underlineColorAndroid='transparent'/>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    wrapper:{height: height / 8,backgroundColor:'#34B089',padding:10,justifyContent:'space-between'},
    row1:{flexDirection:'row',justifyContent:'space-between'},
    text_input:{height:height/18,backgroundColor:'#fff',paddingLeft:10,paddingVertical:0},
    title_style:{fontFamily:'Avenir',color:'#FFF',fontSize:20},
    icon_styles:{width:25,height:25}
})
