import { MOSTRAR_LOGIN } from '../actions/types';

// state inicial, cada reducer debe tener su propio state
const initialState = {
    login: [
        {
           email: "carlos",
        }
    ]
}


export default function (state = initialState, action) 
{
    switch(action.type) {
        case MOSTRAR_LOGIN:
            return {
                ...state
            }
            default:
                return state;
    }
}