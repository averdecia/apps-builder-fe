import Types from '../Constants/ActionTypes'

const initialState = {
    load_status: "loading"
};
  
const GeneralReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.PAGE_LOAD:
            return {...state, load_status: "load"}
        case Types.PAGE_LOADED:
            return {...state, load_status: "loaded"}
        default:
            break;
    }
    return state;
};
  
  export default GeneralReducer;