/**
 * Created by HOANDHTB on 6/13/2017.
 */
import React, {Component} from "react";
import {View,Text,StatusBar} from "react-native";
import NavigationExperimental from  'react-native-deprecated-custom-components';
import Authentication from './Authentication/Authentication';
import ChangeInfor from './ChangeInfor/ChangeInfor';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';


StatusBar.setHidden(true);
export default class App extends Component
{
    render()
    {
        return(
            <NavigationExperimental.Navigator
                initialRoute={{name: 'MAIN'}}
                renderScene={(route, navigator)=> {
                    switch (route.name) {
                    case "MAIN":
                    return <Main navigator={navigator}/>;
                    break;
                    case "CHANGE_INFOR":
                    return <ChangeInfor navigator={navigator}/>;
                    break;
                    case  "AUTHENTICATION":
                    return <Authentication navigator={navigator}/>;
                    break;
                    default:
                    return <OrderHistory navigator={navigator}/>;
                    break;
                }
                }}
                configureScene={route=>{
                    if(route.name==='AUTHENTICATION' )
                        return NavigationExperimental.Navigator.SceneConfigs.FloatFromRight;
                    else
                        return NavigationExperimental.Navigator.SceneConfigs.FloatFromLeft;
                }}
            />
        )
    }
}
