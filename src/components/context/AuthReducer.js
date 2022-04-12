const AuthReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN_START':
            return {
                user:null,
                isAuthenticated: false,
                error: null,
            };
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
                isAuthenticated: true,
                error: null,
            } 
        case 'LOGIN_FAIL':{
            return {
                user: null,
                isAuthenticated: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}

export default AuthReducer;