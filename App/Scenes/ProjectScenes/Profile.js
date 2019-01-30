import React, { Component } from 'react';
import {
    CustomView,
    CustomText,
    CustomImage,
    CustomTouchableOpacity,
    CustomTextInput

} from '../../Custom-Components';
import USER from '../../Constants/global.constants';
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native';
import getUserData from '../../Utils/userData';
import ProfileDetail from '../../Components/ProfileDetail';
import COLORS from '../../Constants/color.constants';
import { ProfileImage, WhiteArrowImage } from '../../Config/image.config';
import { Dropdown } from '../../../node_modules/react-native-material-dropdown';

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            active: ''
        }
    }
    render() {
        let data = [
            { value: 'Mr' },
            { value: 'Mrs' },
            { value: 'Ms' }

        ];
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <CustomView style={{ flex: 1, backgroundColor: COLORS.WHITE_BACKGROUND }}>
                    <CustomView style={{ alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row', zIndex: 10, top: 5, position: 'absolute' }}>
                        <CustomTouchableOpacity onPress={() => Actions.HOME()} style={{ paddingTop: 8 }}>
                            <CustomImage source={WhiteArrowImage()} style={{ width: 20, height: 15, resizeMode: 'contain', marginLeft: 15, }} />
                        </CustomTouchableOpacity>
                        <CustomView style={{ paddingTop: 1, marginLeft: 45, alignItems: 'flex-start', justifyContent: 'flex-start', zIndex: 10, top: 5, position: 'absolute' }}>
                            <CustomText style={{ color: COLORS.WHITE_BACKGROUND, fontSize: 18, }}>  My  Profile</CustomText>
                        </CustomView>
                    </CustomView>
                    <CustomView style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <CustomView style={{ width: 400, height: 200, backgroundColor: COLORS.PRIMARY, alignItems: 'center', justifyContent: 'center' }}>
                            <CustomImage source={ProfileImage()} style={{ width: 100, height: 100, borderRadius: 50, marginTop: 30, marginBottom: 20 }} />
                        </CustomView>
                        <ProfileDetail />


                        <CustomView style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 45 }}>
                            <CustomTouchableOpacity onPress={getUserData} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.PRIMARY, width: 400, height: 50 }}>
                                <CustomText style={{ color: COLORS.WHITE_BACKGROUND, fontSize: 20, alignSelf: 'center' }}>SAVE</CustomText>
                            </CustomTouchableOpacity>
                        </CustomView>
                    </CustomView>
                </CustomView>
            </ScrollView>
        )
    }
}