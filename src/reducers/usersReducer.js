import { FETCH_USERS_SUCCEED, FETCH_USERS_ASYNC } from "../actions/ActionTypes";

// Initial State
const initialState = {
    users: [],
    loading: false
};
// Redux: Counter Reducer
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        // case FETCH_USERS_ASYNC:
        //     return {
        //         ...state,
        //         // users: action.value,
        //     };
        case FETCH_USERS_SUCCEED :
            return {
                ...state,
                loading: false,
                users: action.users,
            };

        //   case 'DECREASE_COUNTER': {
        //     return {
        //       ...state,
        //       counter: state.counter - action.value,
        //     };
        //   }
        default:
            return state;
    }

}
// Exports
export default usersReducer;