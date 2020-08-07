export const userValidationLoading = (state = false, action) => {

    switch(action.type){
        case 'USER_VALIDATION_LOADING':
            return action.loading;
        default :
            return state;
    }
}

export const userValidationFailed = (state = false, action) => {
    
    switch(action.type){
        case 'USER_VALIDATION_FAILED':
            return action.failed;
        default :
            return state;
    }
}

export const userValidated = (state = false, action) => {

    switch(action.type){
        case 'USER_VALIDATED':
            return action.isValid;
        default :
            return state;
    }
}

