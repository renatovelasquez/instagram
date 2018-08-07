import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import PhotoSection from './photo-section';

export default class PhotoFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {photos: []};
    }

    componentDidMount() {
        axios.get('http://192.168.1.13:3000/photos').then(response => {
            this.setState({photos: response.data});
        });
    }

    getPhotos() {
        return this.state.photos.map(_photo => {
            return (
                <PhotoSection key={_photo.id} photo={_photo}/>
            );
        });
    }

    render() {
        return (
            <ScrollView>
                {this.getPhotos()}
            </ScrollView>
        );
    }
}