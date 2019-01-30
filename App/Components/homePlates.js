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
import { HeartImage, BlackStarImage, GreyStarImage, RupeeImage, RupeeIndianImage, CheckImage, BlueRupeeImage } from '../Config/image.config';

// export default class Plates extends Component {
// render(){
export function Plates() {
    return (
        <CustomView style={{ width: 300, height: 160, backgroundColor: COLORS.WHITE_BACKGROUND, borderRadius: 15, margin: 5, borderWidth: 3, borderBottomWidth: 3, borderColor: COLORS.LIGHT }}>

            <CustomView style={{ flexDirection: 'row', padding: 3, margin: 5 }}>
                <CustomView style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 5 }}>
                    <CustomText style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>MALDIVES</CustomText>
                </CustomView>
                <CustomView style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-start', marginRight: 5, marginTop: 5 }}>
                    <CustomImage source={HeartImage()} style={{ width: 40, height: 20, resizeMode: 'center' }} />
                </CustomView>
            </CustomView>

            <CustomView style={{ flexDirection: 'row', marginLeft: 15 }}>
                <CustomText style={{ fontSize: 15 }}>Fihalhoshi Island Resort </CustomText>
                <CustomView style={{ borderRadius: 20, width: 60, height: 20, paddingBottom: 3, backgroundColor: COLORS.FADE, alignItems: 'center', justifyContent: 'center' }}>
                    <CustomText style={{ alignSelf: 'center' }}>Resort</CustomText>
                </CustomView>
            </CustomView>

            <CustomView style={{ flexDirection: 'row', marginLeft: 15 }}>

                <CustomText style={{ color: COLORS.BLACK }}>South Male Atoll </CustomText>
                <CustomView style={{ paddingTop: 2, flexDirection: 'row' }}>
                    <CustomImage source={BlackStarImage()} style={{ width: 12, height: 12, resizeMode: 'contain', margin: 2 }} />
                    <CustomImage source={BlackStarImage()} style={{ width: 12, height: 12, resizeMode: 'contain', margin: 2 }} />
                    <CustomImage source={BlackStarImage()} style={{ width: 12, height: 12, resizeMode: 'contain', margin: 2 }} />
                    <CustomImage source={BlackStarImage()} style={{ width: 12, height: 12, resizeMode: 'contain', margin: 2 }} />
                    <CustomImage source={GreyStarImage()} style={{ width: 12, height: 12, resizeMode: 'contain', margin: 2 }} />
                </CustomView>
            </CustomView>

            <CustomView style={{ marginLeft: 15 }}>
                <CustomText>Per Night</CustomText>
            </CustomView>

            <CustomView style={{ flexDirection: 'row', marginLeft: 15 }}>

                <CustomView style={{ paddingTop: 5 }}>
                    <CustomImage source={RupeeIndianImage()} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                </CustomView>

                <CustomText style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}> 13680  </CustomText>
                <CustomView style={{ padding: 3, flexDirection: 'row' }}>
                    <CustomView style={{ paddingTop: 5, }}>
                        <CustomImage source={RupeeImage()} style={{ width: 10, height: 10, resizeMode: 'contain' }} />
                    </CustomView>
                    <CustomText style={{ color: 'grey', fontSize: 15, textDecorationLine: 'line-through' }}>17385</CustomText>

                    <CustomView style={{ paddingLeft: 40, alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'row' }}>
                        <CustomView style={{ paddingBottom: 2 }}>
                            <CustomImage source={CheckImage()} style={{ width: 10, height: 10, resizeMode: 'contain' }} />
                        </CustomView>
                        <CustomText style={{ color: 'black', fontSize: 12 }}> Free Breakfast</CustomText>
                    </CustomView>
                </CustomView>
            </CustomView>

            <CustomView style={{ flexDirection: 'row', marginLeft: 15 }}>

                <CustomText style={{ color: COLORS.PRIMARY }}>you save</CustomText>
                <CustomView style={{ padding: 5 }}>
                    <CustomImage source={BlueRupeeImage()} style={{ width: 10, height: 10, resizeMode: 'contain' }} />
                </CustomView>
                <CustomView style={{ paddingTop: 2 }}>
                    <CustomText style={{ color: COLORS.PRIMARY }}>3700 ( 21%)</CustomText>
                </CustomView>
                <CustomView style={{ paddingLeft: 12, alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <CustomView style={{ paddingBottom: 2 }}>
                        <CustomImage source={CheckImage()} style={{ width: 10, height: 10, resizeMode: 'contain' }} />
                    </CustomView>
                    <CustomText style={{ color: 'black', fontSize: 12 }}> Pay at Hotel available </CustomText>
                </CustomView>

            </CustomView>



        </CustomView>
    )
}

