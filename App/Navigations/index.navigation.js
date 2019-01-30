import React, { Component } from 'react';
import {
    BackHandler
} from 'react-native';
import {
    Scene,
    Router,
    Tabs,
    Overlay,
    Modal,
    Drawer,
    Stack,
    Lightbox,
    Actions,
} from 'react-native-router-flux';

//import scenes here
import HomeScene from '../Scenes/HomeScene/homeScene';
import FrontScene from '../Scenes/ProjectScenes/front.scene';
import AdScene from '../Scenes/ProjectScenes/adScene';
import SignIn from '../Scenes/LoginScene/SignIn';
import SignUp from '../Scenes/LoginScene/SignUp';
import ScrollTabScene from '../Scenes/LoginScene/ScrollTabScene';
import FlightScene from '../Scenes/HomeScene/FlightScene';
import HotelScene from '../Scenes/HomeScene/HotelScene';
import Trips from '../Scenes/ProjectScenes/Trips';
import Profile from '../Scenes/ProjectScenes/Profile';
import Wallet from '../Scenes/ProjectScenes/Wallet';
//import custom components here
import {
    CustomView,
    CustomText,
    CustomImage,
    CustomTouchableOpacity,
    CustomTextInput
} from '../Custom-Components';
//import images here

//import utils here
import {
    getRelativeSizeWidth
} from '../Utils/dimensionHandler.utils';

import COLORS from '../Constants/color.constants';



const TabIcon = ({ selected, image, title }) => {
    // const selectColor = selected ? COLORS.WHITE_BACKGROUND : COLORS.WHITE_BACKGROUND;
    return (
        <CustomView style={{ alignItems: 'center', justifyContent: 'center', borderBottomColor: selectColor, marginTop: 5}}>
            <CustomImage
                style={{ height: 20, width: 20 }}
                // Change HERE
                source={image}
            />
            <CustomText style={{ color: COLORS.WHITE_BACKGROUND}}>{title}</CustomText>
        </CustomView>
    )
}





class Navigation extends Component {
    constructor(props) {
        super(props);
    }



    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', this.handleAndroidBack);
    }

    componentWillUnmount = () => {
        BackHandler.removeEventListener('hardwareBackPress', this.handleAndroidBack);
    }

    handleAndroidBack = () => {
        Actions.pop();
        return true;
    }


    render() {
        return (
            <CustomView style={{ flex: 1, zIndex: 1 }}>
                <Router
                    backAndroidHandler={() => this.handleAndroidBack()}
                >
                    <Overlay key="overlay">
                        <Modal key="modal"
                            hideNavBar>
                            <Lightbox key="lightbox">
                                <Stack
                                    key="root"
                                    hideNavBar
                                    titleStyle={{ justifyContent: 'center', alignItems: 'flex-start' }}>

                                    <Stack key="Stack">
                                        <Scene key="FRONT_SCENE" component={FrontScene} hideNavBar initial/>
                                        <Scene key="ADSCENE" component={AdScene} hideNavBar />
                                        <Scene key="SIGNIN" component={SignIn} hideNavBar />
                                        <Scene key="SIGNUP" component={SignUp} />
                                        <Scene key="SCROLLTABSCENE" component={ScrollTabScene} hideNavBar />
                                        {/* <Scene key="HOMETABS" component={HomeTabs} hideNavBar navTransparent={true}/> */}
                                        <Scene tabs={true} 
                                            icon={TabIcon}
                                            hideNavBar
                                            // tabStyle={{ backgroundColor: COLORS.PRIMARY, activeBackgroundColor: COLORS.SECONDARY }}
                                            tabBarPosition="bottom"
                                            activeBackgroundColor= {COLORS.TAB_BACKGROUND_COLOR}
                                            inactiveBackgroundColor= {COLORS.PRIMARY}
                                             avtiveTintColor={COLORS.WHITE_BACKGROUND}
                                            // activeBackgroundColor='white'
                                            >
                                            <Scene key="HOME"  activeTintColor={COLORS.WHITE_BACKGROUND} component={HomeScene} hideNavBar={true} navTransparent={true} image={require('../Assets/Images/home.png')}  titleStyle={{ color: COLORS.WHITE_BACKGROUND }} />
                                            <Scene key="TRIPS"  activeTintColor={COLORS.WHITE_BACKGROUND} component={Trips} hideNavBar image={require('../Assets/Images/briefcase.png')}  titleStyle={{ color: COLORS.WHITE_BACKGROUND }} />
                                            <Scene key="WALLET"  activeTintColor={COLORS.WHITE_BACKGROUND} component={Wallet} hideNavBar image={require('../Assets/Images/wallet.png')}  titleStyle={{ color: COLORS.WHITE_BACKGROUND }} />
                                            <Scene key="PROFILE"   activeTintColor={COLORS.WHITE_BACKGROUND} component={Profile} back hideTabBar image={require('../Assets/Images/profile.png')}  titleStyle={{ color: COLORS.WHITE_BACKGROUND }} navTransparent backButtonTintColor={COLORS.WHITE_BACKGROUND} hideNavBar back/>
                                        </Scene>

                                        <Scene key="HOTELSCENE" component={HotelScene} title="Hotel Search" titleStyle={{ color: COLORS.WHITE_BACKGROUND }} navigationBarStyle={{ backgroundColor: COLORS.PRIMARY }} backButtonTintColor={COLORS.WHITE_BACKGROUND} back />
                                        <Scene key="FLIGHTSCENE" component={FlightScene} title="Flight Search" titleStyle={{ color: COLORS.WHITE_BACKGROUND }} navigationBarStyle={{ backgroundColor: COLORS.PRIMARY }} backButtonTintColor={COLORS.WHITE_BACKGROUND} back />
                                    </Stack>

                                </Stack>
                            </Lightbox>
                        </Modal>
                    </Overlay>
                </Router>
            </CustomView>
        );
    }
}

export default Navigation;
