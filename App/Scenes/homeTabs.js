import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {
    CustomView,
    CustomText,
    CustomImage,
    CustomTouchableOpacity,
    CustomTextInput

} from '../Custom-Components';
import COLORS from '../Constants/color.constants';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
//import scenes here
import HomeScene from '../Scenes/HomeScene/homeScene';
import Trips from '../Scenes/ProjectScenes/Trips';
import Wallet from '../Scenes/ProjectScenes/Wallet';
import Profile from '../Scenes/ProjectScenes/Profile';


export default class HomeTabs extends Component {
    render() {
        return (
            <CustomView>
                <ScrollableTabView
                    initialPage={1}
                    tabBarPosition='bottom'
                    tabBarTextStyle={{ fontFamily: 'Roboto', fontSize: 12 }}
                    tabBarActiveTextColor={COLORS.WHITE_BACKGROUND}
                    tabBarInactiveTextColor={COLORS.WHITE_BACKGROUND}
                    tabBarUnderlineStyle={{ backgroundColor: COLORS.WHITE_BACKGROUND }}
                    renderTabBar={() => <ScrollableTabBar
                        style={{ backgroundColor: COLORS.PRIMARY, tabBarActiveTextColor: 'white' }} />}
                    tabBarPosition='bottom'
                    ref={(tabView) => { this.tabView = tabView; }}>
                    <HomeScene tabLabel='Home' />
                    <Trips tabLabel='Trips' />
                    <Wallet tabLabel='Wallet' />
                    <Profile tabLabel='Profile' />
                </ScrollableTabView>
            </CustomView>
        )
    }
}