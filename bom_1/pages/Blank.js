import React, { Component } from 'react';
import {View,Text, StyleSheet, Image} from 'react-native'



class Blank extends Component {


    render() {

        const dddd = "https://storage.googleapis.com/sparta-image.appspot.com/lecture/about.png"

        return (
            <Image source={{uri:dddd}}resizeMode="cover" style={styles.imgone} />
        );
    }
}

const styles = StyleSheet.create({
    imgone:{
        width:150,
        height:150,
        borderRadius:30
    }


})

export default Blank;