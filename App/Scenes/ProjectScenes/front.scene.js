import React, { Component } from 'react';
import {
    CustomView,
    CustomText,
    CustomImage,
    CustomTouchableOpacity
} from '../../Custom-Components';
import { Actions } from 'react-native-router-flux';
import { FrontImage } from '../../Config/image.config';
import COLORS from '../../Constants/color.constants';

export default class FrontScene extends Component {
    render() {
        return (
            <CustomView style={styles.container}>
                <CustomTouchableOpacity onPress={() => Actions.ADSCENE()}>
                    <CustomImage style={styles.imageStyle} source={FrontImage()} />
                </CustomTouchableOpacity>
            </CustomView>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        height: 200,
        width: 200,
        resizeMode: "contain",
        borderRadius: 100
    }

}