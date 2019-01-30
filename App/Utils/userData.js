import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';



const newUserId = 'userData';

export function savedUserData() {
    let user = {
        password:'', email_id:'', mobile_no:'', last_name:'', first_name:''
    };
    let userData = [
        { id: 1, first_name: 'MEDHA', last_name: 'Shukla', email_id: 'medha.shukla@drivezy.com', mobile_no: '=91 8765950754', password:'medhashukla' },
        { id: 2, first_name: 'Himanshu', last_name: 'Kushwaha', email_id: 'himanshu.kushwaha@drivezy.com', mobile_no: '=91 8765950754',password:'himanshukushwaha' },
        { id: 3, first_name: 'Divyanshu', last_name: 'Grover', email_id: 'divyanshu.grover@drivezy.com', mobile_no: '=91 8765950754',password:'divyanshugrover' },
        { id: 4, first_name: 'Utpal', last_name: 'Singh', email_id: 'utpal.singh@drivezy.com', mobile_no: '=91 8765950754',password:'utpalsingh' }
    ]
    try {
        userData.push({ user });
        AsyncStorage.setItem('userData', JSON.stringify(userData));
    }
    catch (error) {
        console.log(error.message);
    }
    Actions.HOMESCENE();
}

export function getUserData() {
    try {
        let userData = AsyncStorage.getItem('userData') || 'none';
        let parsed = JSON.parse(userData);
        if( email_id==parsed.email_id && password==parsed.password  )
        {
                Actions.HOMESCENE();
        }
    }
    catch (error) {
        console.log(error.message);
    }

}