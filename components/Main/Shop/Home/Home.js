/**
 * Created by HOANDHTB on 6/13/2017.
 */
/**
 * Created by HOANDHTB on 6/13/2017.
 */
import React, {Component} from 'react';
import NavigationExperimental from  'react-native-deprecated-custom-components';
import HomeView from './HomeView';
import ProductDetail from '../ProductDetail/ProductDetail'
import ListProduct from '../ListProduct/ListProduct'
export default class Home extends Component {


    render() {
        const {types}=this.props;

        return(
            <NavigationExperimental.Navigator
                initialRoute={{name: 'HOME_VIEW'}}
                renderScene={(route, navigator)=> {
                    switch (route.name) {
                        case "HOME_VIEW":
                            return <HomeView navigator={navigator} types={types}/>;
                            break;
                        case "LIST_PRODUCT":
                            return <ListProduct navigator={navigator}/>;
                            break;
                        default:
                            return <ProductDetail navigator={navigator}/>;
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