export function OfferPlates() {
    return (
        <CustomView style={{ flexDirection: 'row', paddingTop: 5, elevation: 5 }}>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <CustomView style={{ width: 140, height: 170, borderRadius: 15, borderWidth: 2, borderColor: COLORS.LIGHT, margin: 10, }}>
                    <CustomView style={{ width: 140, height: 75, borderTopLeftRadius: 10, borderTopRightRadius: 10, flexDirection: 'row' }}>

                        <CustomView style={{ width: 70, height: 75, backgroundColor: COLORS.LIGHT_GREEN, borderTopLeftRadius: 10, }}>
                        </CustomView>
                        <CustomView style={{ width: 70, height: 75, backgroundColor: COLORS.DUMB_BLUE, borderTopRightRadius: 10 }}>
                        </CustomView>

                        <CustomView style={{ position: 'absolute', top: 5 }}>
                            <CustomView style={{ paddingTop: 30, paddingLeft: 5, flexDirection: 'row', }}>
                                <CustomText style={{ color: COLORS.BLACK, fontWeight: 'bold', fontSize: 14 }}> GET UPTO </CustomText>
                                <CustomView style={{ paddingTop: 5 }}>
                                    <CustomImage source={RupeeIndianImage()} style={{ width: 20, height: 10, resizeMode: 'contain' }} />
                                </CustomView>
                                <CustomText style={{ color: COLORS.BLACK, fontWeight: 'bold', fontSize: 14 }}>2500</CustomText>
                            </CustomView>
                            <CustomView style={{ paddingLeft: 5 }}>
                                <CustomText style={{ color: COLORS.BLACK, fontWeight: 'bold', fontSize: 14 }}> OFF</CustomText>
                            </CustomView>
                        </CustomView>
                    </CustomView>

                    <CustomView style={{ marginLeft: 5, paddingTop: 10 }}>
                        <CustomText style={{ fontSize: 13 }}> On Domestic Flights!</CustomText>
                        <CustomText style={{ fontSize: 13 }}> Book Now! Valid on 4</CustomText>
                        <CustomText style={{ fontSize: 13 }}> or more Pax Only</CustomText>
                    </CustomView>
                </CustomView>

                <CustomView style={{ width: 140, height: 170, borderRadius: 15, borderWidth: 2, borderColor: COLORS.LIGHT, margin: 10, }}>
                    <CustomView style={{ width: 140, height: 75, flexDirection: 'row', }}>

                        <CustomView style={{ width: 70, height: 75, backgroundColor: COLORS.LIGHT_YELLOW, borderTopLeftRadius: 10, }}>
                        </CustomView>
                        <CustomView style={{ width: 70, height: 75, backgroundColor: COLORS.LIGHT_ORANGE, borderTopRightRadius: 10 }}>
                        </CustomView>

                        <CustomView style={{ position: 'absolute', top: 10 }}>
                            <CustomView style={{ paddingTop: 30, paddingLeft: 5, }}>
                                <CustomText style={{ color: COLORS.BLACK, fontWeight: 'bold', fontSize: 14 }}> GET 4X </CustomText>
                                <CustomText style={{ color: COLORS.BLACK, fontWeight: 'bold', fontSize: 14 }}> REWARD POINT</CustomText>
                            </CustomView>
                        </CustomView>
                    </CustomView>


                    <CustomView style={{ marginLeft: 5, paddingTop: 10, marginBottom: 10 }}>
                        <CustomText style={{ fontSize: 13 }}> for HDFC Bank Retails </CustomText>
                        <CustomText style={{ fontSize: 13 }}> Credit cards on </CustomText>
                        <CustomText style={{ fontSize: 13 }}> transactions made on </CustomText>
                        <CustomText style={{ fontSize: 13, fontWeight: 'bold' }}> Airestro </CustomText>
                    </CustomView>
                </CustomView>

                <CustomView style={{ width: 140, height: 170, borderRadius: 15, borderWidth: 2, borderColor: COLORS.LIGHT, margin: 10, }}>
                    <CustomView style={{ width: 140, height: 75, flexDirection: 'row', }}>

                        <CustomView style={{ width: 70, height: 75, backgroundColor: COLORS.SKY_BLUE, borderTopLeftRadius: 10, }}>
                        </CustomView>
                        <CustomView style={{ width: 70, height: 75, backgroundColor: COLORS.LIGHT_ORANGE, borderTopRightRadius: 10 }}>
                        </CustomView>
                    </CustomView>
                </CustomView>


            </ScrollView>
        </CustomView>
    )
}