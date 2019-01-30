import React, { Component } from 'react';
import { ScrollView, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
    CustomView,
    CustomText,
    CustomImage,
    CustomTouchableOpacity,
    CustomTextInput

} from '../../Custom-Components';
import USER from '../../Constants/global.constants';
import COLORS from '../../Constants/color.constants';
import { PasswordImage, FacebookImage, GoogleImage, OpenEyeImage } from '../../Config/image.config';

export default class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            secureTextEntry: true,
            email_id: '',
            password: '',
            isLogin: false
        }
    }

    // getUserData= async()=>{
    //     try {
    //         let userData = await AsyncStorage.getItem('userData');
    //         let parsed = JSON.parse(userData);
    //         console.log('parsed.email_id',parsed.email_id, parsed.password );
    //         if( email_id==parsed.email_id && password==parsed.password  )
    //         {
    //                 Actions.HOMESCENE();
    //         }
    //     }
    //     catch (error) {
    //         console.log('something went wrong');
    //     }

    // }

    checkData() {
        const { email_id, password, isLogin } = this.state;
        console.log('user', USER.userData);
        const data = USER.userData;
        data.forEach((item) => {
            if (item.email_id == email_id && item.password == password) {
                this.setState({ isLogin: true });
                USER.loggedUser.first_name = item.first_name;
                USER.loggedUser.last_name = item.last_name;
                USER.loggedUser.mobile_no = item.mobile_no;
                USER.loggedUser.email_id = item.email_id;
                USER.loggedUser.value = item.value;
                USER.loggedUser.active = item.active;
                Actions.HOME();
            }
            // else{
            //     alert('enter correct Email_id or Passowrd');
            // }
        });
        if (isLogin) {
            alert('Please enter correct user details.');
        }
    }
    getUserData = async () => {
        try {
            const userData = await AsyncStorage.getItem('userData');
            console.log('userData', userData);
            let data = JSON.parse(userData);
            console.log('data', data)
            data.forEach((item) => {
                if (item.email_id == email_id && item.password == password) {
                    Actions.HOME();
                }
                else {
                    alert('enter correct data');
                }
            })
        }
        catch (error) {
            console.log(error, 'something went wrong');
        }
    }

    render() {
        return (
            <ScrollView style={{ height: 550 }} contentInset={{ bottom: 20 }} showsVerticalScrollIndicator={false}>
                <CustomView style={styles.container}>

                    <CustomView >
                        <CustomText style={styles.text}>EMAIL</CustomText>
                        {/* <MyownTextInput /> */}
                        <CustomTextInput placeholder="email_id" onChangeText={(text) => this.setState({ email_id: text })} value={this.state.email_id}
                            style={{ borderBottomWidth: .5, borderBottomColor: COLORS.LOGIN_TEXT_COLOR, width: 300, height: 40, fontSize: 15 }} multiline={true} />

                    </CustomView>

                    <CustomView style={{ padding: 15 }}>
                        <CustomText style={styles.text}>PASSWORD</CustomText>
                        <CustomTextInput placeholder="password" onChangeText={(text) => this.setState({ password: text })} value={this.state.password} secureTextEntry={this.state.secureTextEntry}
                            style={{ borderBottomWidth: .5, borderBottomColor: COLORS.LOGIN_TEXT_COLOR, width: 300, height: 40, fontSize: 15 }} />
                    </CustomView>

                    <CustomView style={{ position: 'absolute', zIndex: 10, top: 128, paddingLeft: 280 }}>
                        <CustomTouchableOpacity onPress={() => this.setState({ secureTextEntry: !this.state.secureTextEntry })}>
                            <CustomImage source={this.state.secureTextEntry ? PasswordImage() : OpenEyeImage()} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                        </CustomTouchableOpacity>
                    </CustomView>


                    <CustomView style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                        <CustomTouchableOpacity onPress={() => this.checkData()} style={styles.button}>
                            <CustomText style={{ color: COLORS.WHITE_BACKGROUND, fontSize: 15 }}>SIGN IN</CustomText>
                        </CustomTouchableOpacity>
                    </CustomView>

                    <CustomView style={styles.card}>

                        <CustomText style={{ alignSelf: 'center', fontSize: 15 }}>SIGN IN WITH</CustomText>

                        <CustomView style={{ flexDirection: "row", padding: 10 }}>
                            <CustomView style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                <CustomTouchableOpacity style={{ backgroundColor: COLORS.WHITE_BACKGROUND, width: 120, height: 35, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: .5, borderColor: COLORS.LOGIN_TEXT_COLOR }}>
                                    <CustomImage source={FacebookImage()} style={styles.icon} />
                                    <CustomText> FACEBOOK</CustomText>
                                </CustomTouchableOpacity>
                            </CustomView>

                            <CustomView style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                <CustomTouchableOpacity style={{ backgroundColor: COLORS.WHITE_BACKGROUND, width: 120, height: 35, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: .5, borderColor: COLORS.LOGIN_TEXT_COLOR }}>
                                    <CustomImage source={GoogleImage()} style={styles.icon} />
                                    <CustomText>   GOOGLE</CustomText>
                                </CustomTouchableOpacity>
                            </CustomView>
                        </CustomView>
                    </CustomView>

                    <CustomView style={{ paddingTop: 20, bottom: 20 }}>
                        <CustomText style={{ color: COLORS.LOGIN_TEXT_COLOR }}>By logging in or signing up you are agreeing to </CustomText>
                        <CustomText style={{ color: COLORS.LOGIN_TEXT_COLOR, paddingLeft: 10 }}>Airestro's Privacy policy & Terms of Use</CustomText>
                    </CustomView>
                </CustomView>
            </ScrollView>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE_BACKGROUND,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        // height: 400
    },
    textInput: {
        width: 300,
        height: 40,
        borderBottomWidth: .5,

    },
    text: {
        fontSize: 15,
        color: COLORS.LOGIN_TEXT_COLOR
    },
    button: {
        backgroundColor: COLORS.PRIMARY,
        width: 100,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: COLORS.LIGHT
    },
    card: {
        padding: 10,
        backgroundColor: COLORS.LIGHT,
        width: 300,
        height: 95,
        marginBottom: 20,
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    }

}