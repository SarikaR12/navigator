import { takeLatest } from "redux-saga/effects";
import { DELETE_USER_PANDING, GET_USER_PANDING, POST_USER_PANDING, UPDATE_USER_PANDING } from "../../admin/action";
import { handle_delete_user, handle_get_user, handle_post_user, handle_update_user } from "../admin/managrProduct";
import { UPDATE_USER } from "../../constant";


function* handle_get_user_saga(){
    yield takeLatest(GET_USER_PANDING, handle_get_user)
}

function* handle_post_user_saga() {
    yield takeLatest(POST_USER_PANDING,handle_post_user)
}

function* handle_delete_user_saga(){
    yield takeLatest(DELETE_USER_PANDING,handle_delete_user)
}
function* handle_update_user_saga(){
    yield takeLatest(UPDATE_USER_PANDING,handle_update_user)
}

export{handle_get_user_saga,handle_post_user_saga,handle_delete_user_saga,handle_update_user_saga};
