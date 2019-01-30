import React, { Component } from 'react';
import {
    CustomView,
    CustomText,
    CustomImage,
    CustomTouchableOpacity,
    CustomTextInput

} from '../../Custom-Components';
import COLORS from '../../Constants/color.constants';

export default class Wallet extends Component {
    render() {
        return (
            <CustomView style={{ flex: 1 }}>
                <CustomText> Wallet </CustomText>
            </CustomView>
        )
    }
}