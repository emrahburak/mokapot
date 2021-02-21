import * as actionTypes from './actionTypes';

export function joinTheSite(user){
    return{type:actionTypes.JOIN_THE_SITE, payload:user};
}


export function loginTheSite(user){
    return{type:actionTypes.LOGIN_THE_SITE, payload:user};
}
