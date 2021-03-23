import { createContext, useCallback, useContext, useReducer } from "react";
import { COUNTER_ACTIONS } from "../constants/actions";

const cartContext = createContext(null);

export const useCart = () => {
    return useContext(cartContext);
};

export const ProvideCart = ({ children }) => {
    const cart = useProvideCart();
    return <cartContext.Provider value={cart}>{children}</cartContext.Provider>
};

const useProvideCart = () => {
    const initState = {
        quantity: 0
    };
    const counterReducer = (state, action) => {
        switch (action) {
            case COUNTER_ACTIONS.INCREMENT:
                return {
                    ...state, quantity: state.quantity + 1
                }
            case COUNTER_ACTIONS.DECREMENT:
                if (state.quantity > 0) {
                    return {
                        ...state, quantity: state.quantity - 1
                    }
                }
                else return { ...state };
            default:
                return initState;
        }
    };

    const [state, dispatch] = useReducer(counterReducer, initState);

    const handleIncrement = useCallback(() => {
        dispatch(COUNTER_ACTIONS.INCREMENT);
    }, [state.quantity]);

    const handleDecrement = useCallback(() => {
        dispatch(COUNTER_ACTIONS.DECREMENT);
    }, [state.quantity]);

    return {
        state,
        handleIncrement,
        handleDecrement
    }
};