import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { CustomTextInput, CustomView, CustomText, CustomImage } from '../Custom-Components';
import COLORS from '../Constants/color.constants';
import { Dropdown } from 'react-native-material-dropdown';
import { CheckedImage } from '../Config/image.config';
import { getUserData } from '../Utils/userData';
import USER from '../Constants/global.constants';

export default class ProfileDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: '',
            value: '',
            isVerified: props
        }

    }

    changeText = (active) => {
        this.setState({ active: active });
    }

    selected = (value) => {
        this.setState({ value: value });
    }


    render() {
        let data = [
            { value: 'Mr' },
            { value: 'Mrs' },
            { value: 'Ms' }

        ];
        let list = [
            { value: '+91' },
            { value: '+11' },
            { value: '+56' }

        ];
        return (
            <ScrollView style={{ flex: 1 }}>
                <CustomView style={{ flex: 1, marginLeft: 3 }}>

                    <CustomView style={{ paddingTop: 20 }}>
                        <CustomText style={styles.text}>FIRST NAME</CustomText>
                        <CustomView style={{ flexDirection: 'row' }}>

                            <Dropdown
                                label=""
                                data={data}
                                containerStyle={{ width: 60, height: 40, bottom: 9, marginRight: 5 }}
                                value={USER.loggedUser.active}
                                onChangeText={this.changeText} />
                            <CustomView style={{ marginTop: 13, borderBottomWidth: .5, borderBottomColor: COLORS.LOGIN_TEXT_COLOR, width: 250, height: 40, paddingLeft: 12 }}>
                                <CustomText style={{ fontSize: 15, color: COLORS.BLACK }}>{USER.loggedUser.first_name}</CustomText>
                                {/* <CustomTextInput placeholder={this.props.fisrt_name} style={{fontSize: 15, borderBottomWidth: .5, borderBottomColor: COLORS.GREY, width: 250, height: 40, paddingLeft: 10 }} /> */}
                            </CustomView>
                        </CustomView>
                    </CustomView>

                    <CustomView style={{ paddingTop: 20 }} >
                        <CustomText style={styles.text}>LAST NAME</CustomText>
                        <CustomView style={{ paddingTop: 14, borderBottomWidth: .5, borderBottomColor: COLORS.LOGIN_TEXT_COLOR, width: 310, height: 40, }}>
                            <CustomText style={{ fontSize: 15, color: COLORS.BLACK }}>{USER.loggedUser.last_name}</CustomText>
                            {/* <CustomTextInput placeholder={this.props.fisrt_name} style={{fontSize: 15, borderBottomWidth: .5, borderBottomColor: COLORS.GREY, width: 250, height: 40, paddingLeft: 10 }} /> */}
                        </CustomView>
                    </CustomView>

                    <CustomView style={{ paddingTop: 20, width: 310, borderBottomWidth: .5, borderBottomColor: COLORS.LOGIN_TEXT_COLOR, }} >
                        <CustomText style={styles.text}>EMAIL</CustomText>
                        <CustomView style={{ width: 300 }}>
                            <CustomView style={{ alignItems: 'flex-start', justifyContent: 'flex-start', paddingTop: 14, height: 40, }}>
                                <CustomText style={{ fontSize: 15, color: COLORS.BLACK }}>{USER.loggedUser.email_id}</CustomText>
                            </CustomView>
                        </CustomView>
                        <CustomView style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', bottom: 5, zIndex: 10, top: 70, position: 'absolute', marginLeft: 230 }}>
                            <CustomImage source={CheckedImage()} style={{ width: 20, height: 15, resizeMode: 'contain', borderRadius: 15 }} />
                            <CustomText style={{ color: COLORS.LOGIN_TEXT_COLOR, fontStyle: 'italic' }}> Verified</CustomText>
                        </CustomView>

                    </CustomView>

                    <CustomView style={{ paddingTop: 20 }}>
                        <CustomText style={styles.text}>MOBILE NO.</CustomText>
                        <CustomView style={{ flexDirection: 'row', width: 290 }}>

                            <Dropdown
                                label=""
                                data={list}
                                containerStyle={{ width: 60, height: 60, paddingBottom: 10, borderBottomWidth: .4, borderBottomColor: COLORS.LOGIN_TEXT_COLOR, marginRight: 5 }}
                                value={USER.loggedUser.value}
                                onChangeText={this.selected} />

                            <CustomView style={{ flexDirection: 'row', width: 250, borderBottomColor: COLORS.LOGIN_TEXT_COLOR, borderBottomWidth: .5 }}>
                                <CustomView style={{ alignItems: 'flex-start', justifyContent: 'flex-start', paddingTop: 14, height: 40, paddingLeft: 10 }}>
                                    <CustomText style={{ fontSize: 15, color: COLORS.BLACK }}>{USER.loggedUser.mobile_no}</CustomText>
                                </CustomView>
                            </CustomView>
                            <CustomView style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', bottom: 5, zIndex: 10, top: 10, position: 'absolute', marginLeft: 230 }}>
                                <CustomImage source={CheckedImage()} style={{ width: 20, height: 15, resizeMode: 'contain', borderRadius: 15 }} />
                                <CustomText style={{ color: COLORS.LOGIN_TEXT_COLOR, fontStyle: 'italic' }}> Verified</CustomText>
                            </CustomView>
                        </CustomView>
                    </CustomView>
                </CustomView>
            </ScrollView>
        )
    }
}
const styles = {
    text: {
        fontSize: 13,
        color: COLORS.LOGIN_TEXT_COLOR,
    }
}