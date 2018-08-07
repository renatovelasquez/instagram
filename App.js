import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/components/header';
import PhotoFeed from './src/components/photo-feed';
import Dummy from './src/components/dummy';
import Test from "./src/components/test";

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Header text='Photos'/>
                <PhotoFeed/>
            </View>
        );

        // return(
        //   <Dummy/>
        // );

        // return (
        //     <View style={styles.container}>
        //         <Test something="mundooooo"/>
        //     </View>
        // )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});