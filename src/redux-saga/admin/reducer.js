import { DELETE_USER_ERROR, DELETE_USER_PANDING, DELETE_USER_SUCCESS, GET_USER_ERROR, GET_USER_PANDING, GET_USER_SUCCESS, POST_USER_ERROR, POST_USER_PANDING, POST_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_PANDING, UPDATE_USER_SUCCESS } from "./action";


let initialstate = {
    users: [],
    isLoading: false,
    isError: null,

}

let adminReducer = (state = initialstate, action) => {
    console.log(action, "reducer");

    switch (action.type) {
        case (GET_USER_PANDING, POST_USER_PANDING,DELETE_USER_PANDING,UPDATE_USER_PANDING): {
            return {
                ...state,
                isLoading: true,
            }
        }
        case GET_USER_SUCCESS: {
            return {
                isLoading: false,
                users: action.payload,
            }
        }
        // FOR POST
        case POST_USER_SUCCESS: {
            return {
                isLoading: false,
                users: state.users.concat(action.payload)
            }
        }
        // for delete
        case DELETE_USER_SUCCESS:{
            return{
                isLoading:false,
                users: state.users.filter((val)=>val.id!== action.payload.id)
            }
        }

        // FOR UPDATE
        case UPDATE_USER_SUCCESS:{
            return{
                isLoading:false,
                user: state.users.map((val,ind)=> val.id == action.data,id ? {...action.data}:val)
            }
        }

        case (GET_USER_ERROR, POST_USER_ERROR,DELETE_USER_ERROR,UPDATE_USER_ERROR): {
            return {
                isLoading: false,
                isError: action.payload
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default adminReducer;