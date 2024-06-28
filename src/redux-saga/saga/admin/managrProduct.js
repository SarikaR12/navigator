import { DELETE_USER_ERROR, DELETE_USER_SUCCESS, GET_USER_ERROR, GET_USER_SUCCESS, POST_USER_ERROR, POST_USER_SUCCESS } from "../../admin/action";
import { delete_user, get_user, post_user, update_user } from "../../admin/api";
import { call, put } from "redux-saga/effects";


function* handle_get_user(action) {
    console.log(action, "manage");

    try {
        let { data, status } = yield call(get_user, action)
        // console.log(res);

        if (status == 200) {
            yield put({ type: GET_USER_SUCCESS, payload: data })
        } else {
            yield put({ type: GET_USER_ERROR, payload: data })
        }
    } catch (error) {
        yield put("not found", error)
    }
}

function* handle_post_user(action) {
    try {
        let { data, status } = yield call(post_user, action)
        yield put({ type: POST_USER_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: POST_USER_ERROR, payload: error })
    }

}

function* handle_delete_user(action){
    try {
        let {data,status} = yield call(delete_user,action)
        // console.log(res);
        yield put({type:DELETE_USER_SUCCESS, payload:data})
    } catch (error) {
        yield put({type: DELETE_USER_ERROR,payload:error});
        
    }
}

function* handle_update_user(action){
    let res =  yield call(update_user,action)
    console.log(res);
}
export { handle_get_user,handle_post_user,handle_delete_user,handle_update_user };