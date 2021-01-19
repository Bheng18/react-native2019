import { FETCH_USERS, FETCH_USERS_SUCCEED, FETCH_USERS_ASYNC, FETCH_USERS_FAILED } from "./ActionTypes";

//trigger from UI to Action index.js -> redux saga watchers
export const getUsers = () => {
    return {
        type: FETCH_USERS, //same in saga watchers
        loading: true
    }
}

//
export const getUsersSuceed = () => {
    return {
        type: FETCH_USERS_SUCCEED, //same name in worker function - fetchUsers
        
    }
}

export const getUsersFailed = () => {
    return {
        type: FETCH_USERS_FAILED,
    }
}

// export const postUsers = () => {
//     return {
//         type: POST_USERS,
//     }
// }
