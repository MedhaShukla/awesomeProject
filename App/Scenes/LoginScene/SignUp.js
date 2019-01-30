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
import { savedUserData, getUserData } from '../../Utils/userData';
import { PasswordImage } from '../../Config/image.config'
import { Dropdown } from 'react-native-material-dropdown';
import COLORS from '../../Constants/color.constants';
import Name from '../../Components/ProfileDetail';
import USER from '../../Constants/global.constants';
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: '',
            value: '',
            first_name: '',
            last_name: '',
            email_id: '',
            password: '',
            mobile_no: '',
            secureTextEntry: true
        }
    }

    changeText = (active) => {
        this.setState({ active: active });
    }
    change = (value) => {
        this.setState({ value: value });
    }

    savedUserData = () => {
        let data = USER.userData;
        const { first_name, last_name, email_id, password, mobile_no, active, value } = this.state;
        const userObj = {
            first_name,
            last_name,
            email_id,
            password,
            mobile_no,
        };
        data.push(userObj);
        USER.userData = data;
        // const list = await AsyncStorage.getItem('userData');
        // console.log('list', list);
        // AsyncStorage.setItem('userData', JSON.stringify(list)),()=> {
        //     AsyncStorage.mergeItem('userData', JSON.stringify)(userObj),()=> {
        //         AsyncStorage.getItem('userData', result=> {
        //             console.log(result);
        //         })
        //     }
        // }

        // list.push(userObj);
        // await AsyncStorage.setItem('userData', userObj);
        // Actions.HOMESCENE();
    }
    checkItem() {
        const { first_name, last_name, email_id, password, mobile_no, active, value } = this.state;
        if (active == '' || value == '' || first_name == '' || last_name == '' || email_id == '' || password == '' || mobile_no == '') {
            alert(' fields can not be empty !');
        }
        else {
            Actions.Home();
        }
    }

    getUserData = async () => {
        try {
            let userData = await AsyncStorage.getItem('userData');
            let parsed = JSON.parse(userData);
            alert(parsed.userData);
        }
        catch (error) {
            console.log(error.message);
        }

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
            <ScrollView style={{ backgroundColor: COLORS.WHITE_BACKGROUND }} showsVerticalScrollIndicator={false}>
                <CustomView style={{ flex: 1, paddingLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <CustomView style={{ paddingTop: 20 }}>
                        <CustomText style={styles.text}>FIRST NAME</CustomText>
                        <CustomView style={{ flexDirection: 'row' }}>

                            <Dropdown
                                label=""
                                data={data}
                                containerStyle={{ width: 50, height: 40, bottom: 9 }}
                                value={this.state.active}
                                onChangeText={this.changeText} />
                            <CustomView style={{ paddingTop: 13 }}>
                                <CustomTextInput placeholder="" onChangeText={(text) => this.setState({ first_name: text })}
                                    value={this.state.first_name}
                                    style={{ fontSize: 15, borderBottomWidth: .5, borderBottomColor: COLORS.LOGIN_TEXT_COLOR, width: 250, height: 40, paddingLeft: 10 }} multiline={true} />
                            </CustomView>
                        </CustomView>
                    </CustomView>

                    <CustomView style={{ paddingTop: 20 }} >
                        <CustomText style={styles.text}>LAST NAME</CustomText>
                        <CustomTextInput style={{ fontSize: 15, borderBottomWidth: .5, borderBottomColor: COLORS.LOGIN_TEXT_COLOR, width: 300, height: 40 }} multiline={true}
                            placeholder="" onChangeText={(text) => this.setState({ last_name: text })} value={this.state.last_name}
                        />
                    </CustomView>

                    <CustomView style={{ padding: 20 }} >
                        <CustomText style={styles.text}>EMAIL</CustomText>
                        <CustomTextInput style={{ fontSize: 15, borderBottomWidth: .5, borderBottomColor: COLORS.LOGIN_TEXT_COLOR, width: 300, height: 40 }} multiline={true}
                            placeholder="" onChangeText={(text) => this.setState({ email_id: text })} value={this.state.email_id}
                        />
                    </CustomView>

                    <CustomView style={{ paddingTop: 10, }}>
                        <CustomText style={styles.text}>MOBILE NO.</CustomText>
                        <CustomView style={{ flexDirection: 'row', borderBottomWidth: .5, borderBottomColor: COLORS.LOGIN_TEXT_COLOR, width: 300 }}>
                            <CustomView style={{ marginBottom: 20 }}>
                                <Dropdown
                                    label=""
                                    data={list}
                                    containerStyle={{ width: 60, height: 40, bottom: 2 }}
                                    value={this.state.value}
                                    onChangeText={this.selected} />
                            </CustomView>
                            <CustomTextInput style={{ width: 280, height: 40, paddingLeft: 5, fontSize: 15 }} multiline={true}
                                placeholder="" onChangeText={(text) => this.setState({ mobile_no: text })}
                                keyboardType='numeric' value={this.state.mobileNo}
                            />
                        </CustomView>
                    </CustomView>


                    <CustomView style={{ padding: 20 }}>
                        <CustomText style={styles.text}>PASSWORD</CustomText>
                        <CustomView style={{ borderBottomWidth: .5, borderBottomColor: COLORS.LOGIN_TEXT_COLOR, width: 300 }}>
                            <CustomTextInput placeholder="" style={{ width: 320, height: 40, fontSize: 15 }} secureTextEntry={this.state.secureTextEntry}
                                onChangeText={(text) => this.setState({ password: text })} value={this.state.password} />
                        </CustomView>

                        <CustomView style={{ position: 'absolute', zIndex: 10, paddingTop: 50, paddingLeft: 290 }}>
                            <CustomTouchableOpacity onPress={() => this.setState({ secureTextEntry: !this.state.secureTextEntry })} >
                                <CustomImage source={PasswordImage()} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                            </CustomTouchableOpacity>
                        </CustomView>
                    </CustomView>

                    <CustomView style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 10, paddingTop: 20, height: 50, elevation: 3 }}>
                        <CustomTouchableOpacity onPress={() => this.checkItem()} style={styles.button} >
                            <CustomText style={{ color: COLORS.WHITE_BACKGROUND, fontSize: 15 }}>SIGN UP</CustomText>
                        </CustomTouchableOpacity>
                    </CustomView>

                    <CustomView style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20, height: 50, paddingTop: 20 }}>
                        {/* <CustomText style={{ color: COLORS.FADE }}>{LOGIN_TERMS}</CustomText> */}
                        <CustomText style={{ color: COLORS.LOGIN_TEXT_COLOR }}>By logging in or signing up you are agreeing to </CustomText>
                        <CustomText style={{ color: COLORS.LOGIN_TEXT_COLOR, paddingLeft: 10 }}>Airestro's Privacy policy & Terms of Use</CustomText>
                    </CustomView>

                </CustomView>
            </ScrollView>
        )
    }
}



const styles = {
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
        justifyContent: 'center'
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    }
}