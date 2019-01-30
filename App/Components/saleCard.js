import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { CustomTextInput, CustomView, CustomText, CustomImage } from '../Custom-Components';
import COLORS from '../Constants/color.constants';

export default class Card extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 10 }}>
                <CustomView style={{ backgroundColor: COLORS.LIGHT, paddingRight: 10, height: 100, margin: 3 }}>

                    <CustomView style={{ flexDirection: 'row', marginLeft: 10, paddingTop: 10 }}>
                        <CustomText style={{ color: 'black', fontSize: 18 }}>{this.props.Source}  </CustomText>
                        <CustomImage source={this.props.rightArrowImage} style={{ width: 20, height: 20, resizeMode: 'contain', }} />
                        <CustomText style={{ color: 'black', fontSize: 18 }}>  {this.props.Destination}</CustomText>
                    </CustomView>

                    <CustomView style={{ flexDirection: 'row', marginLeft: 10, paddingTop: 3 }}>
                        <CustomView style={{ paddingTop: 2 }}>
                            <CustomImage source={this.props.Image} style={{ width: 10, height: 10, resizeMode: 'contain' }} />
                        </CustomView>
                        <CustomText style={{ color: 'grey', fontSize: 12, textDecorationLine: 'line-through' }}>{this.props.oldPrice}</CustomText>
                    </CustomView>

                    <CustomView style={{ flexDirection: 'row', marginLeft: 10, paddingTop: 3 }}>
                        <CustomView style={{ paddingTop: 2 }}>
                            <CustomImage source={this.props.Image} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                        </CustomView>
                        <CustomText style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>{this.props.newPrice}</CustomText>
                    </CustomView>

                    <CustomView style={{ flexDirection: 'row', marginLeft: 10, paddingTop: 3 }}>

                        <CustomView style={{ width: 130, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <CustomText style={{ color: 'black', fontSize: 15 }}> {this.props.date}</CustomText>
                        </CustomView>
                        <CustomView style={{ width: 50, alignItems: 'center', justifyContent: 'center', marginRight: 20 }}>
                            <CustomImage source={this.props.couponImage} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                        </CustomView>
                    </CustomView>
                </CustomView>
            </ScrollView>
        )
    }
}
