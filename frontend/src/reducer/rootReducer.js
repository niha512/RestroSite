import { combineReducers } from 'redux';
import { userValidationLoading, userValidationFailed, userValidated} from './userDetails';

export const rootReducer = combineReducers({
    userValidated,
    userValidationFailed,
    userValidationLoading
});