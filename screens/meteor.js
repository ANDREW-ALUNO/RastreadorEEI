import axios from 'axios'
import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
export default class Meteoros extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            meteors: {}
        }
    }
    componentDidMount() {
        this.getMeteors()
    }
    getMeteors = () => {
        axios
            .get('https://api.nasa.gov/neo/rest/v1/feed?api_key=A5CSL47hZR7B04MGzny9L6yLvQfLtnpQjtL311wE')
            .then(response => {
                this.setState({ meteors: response.data.near_earth_objects })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }
    render(){
        if (Object.keys(this.state.meteors).length == 0) {
            return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    Loading
                </Text>
            </View>)
        } else {
            var meteorArray = Object.keys(this.state.meteors).map(meteorDate =>{
                return this.state.meteors[meteorDate]
            })
            var meteors = [].concat.apply([],meteorArray)
            meteors.forEach(meteor => {
                var diameter = (meteor.estimated_diameter.kilometers.estimated_diameter_min + 
                meteor.estimated_diameter.kilometers.estimated_diameter_max) /2

                var threatScore = (diameter /meteor.close_approach_data[0].miss_distance.kilometers) * 1000000000
                meteor.threat_score = threatScore
            });
            meteors.sort((a,b) =>{return b.threat_score - a.threat_score})
            meteors = meteors.slice(0,5)
        return(
            <View style = {styles.container}>
                <Text>
                    Meteoros mais perto da terra
                </Text>
            </View>
        )}
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})