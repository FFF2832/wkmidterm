import React,{ Component } from 'react';
import { View } from 'react-native';

import Intro from "./Intro";
// import { Component } from 'react/cjs/react.production.min';

export default class index extends Component{
    render(){
        return(
                <View>
                    <Intro/>
                </View>
            
        );
    }
}