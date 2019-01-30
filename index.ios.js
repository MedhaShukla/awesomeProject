import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Navigation from './App/Navigations/index.navigation';

class Main extends Component {
    render() {
        return (
            <Navigation />
        );
    }
}

AppRegistry.registerComponent('awesomeProject', () => Main);
