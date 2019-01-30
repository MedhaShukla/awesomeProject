import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {
    CustomView,
    CustomText,
    CustomImage,
    CustomTouchableOpacity,
    CustomTextInput

} from '../../Custom-Components';

import Card from '../../Components/saleCard';
import COLORS from '../../Constants/color.constants';
import RadioGroup from 'react-native-radio-buttons-group';
import { ArrowImage, RightArrowImage, RupeeImage, RupeeIndianImage, CouponImage } from '../../Config/image.config';

export default class FlightScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            exchange: true,
            data: [
                { label: 'ONEWAY', value: 0, color: COLORS.PRIMARY },
                { label: 'ROUNDTRIP', value: 1, color: COLORS.PRIMARY },
                { label: 'MULTICITY', value: 2, color: COLORS.PRIMARY }
            ]
        }
    }
    // onPress=()=>{this.setState({ data: data})};

    render() {
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
        return (
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <CustomView style={{ flex: 1, paddingTop: 10, backgroundColor: COLORS.WHITE_BACKGROUND }}>
                    <CustomView style={{ flexDirection: 'row', marginLeft: 5 }}>
                        <RadioGroup
                            value={selectedButton}
                            radioButtons={this.state.data}
                            onPress={(data) => this.setState({ data: data })}
                            flexDirection='row'
                        />

                    </CustomView>

                    <CustomView>

                        <CustomView>
                            <CustomView style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 10 }}>

                                <CustomView style={{ width: 190, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                    <CustomText>FROM</CustomText>
                                </CustomView>

                                <CustomView style={{ width: 190, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                    <CustomText>TO</CustomText>
                                </CustomView>

                            </CustomView>


                            {this.state.exchange ?
                                <CustomView style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 5 }}>

                                    <CustomView style={{ width: 190, alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                        <CustomView style={{ flexDirection: 'row', width: 120 }}>
                                            <CustomText style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>BOM </CustomText>
                                            <CustomText style={{}}>- Mumbai</CustomText>
                                        </CustomView>

                                        <CustomView style={{ width: 50, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                            <CustomImage source={RightArrowImage()} style={{ width: 20, height: 20, resizeMode: 'contain', }} />
                                        </CustomView>
                                    </CustomView>

                                    <CustomView style={{ width: 150, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                        <CustomView style={{ flexDirection: 'row' }}>
                                            <CustomText style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>GOI </CustomText>
                                            <CustomText style={{}}>- Goa</CustomText>
                                        </CustomView>
                                    </CustomView>
                                </CustomView>

                                :
                                <CustomView style={{ flexDirection: 'row', marginLeft: 20, paddingTop: 5 }}>

                                    <CustomView style={{ width: 190, alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                        <CustomView style={{ flexDirection: 'row', width: 120 }}>
                                            <CustomText style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>GOI </CustomText>
                                            <CustomText style={{}}> - Goa</CustomText>
                                        </CustomView>

                                        <CustomView style={{ width: 50, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                            <CustomImage source={RightArrowImage()} style={{ width: 20, height: 20, resizeMode: 'contain', }} />
                                        </CustomView>
                                    </CustomView>

                                    <CustomView style={{ width: 150, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                        <CustomView style={{ flexDirection: 'row' }}>
                                            <CustomText style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>BOM </CustomText>
                                            <CustomText style={{}}> - Mumbai</CustomText>
                                        </CustomView>
                                    </CustomView>
                                </CustomView>
                            }



                            <CustomView style={{ width: 90, alignItems: 'flex-start', justifyContent: 'flex-start', zIndex: 5, position: 'absolute', paddingTop: 6, marginLeft: 300, borderRadius: 20 }}>
                                <CustomTouchableOpacity onPress={() => this.setState({ exchange: !this.state.exchange })}>
                                    <CustomImage source={ArrowImage()} style={{ width: 30, height: 20, resizeMode: 'contain', borderRadius: 5 }} />
                                </CustomTouchableOpacity>
                            </CustomView>
                        </CustomView>



                    </CustomView>

                    <CustomView>
                        <CustomView style={{ flexDirection: 'row', marginLeft: 20, paddingTop: 15 }}>
                            <CustomView style={{ width: 190, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                <CustomText style={{}}>DEPARTURE</CustomText>
                            </CustomView>
                            <CustomView style={{ width: 190, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                <CustomText style={{}}>RETURN</CustomText>
                            </CustomView>

                        </CustomView>

                        <CustomView style={{ flexDirection: 'row', marginLeft: 20, paddingTop: 5 }}>

                            <CustomView style={{ width: 190, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                <CustomView style={{ flexDirection: 'row', width: 120 }}>
                                    <CustomText style={{ fontSize: 15 }}>Wed,</CustomText>
                                    <CustomText style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}> 9 MAY 2018</CustomText>
                                </CustomView>
                            </CustomView>
                            <CustomView style={{ width: 190, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                <CustomText style={{ color: 'grey' }}>Book for great saving</CustomText>
                            </CustomView>

                        </CustomView>

                        <CustomView style={{ flexDirection: 'row', marginLeft: 20, paddingTop: 15 }}>
                            <CustomView style={{ width: 190, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                <CustomText style={{ fontSize: 15 }}>TRAVELLERS</CustomText>
                            </CustomView>
                            <CustomView style={{ width: 190, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                <CustomText style={{ fontSize: 15 }}>CABIN CLASS</CustomText>
                            </CustomView>
                        </CustomView>

                        <CustomView style={{ flexDirection: 'row', marginLeft: 20, paddingTop: 10 }}>
                            <CustomView style={{ width: 190, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                <CustomText style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>01</CustomText>
                            </CustomView>
                            <CustomView style={{ width: 190, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                <CustomText style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Economy Class</CustomText>
                            </CustomView>
                        </CustomView>

                    </CustomView>

                    <CustomView style={{ padding: 20, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 4, borderBottomColor: COLORS.LIGHT }}>
                        <CustomTouchableOpacity style={{ width: 320, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.PRIMARY }}>
                            <CustomText style={{ fontSize: 15, color: COLORS.WHITE_BACKGROUND }}>SEARCH</CustomText>
                        </CustomTouchableOpacity>
                    </CustomView>



                    <CustomView style={{ paddingTop: 20, marginLeft: 10 }}>
                        <CustomText style={{ fontSize: 15, color: 'black' }}> FLASH SALE </CustomText>
                    </CustomView>
                    {/* Flash sale cards */}

                    <CustomView style={{ marginLeft: 10, }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                            <CustomView style={{ flexDirection: 'row' }}>

                                <Card Source={'Mumbai'}
                                    Destination={'Goa'}
                                    rightArrowImage={RightArrowImage()}
                                    Image={RupeeImage()}
                                    oldPrice={'2308'}
                                    newPrice={'2029'}
                                    date={'17 May 2018'}
                                    couponImage={CouponImage()}
                                />

                                <Card Source={'Coimbatore'}
                                    Destination={'Chennai'}
                                    rightArrowImage={RightArrowImage()}
                                    Image={RupeeImage()}
                                    oldPrice={'1498'}
                                    newPrice={'1240'}
                                    date={'15 Jun 2018'}
                                    couponImage={CouponImage()}
                                />
                            </CustomView>
                        </ScrollView>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                            <CustomView style={{ flexDirection: 'row' }}>

                                <Card Source={'Kolkata'}
                                    Destination={'Patna'}
                                    rightArrowImage={RightArrowImage()}
                                    Image={RupeeImage()}
                                    oldPrice={'2004'}
                                    newPrice={'1703'}
                                    date={'16 May 2018'}
                                    couponImage={CouponImage()}
                                />

                                <Card Source={'New Delhi'}
                                    Destination={'Ahemdabad'}
                                    rightArrowImage={RightArrowImage()}
                                    Image={RupeeImage()}
                                    oldPrice={'2149'}
                                    newPrice={'1742'}
                                    date={'08 Jun 2018'}
                                    couponImage={CouponImage()}
                                />

                            </CustomView>
                        </ScrollView>

                    </CustomView>

                    <CustomView style={{ height: 50, width: 400, backgroundColor: COLORS.WHITE_BACKGROUND }}></CustomView>
                </CustomView>
            </ScrollView>

        )
    }
}