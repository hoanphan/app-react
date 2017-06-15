/**
 * Created by HOANDHTB on 6/15/2017.
 */
import {AsyncStorage} from 'react-native'
const getCart=async ()=>{
    try {
        const value = await AsyncStorage.getItem('@cart');
        if (value !== null){
            // We have data!!
            console.log(value);
            return JSON.parse(value);

        }
        return [];
    } catch (error) {
        return [];
    }
}
export default getCart;