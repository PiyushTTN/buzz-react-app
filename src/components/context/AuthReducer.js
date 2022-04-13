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
        case 'LOGOUT':{
            return {
                user: null,
                isAuthenticated: false,
                error: null,
            }
        }
        default:
            return state;

    }
}

export default AuthReducer;