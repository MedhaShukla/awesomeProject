import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
    CustomView,
    CustomText,
    CustomImage,
    CustomTouchableOpacity

} from '../../Custom-Components';
import Onboarding from 'react-native-onboarding-swiper';


import { TripImage, JourneyImage, ScheduleImage } from '../../Config/image.config';
import COLORS from '../../Constants/color.constants';

export default class AdScene extends Component {

    render() {

        const Square = ({ isLight, selected }) => {
            let backgroundColor;
            if (isLight) {
                backgroundColor = selected ? COLORS.WHITE_BACKGROUND : COLORS.SECONDARY;
            } else {
                backgroundColor = selected ? COLORS.SECONDARY : COLORS.WHITE_BACKGROUND;
            }
            return (
                <CustomView
                    style={{
                        width: 6,
                        height: 6,
                        borderRadius: 3,
                        marginHorizontal: 3,
                        backgroundColor,
                    }}
                />
            );
        };

        return (
            <CustomView style={styles.container}>
                <CustomView style={styles.header}>
                    <CustomTouchableOpacity onPress={() => Actions.SCROLLTABSCENE()}>
                        <CustomText style={styles.text}>SKIP</CustomText>
                    </CustomTouchableOpacity>
                </CustomView>

                <Onboarding
                    skipToPage={0}
                    nextLabel="Next >"
                    skipLabel="< Prev"
                    bottomBarHighlight={false}
                    showDone={false}
                    DotComponent={Square}
                    onDone={() => Actions.SCROLLTABSCENE()}
                    pages={[
                        {
                            title: "PLAN A TRIP",
                            subtitle: "Plan trip to more 90 countries with few taps on your mobile screen",
                            backgroundColor: COLORS.PRIMARY,
                            image: <CustomImage source={TripImage()} style={styles.icon} />
                        },
                        {
                            title: "START YOUR JOURNEY",
                            subtitle: "Hassel-free and quick flight booking to any one of the 90 destinations",
                            backgroundColor: COLORS.PRIMARY,
                            image: <CustomImage source={JourneyImage()} style={styles.icon} />
                        },
                        {
                            title: "TRIP SCEDULE",
                            subtitle: "Real time flight status to help you stay on the top of your trip plan ",
                            backgroundColor: COLORS.PRIMARY,
                            image: <CustomImage source={ScheduleImage()} style={styles.icon} />
                        }
                    ]}
                />


            </CustomView>
        )
    }
}

const styles = {

    container: {
        flex: 1,
        backgroundColor: COLORS.PRIMARY,

    },
    header: {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginRight: 20,
        marginTop: 20
    },
    text: {
        fontSize: 18,
        color: COLORS.WHITE_BACKGROUND
    },
    icon: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 75
    }
}