import React, { Component } from 'react';
import {
    CustomView,
    CustomText,
    CustomImage,
    CustomTouchableOpacity,
    CustomTextInput
} from '../../Custom-Components';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import COLORS from '../../Constants/color.constants';
import { ScrollImage } from '../../Config/image.config';


export default class ScrollTabScene extends Component {
    render() {
        return (
            <CustomView style={{ flex: 1 }}>
                <CustomView style={styles.container}>
                    <CustomImage source={ScrollImage()} style={{ width: 100, height: 80, resizeMode: 'contain' }} />
                </CustomView>
                <ScrollableTabView
                    initialPage={0}
                    tabBarTextStyle={{ fontFamily: 'Roboto', fontSize: 18 }}
                    tabBarActiveTextColor={COLORS.WHITE_BACKGROUND}
                    tabBarInactiveTextColor={COLORS.WHITE_BACKGROUND}
                    tabBarUnderlineStyle={{ backgroundColor: COLORS.WHITE_BACKGROUND, width: 160 }}
                    renderTabBar={() => <ScrollableTabBar style={{ backgroundColor: COLORS.PRIMARY, }} />}
                    ref={(tabView) => { this.tabView = tabView; }}>
                    <SignIn tabLabel='SIGN IN' />
                    <SignUp tabLabel='SIGN UP' />
                </ScrollableTabView>


            </CustomView>
        )
    }

}

const styles = {
    container: {
        flex: .3,
        backgroundColor: COLORS.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center'
    }
}