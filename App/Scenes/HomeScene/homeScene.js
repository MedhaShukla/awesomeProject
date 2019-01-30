import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
    CustomView,
    CustomText,
    CustomImage,
    CustomTouchableOpacity,
    CustomTextInput

} from '../../Custom-Components';
import { Plates, OfferPlates } from '../../Components/homePlates';
import COLORS from '../../Constants/color.constants';
import { FlightImage, HotelImage, HolidayImage, BusImage, CabImage, BeachImage, HeartImage, BlackStarImage, GreyStarImage, RupeeImage, RupeeIndianImage, CheckImage, BlueRupeeImage } from '../../Config/image.config';



export default class HomeScene extends Component {

    render() {
        return (
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <CustomView style={{ flex: 1, backgroundColor: COLORS.WHITE_BACKGROUND }}>
                    <CustomView style={{ height: 50, backgroundColor: COLORS.PRIMARY, alignItems: 'center', justifyContent: 'center' }}>
                        <CustomText style={{ color: COLORS.WHITE_BACKGROUND, fontSize: 18, alignSelf: 'center' }}>Book Your Travel Now</CustomText>
                    </CustomView>
                    <CustomView style={{ width: 400, height: 70, backgroundColor: COLORS.SECONDARY, flexDirection: 'row' }}>

                        <CustomView style={{ margin: 15, alignItems: 'center', justifyContent: 'center' }}>
                            <CustomTouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 10 }} onPress={() => Actions.FLIGHTSCENE()}>
                                <CustomImage source={FlightImage()} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
                                <CustomText style={{ fontSize: 15, color: COLORS.WHITE_BACKGROUND, paddingTop: 5 }}>Flights</CustomText>
                            </CustomTouchableOpacity>
                        </CustomView>

                        <CustomView style={{ margin: 10, alignItems: 'center', justifyContent: 'center', paddingTop: 2 }}>
                            <CustomTouchableOpacity onPress={() => Actions.HOTELSCENE()} style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                                <CustomImage source={HotelImage()} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
                                <CustomText style={{ fontSize: 15, color: COLORS.WHITE_BACKGROUND, paddingTop: 5 }}>Hotel</CustomText>
                            </CustomTouchableOpacity>
                        </CustomView>

                        <CustomView style={{ margin: 10, alignItems: 'center', justifyContent: 'center', paddingTop: 3 }}>
                            <CustomTouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                                <CustomImage source={HolidayImage()} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
                                <CustomText style={{ fontSize: 15, color: COLORS.WHITE_BACKGROUND, paddingTop: 5 }}>Holiday</CustomText>
                            </CustomTouchableOpacity>
                        </CustomView>

                        <CustomView style={{ margin: 10, alignItems: 'center', justifyContent: 'center', paddingTop: 4 }}>
                            <CustomTouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                                <CustomImage source={BusImage()} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
                                <CustomText style={{ fontSize: 15, color: COLORS.WHITE_BACKGROUND, paddingTop: 5 }}>Bus</CustomText>
                            </CustomTouchableOpacity>
                        </CustomView>

                        <CustomView style={{ margin: 10, alignItems: 'center', justifyContent: 'center', paddingTop: 5 }}>
                            <CustomTouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                                <CustomImage source={CabImage()} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
                                <CustomText style={{ fontSize: 15, color: COLORS.WHITE_BACKGROUND, paddingTop: 5 }}>Cab</CustomText>
                            </CustomTouchableOpacity>
                        </CustomView>
                    </CustomView>

                    <CustomView style={{ width: 400, height: 100 }}>
                        <CustomImage source={BeachImage()} style={{ width: 400, height: 130, resizeMode: 'cover' }} />
                    </CustomView>


                    <CustomView style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', zIndex: 50, elevation: 10, top: 150, position: 'absolute' }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {<Plates />}
                            {<Plates />}
                            {<Plates />}
                        </ScrollView>
                    </CustomView>

                    <CustomView style={{ marginTop: 100, alignItems: 'center', justifyContent: 'center' }}>
                        <CustomText style={{ fontSize: 18, alignSelf: 'center', color: COLORS.BLACK }}>Super Offers</CustomText>
                    </CustomView>


                    {<OfferPlates />}

                    <CustomView style={{ alignItems: 'center', justifyContent: 'center', height: 60 }}>
                        <CustomText style={{ fontSize: 18, color: COLORS.BLACK, alignSelf: 'center' }}>Earn Instantly</CustomText>
                    </CustomView>

                </CustomView>
            </ScrollView>
        )
    }
}