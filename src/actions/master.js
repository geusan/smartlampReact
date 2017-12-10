import {
    SET_COLOR_ALL,
    SET_COLOR_ALL_SUCCESS,
    SET_COLOR_ALL_FAILURE,
    SET_COLOR_ONE,
    SET_COLOR_ONE_SUCCESS,
    SET_COLOR_ONE_FAILURE,
    SET_BRIGHTNESS,
    SET_BRIGHTNESS_SUCCESS,
    SET_BRIGHTNESS_FAILURE,
    SET_ANIMATION,
    SET_ANIMATION_SUCCESS,
    SET_ANIMATION_FAILURE,
} from './ActionTypes';
import axios from 'axios';


    
    
export function setColorAllRequest(r,g,b){
    return (dispatch) => {
        
        dispatch(setColorAll())
        
        // url 설정 
        let url = "/setcolor/"+r+"/"+g+"/"+b;
    
        // 통신
        return axios.get(url)
        .then((res)=>{
            return dispatch(setColorAllSuccess(res.data))
        })
        .catch((err) => {
            return dispatch(setColorAllFailure(err))
        })    
        
    }
    
}

export function setColorAll(){
    return {
        type:SET_COLOR_ALL
    }
}

export function setColorAllSuccess(data){
    return {
        type:SET_COLOR_ALL_SUCCESS,
        data
    }
}

export function setColorAllFailure(err){
    return {
        type:SET_COLOR_ALL_FAILURE,
        err
    }
}






export function setColorOneRequest(r,g,b,n){
    return (dispatch) => {
        
        dispatch(setColorOne())
        
        // url 설정 
        let url = "";
    
        // 통신
        return axios.get(url)
        .then((res)=>{
            return dispatch(setColorOneSuccess(res.data))
        })
        .catch((err) => {
            return dispatch(setColorOneFailure(err))
        })    
        
    }
}


export function setColorOne(){
    return {
        type:SET_COLOR_ONE
    }
}

export function setColorOneSuccess(data){
    return {
        type:SET_COLOR_ONE_SUCCESS,
        data
    }
}

export function setColorOneFailure(err){
    return {
        type:SET_COLOR_ONE_FAILURE,
        err
    }
}





export function setBrightnessRequest(brightness){
    return (dispatch) => {
        
        dispatch(setBrightness())
        
        // url 설정 
        let url = "/setbrightness/" + brightness;
    
        // 통신
        return axios.get(url)
        .then((res)=>{
            return dispatch(setBrightnessSuccess(res.data))
        })
        .catch((err) => {
            return dispatch(setBrightnessFailure(err))
        })    
        
    }
}

export function setBrightness(){
    return {
        type:SET_BRIGHTNESS
    }
}

export function setBrightnessSuccess(data){
    return {
        type:SET_BRIGHTNESS_SUCCESS,
        data
    }
}

export function setBrightnessFailure(err){
    return {
        type:SET_BRIGHTNESS_FAILURE,
        err
    }
}




export function setAnimationRequest(animation){
    return (dispatch) => {
        
        dispatch(setAnimation())
        
        // url 설정 
        let url = "/mode/" + animation;
    
        // 통신
        return axios.get(url)
        .then((res)=>{
            return dispatch(setAnimationSuccess(res.data))
        })
        .catch((err) => {
            return dispatch(setAnimationFailure(err))
        })    
        
    }
}

export function setAnimation(){
    return {
        type:SET_ANIMATION
    }
}

export function setAnimationSuccess(data){
    return {
        type:SET_ANIMATION_SUCCESS,
        data
    }
}

export function setAnimationFailure(err){
    return {
        type:SET_ANIMATION_FAILURE,
        err
    }
}

