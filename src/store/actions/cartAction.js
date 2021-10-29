import ActionType from "./actionType";
import {
    getCartApi,
    getCartQuantityApi,
    addProductToCartApi,
    removeProductFromCartApi,
} from "../../api/cartApi"

const getCart = () => {

    return dispatch => {
        dispatch({ type: ActionType.START_GET_CART_LIST });

        getCartApi().then(response => {
            if (response.data.success) {
                const data = response.data.data;
                dispatch({ type: ActionType.GET_CART_LIST_SUCCESS, data: data });
            }
            else {
                dispatch({ type: ActionType.GET_CART_LIST_FAIL })
            }
        })
    }
}

const getCartQuantity = () => {
    return dispatch => {
        getCartQuantityApi().then(response => {
            if (response.data.success) {
                console.log('get cart qty: ', response);
                const data = response.data.data;
                dispatch({
                    type: ActionType.GET_CART_QUANTITY,
                    quantity: data
                });
            }
        })
    }
}

const addProductToCart = (product) => {

    const productID = product.productID;

    const productData = {
        productID: productID,
        rating: product.rating,
        name: product.name,
        img1: product.img1,
        sold: product.sold,
        quantity: 1,
        price: product.price,
    }

    return dispatch => {
        dispatch({
            type: ActionType.START_ADD_PRODUCT_TO_CART,
            data: productData,
        })
        addProductToCartApi(productID).then(response => {
            if (response.data.success) {
                const data = response.data.data;

                dispatch({
                    type: ActionType.GET_CART_QUANTITY,
                    quantity: data.totalQuantity,
                    message: data.message,
                });
            }
        })
    }
}

const removeProductFromCart = (product) => {

    const productID = product.productID;
    return dispatch => {
        dispatch({
            type: ActionType.REMOVE_PRODUCT_FROM_CART,
            productID: productID,
            quantity: product.quantity,
        });
        removeProductFromCartApi(productID).then(response => {
            if (response.data.success) {
                const data = response.data.data;
                console.log('response remove: ', response);

                dispatch({
                    type: ActionType.GET_CART_QUANTITY,
                    quantity: data.totalQuantity,
                    message: "Remove item from cart"
                });
            }
        })
    }
}

export { getCart, getCartQuantity, addProductToCart, removeProductFromCart };