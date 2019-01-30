import React, { Component } from 'react';
import { CustomTextInput, CustomView } from '../Custom-Components';

export default class MyownTextInput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <CustomView>
                <CustomTextInput placeholder={this.props.placeholder} multiline={true} style={{ width: 300, height: 50, borderBottomWidth: .5 }} />
            </CustomView>
        )
    }
}

