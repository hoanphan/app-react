/**
 * Created by HOANDHTB on 6/13/2017.
 */
/**
 * Created by HOANDHTB on 6/13/2017.
 */
import React, {Component} from 'react';
import NavigationExperimental from  'react-native-deprecated-custom-components';
import SearchView from './SearchView';
import ProductDetail from '../ProductDetail/ProductDetail'
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return(
            <NavigationExperimental.Navigator
                initialRoute={{name: 'CART_VIEW'}}
                renderScene={(route, navigator)=> {
                    switch (route.name) {
                        case "CART_VIEW":
                            return <SearchView navigator={navigator}/>;
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
