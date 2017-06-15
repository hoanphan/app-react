/**
 * Created by HOANDHTB on 6/13/2017.
 */
/**
 * Created by HOANDHTB on 6/13/2017.
 */
import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import Collection from './Collection';
import Category from './Category'
import TopProduct from './TopProduct'


export default class HomeView extends Component {
    render() {
        const {types}=this.props;

        return (
            <ScrollView style={{backgroundColor: '#DBDBD8', flex: 1}}>
                <Collection />
                <Category navigator={this.props.navigator} types={types}/>
                <TopProduct navigator={this.props.navigator}/>
            </ScrollView>)
    }
}
