export const userValidationLoading = bool => ({
    type : 'USER_VALIDATION_LOADING',
    loading : bool
})

export const userValidationFailed = bool => ({
    type : 'USER_VALIDATION_FAILED',
    failed : bool
})

export const userValidated = bool => ({
    type : 'USER_VALIDATED',
    isValid : bool
})

export const fetchUserStatus = (userDetails) => async(dispatch) => {

        dispatch(userValidationLoading(true));
        try{
            let response = await fetch('/userValidation',{
                method : 'PUT',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(userDetails)
            });
            console.log(response)
            let data = await response.text();
            dispatch(userValidationLoading(false));
            if(response.status === 200){
                dispatch(userValidated(data));
            }else{
                dispatch(userValidationFailed(true));
            }
        } catch(e){
            dispatch(userValidationFailed(true));
        }
}