import { ALTER_MAIN_PAGE } from './actionTypes';

export const alterMainPage = value => {
    return ({
        type: ALTER_MAIN_PAGE,
        mainPage: value
    })
};