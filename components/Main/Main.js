/**
 * Created by HOANDHTB on 6/13/2017.
 */
import React, {Component} from "react";
//import {View,Text,TouchableOpacity} from "react-native";
import Drawer from 'react-native-drawer'
import Menu from './Menu';
import Shop from './Shop/Shop'

export default class Main extends Component
{
    gotoAuthentication()
    {
      const navigator=this.props.navigator;
      navigator.push({name:'AUTHENTICATION'});
      //  console.log('abdc');
    }
    closeControlPanel = () => {
        this.drawer.close();
    };
    openControlPanel = () => {
        this.drawer.open()
    };
    render()
    {
        return(
            <Drawer
                ref={(ref) => {this.drawer = ref;}}
                content={<Menu navigator={this.props.navigator}/>}
                openDrawerOffset={0.4}
                tapToClose={true}
            >
                <Shop open={this.openControlPanel.bind(this)} navigator={this.props.navigator}/>
            </Drawer>
        )
    }

}
