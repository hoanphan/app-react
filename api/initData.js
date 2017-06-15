/**
 * Created by HOANDHTB on 6/15/2017.
 */
const initData=()=>(
    fetch('http://demoapp.ga/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            return response.json();
        })
)
export default initData;