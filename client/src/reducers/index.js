import {combineReducers} from "redux"
import {postsReducer} from "./posts"
export default combineReducers({
    Posts:postsReducer,
})
//tu mettre tous les reducers ici j'ai seulement posts