import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {
    CustomView,
    CustomText,
    CustomImage,
    CustomTouchableOpacity,
    CustomTextInput

} from '../../Custom-Components';

import Checkbox from 'react-native-check-box';
import { Card1, Card2 } from '../../Components/hotelCards';
import COLORS from '../../Constants/color.constants';
import { CheckedImage } from '../../Config/image.config';

export default class HotelScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            isChecked2: false
        }
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: COLORS.WHITE_BACKGROUND }} showsVerticalScrollIndicator={false}>
                <CustomView style={{ flex: 1, height: 600, paddingTop: 10, borderBottomWidth: 4, borderBottomColor: COLORS.FADE }}>
                    <CustomView style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <CustomText>CITY/AREA/HOTEL NAME</CustomText>
                    </CustomView>
                    <CustomView style={{ paddingTop: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <CustomText style={{ color: COLORS.BLACK, fontWeight: 'bold', fontSize: 20 }}>Maldives</CustomText>
                    </CustomView>

                    <CustomView style={{ flexDirection: 'row', marginLeft: 20, paddingTop: 15 }}>
                        <CustomView style={{ width: 190, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <CustomText style={{}}>CHECK - IN</CustomText>
                        </CustomView>
                        <CustomView style={{ width: 190, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <CustomText style={{}}>CHECK - OUT</CustomText>
                        </CustomView>

                    </CustomView>

                    <CustomView style={{ flexDirection: 'row', marginLeft: 20, paddingTop: 5 }}>

                        <CustomView style={{ width: 190, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <CustomView style={{ flexDirection: 'row', width: 120 }}>
                                <CustomText style={{ fontSize: 15 }}>Thu,</CustomText>
                                <CustomText style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}> 24 MAY 2018</CustomText>
                            </CustomView>
                        </CustomView>
                        <CustomView style={{ width: 190, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <CustomView style={{ flexDirection: 'row', width: 120 }}>
                                <CustomText style={{ fontSize: 15 }}>Sun,</CustomText>
                                <CustomText style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}> 28 MAY 2018</CustomText>
                            </CustomView>
                        </CustomView>

                    </CustomView>

                    <CustomView style={{ flexDirection: 'row', marginLeft: 20, paddingTop: 15 }}>
                        <CustomView style={{ width: 190, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <CustomText style={{}}>GUEST</CustomText>
                        </CustomView>
                        <CustomView style={{ width: 190, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <CustomText style={{}}>ROOMS</CustomText>
                        </CustomView>

                    </CustomView>

                    <CustomView style={{ flexDirection: 'row', marginLeft: 20, paddingTop: 5 }}>
                        <CustomView style={{ width: 190, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <CustomText style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>02</CustomText>
                        </CustomView>
                        <CustomView style={{ width: 190, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <CustomText style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>01</CustomText>
                        </CustomView>

                    </CustomView>

                    <CustomView style={{ marginLeft: 20, paddingTop: 15 }}>

                        <CustomText style={{ color: COLORS.GREY }}>TRAVEL PURPOSE</CustomText>
                        <CustomView style={{ flexDirection: 'row', paddingTop: 5 }}>
                            <Checkbox
                                style={{ flex: 1 }}
                                onClick={() => { this.setState({ isChecked: !this.state.isChecked }) }}
                                isChecked={this.state.isChecked}
                                rightText={'Leisure'}
                            />
                            {/* <CustomView style={{ paddingBottom: 2}}> */}
                            <Checkbox
                                style={{ flex: 1, paddingBottom: 2 }}
                                onClick={() => { this.setState({ isChecked2: !this.state.isChecked2 }) }}
                                isChecked={this.state.isChecked2}
                                rightText={'Work'}
                            />
                            {/* </CustomView> */}
                            {/* <CustomText>Leisure</CustomText> */}
                        </CustomView>
                    </CustomView>

                    <CustomView style={{ paddingTop: 10, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 4, borderBottomColor: COLORS.LIGHT, paddingBottom: 10 }}>
                        <CustomTouchableOpacity style={{ width: 320, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.PRIMARY }}>
                            <CustomText style={{ fontSize: 15, color: COLORS.WHITE_BACKGROUND }}>SEARCH</CustomText>
                        </CustomTouchableOpacity>
                    </CustomView>


                    <CustomView style={{ paddingTop: 10, height: 300 }}>
                        <CustomView style={{ marginLeft: 15 }}>
                            <CustomText style={{ fontSize: 15, color: 'black' }}> Hotels for you </CustomText>
                        </CustomView>
                        <CustomView style={{ flexDirection: 'row', paddingTop: 10, }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {<Card1 />}
                                {<Card2 />}
                            </ScrollView>
                        </CustomView>
                    </CustomView>

                </CustomView>
            </ScrollView>
        )
    }
}