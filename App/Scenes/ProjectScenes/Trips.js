import React, { Component } from 'react';
import {
    CustomView,
    CustomText,
    CustomImage,
    CustomTouchableOpacity,
    CustomTextInput

} from '../../Custom-Components';
import COLORS from '../../Constants/color.constants';

export default class Trip extends Component {
    render() {
        return (
            <CustomView style={{ flex: 1 }}>
                <CustomText> Trip </CustomText>
            </CustomView>
        )
    }
}