import React, { Component } from 'react';
import { CustomTextInput, CustomView, CustomText, CustomImage } from '../Custom-Components';
import COLORS from '../Constants/color.constants';
import { TraderHotel, WhiteHeartIcon, PinIcon, RupeeIndianImage, YellowStarImage, GreyStarImage, BeehiveHotel } from '../Config/image.config';

export function Card1() {

    let data = [
        {}
    ]

    return (
        <CustomView style={{ width: 180, height: 200, borderWidth: 1, margin: 15, borderColor: COLORS.FADE, elevation: 3 }}>
            <CustomView style={{ width: 180, height: 90 }}>
                <CustomImage source={TraderHotel()} style={{ width: 170, height: 90 }} />
            </CustomView>

            <CustomView style={{ flexDirection: 'row', zIndex: 100, paddingTop: 5, position: 'absolute' }}>
                <CustomView style={{ width: 140, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <CustomView style={{ paddingTop: 3, marginLeft: 10 }}>
                        <CustomImage source={PinIcon()} style={{ width: 10, height: 10, resizeMode: 'contain' }} />
                    </CustomView>
                    <CustomText style={{ color: COLORS.WHITE_BACKGROUND, fontWeight: 'bold' }}> 5 km from City center</CustomText>
                </CustomView>
                <CustomView style={{ width: 30, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <CustomImage source={WhiteHeartIcon()} style={{ width: 10, height: 20, resizeMode: 'contain' }} />
                </CustomView>
            </CustomView>

            <CustomView style={{ paddingTop: 10, marginLeft: 15 }}>
                <CustomText style={{ color: COLORS.BLACK, }}>Traders Hotel</CustomText>
            </CustomView>

            <CustomView style={{ paddingTop: 5, marginLeft: 15 }}>
                <CustomText style={{ color: COLORS.GREY, }}>Gail Forcewind</CustomText>
            </CustomView>

            <CustomView style={{ paddingTop: 5, flexDirection: 'row', marginLeft: 15 }}>

                <CustomView style={{ paddingTop: 5 }}>
                    <CustomImage source={RupeeIndianImage()} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                </CustomView>

                <CustomText style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}> 12825  </CustomText>
                <CustomView style={{ paddingTop: 3 }}>
                    <CustomText style={{ color: COLORS.BLACK, fontSize: 15, }}> * Per night</CustomText>
                </CustomView>
            </CustomView>

            <CustomView style={{ paddingTop: 5, flexDirection: 'row', marginLeft: 15 }}>
                <CustomView style={{ width: 100, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <CustomText style={{ color: COLORS.GREY, fontSize: 12 }}>120 Reviews  ></CustomText>
                </CustomView>
                <CustomView style={{ width: 100, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', paddingTop: 3 }}>

                    <CustomImage source={YellowStarImage()} style={{ width: 8, height: 10, resizeMode: 'contain', margin: 1 }} />
                    <CustomImage source={YellowStarImage()} style={{ width: 8, height: 10, resizeMode: 'contain', margin: 1 }} />
                    <CustomImage source={YellowStarImage()} style={{ width: 8, height: 10, resizeMode: 'contain', margin: 1 }} />
                    <CustomImage source={YellowStarImage()} style={{ width: 8, height: 10, resizeMode: 'contain', margin: 1 }} />
                    <CustomImage source={GreyStarImage()} style={{ width: 7, height: 10, resizeMode: 'contain', margin: 1 }} />
                </CustomView>
            </CustomView>

        </CustomView>
    )
}


export function Card2() {
    return (
        <CustomView style={{ width: 180, height: 200, borderWidth: 1, margin: 15, borderColor: COLORS.FADE, elevation: 3 }}>
            <CustomView style={{ width: 180, height: 90 }}>
                <CustomImage source={BeehiveHotel()} style={{ width: 170, height: 90 }} />
            </CustomView>

            <CustomView style={{ flexDirection: 'row', zIndex: 100, paddingTop: 5, position: 'absolute' }}>
                <CustomView style={{ width: 140, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <CustomView style={{ paddingTop: 2, marginLeft: 10 }}>
                        <CustomImage source={PinIcon()} style={{ width: 10, height: 10, resizeMode: 'contain' }} />
                    </CustomView>
                    <CustomText style={{ color: COLORS.WHITE_BACKGROUND, fontWeight: 'bold' }}> 5 km from City center</CustomText>
                </CustomView>
                <CustomView style={{ width: 30, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <CustomImage source={WhiteHeartIcon()} style={{ width: 10, height: 20, resizeMode: 'contain' }} />
                </CustomView>
            </CustomView>

            <CustomView style={{ paddingTop: 10, marginLeft: 15 }}>
                <CustomText style={{ color: COLORS.BLACK, }}>Beehive Hotel</CustomText>
            </CustomView>

            <CustomView style={{ paddingTop: 5, marginLeft: 15 }}>
                <CustomText style={{ color: COLORS.GREY, }}>Petey Cruiser</CustomText>
            </CustomView>

            <CustomView style={{ paddingTop: 5, flexDirection: 'row', marginLeft: 15 }}>

                <CustomView style={{ paddingTop: 5 }}>
                    <CustomImage source={RupeeIndianImage()} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                </CustomView>

                <CustomText style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}> 9410  </CustomText>
                <CustomView style={{ paddingTop: 3 }}>
                    <CustomText style={{ color: COLORS.BLACK, fontSize: 15, }}> * Per night</CustomText>
                </CustomView>
            </CustomView>

            <CustomView style={{ paddingTop: 5, flexDirection: 'row', marginLeft: 15 }}>
                <CustomView style={{ width: 100, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <CustomText style={{ color: COLORS.GREY, fontSize: 12 }}>550 Reviews  ></CustomText>
                </CustomView>
                <CustomView style={{ width: 100, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', paddingTop: 3 }}>

                    <CustomImage source={YellowStarImage()} style={{ width: 8, height: 10, resizeMode: 'contain', margin: 1 }} />
                    <CustomImage source={YellowStarImage()} style={{ width: 8, height: 10, resizeMode: 'contain', margin: 1 }} />
                    <CustomImage source={YellowStarImage()} style={{ width: 8, height: 10, resizeMode: 'contain', margin: 1 }} />
                    <CustomImage source={YellowStarImage()} style={{ width: 8, height: 10, resizeMode: 'contain', margin: 1 }} />
                    <CustomImage source={GreyStarImage()} style={{ width: 7, height: 10, resizeMode: 'contain', margin: 1 }} />
                </CustomView>
            </CustomView>

        </CustomView>
    )
}