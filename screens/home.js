import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image, Platform, SafeAreaView, StatusBar } from 'react-native'
export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require("../assets/bg_image.png")} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>
                            App Rastreador EEI
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={() => { this.props.navigation.navigate('issLocation') }}>
                        <Text style={styles.routeText}>
                            Localização Da EEI
                        </Text>
                        <Text style={styles.knowMore}>
                            {"Saiba Mais -->"}
                        </Text>
                        <Text style={styles.bgDigit}>
                            1
                        </Text>
                        <Image source={require("../assets/iss_icon.png")} style={styles.iconImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() => { this.props.navigation.navigate("meteor") }}>
                        <Text style={styles.routeText}>
                            Meteoros
                        </Text>
                        <Text style={styles.knowMore}>
                            {"Saiba Mais -->"}
                        </Text>
                        <Text style={styles.bgDigit}>
                            2
                        </Text>
                        <Image source={require("../assets/meteor_icon.png")} style={styles.iconImage} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
        marginTop: 65,
        paddingLeft: 30
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        height: 150,
        width: 150,
        resizeMode: "contain",
        right: 40,
        top: -80
    }
});