import React, { useState } from 'react'
import styles from './Cart.styles'

//component
import { TransitionGroup } from 'react-transition-group';
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import { Container, Box, Typography, Button, Collapse } from '@mui/material'
import CustomModal from "../../components/Modal/Modal"

//redux && api
import { cartSelector } from "../../store/selectors"
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { removeProductFromCart, changeProductQuantity, removeAllCart } from "../../store/actions/cartAction"

const Cart = () => {

    const history = useHistory();
    const { cartList, totalPrice } = useSelector(cartSelector);

    const isLoading = useSelector(state => state.CartList.isLoading)

    const [openModalDelete, setOpenModalDelete] = useState(false);

    const formatedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice);

    const dispatch = useDispatch();

    const changeQuantity = (product, quantity) => {
        dispatch(changeProductQuantity(product, quantity));
    }
    const removeAllProduct = () => {
        dispatch(removeAllCart());
    }

    const deleteProduct = (product) => {
        dispatch(removeProductFromCart(product));
    }
    const onCheckOut = () => {
        history.push('/checkout/payment')
    }

    if (isLoading) return <Box sx={{ minHeight: "65vh" }} />
    else
        return (
            <Box sx={styles.box}>
                <Box sx={styles.main}>
                    <CustomModal
                        openModal={openModalDelete}
                        setOpenModal={setOpenModalDelete}

                        title={"Remove all"}
                        description="Do want to remove all product from cart?"
                        onPressConfirm={removeAllProduct}
                    />
                    {
                        (!isLoading && cartList.length == 0)
                            ? <EmptyCart />
                            : null
                    }
                    {cartList.length != 0 ?
                        <Box sx={styles.cartListWrapper}>
                            <Box>
                                <Box sx={styles.removeRow}>
                                    <Typography
                                        sx={styles.myCart}
                                    >
                                        My Cart
                                    </Typography>

                                    <Button
                                        onClick={() => {
                                            setOpenModalDelete(true)
                                        }}
                                        color="error"
                                        sx={styles.removeAll}
                                    >
                                        Remove all
                                    </Button>
                                </Box>
                                <TransitionGroup>
                                    {cartList.map(product =>
                                        <Collapse key={product.productID}>
                                            <HorizontalProduct
                                                key={product.productID}
                                                cartProduct
                                                product={product}
                                                canDelete
                                                onPressDelete={(e) => {
                                                    e.preventDefault()
                                                    deleteProduct(product)
                                                }}
                                                changeQuantity={changeQuantity}
                                            />
                                        </Collapse>
                                    )}
                                </TransitionGroup>
                            </Box>


                        </Box>
                        : null
                    }
                    {
                        cartList.length != 0 ?
                            <Box sx={styles.summary}>
                                <Box sx={styles.summaryData}>
                                    <Typography sx={styles.orderSummary}>
                                        Order Summary
                                    </Typography>

                                    <Box sx={styles.taxContainer}>
                                        <Typography sx={styles.summaryTitle}>Tax</Typography>
                                        <Typography sx={styles.tax}>0đ</Typography>
                                    </Box>

                                    <Box sx={styles.totalContainer}>
                                        <Typography sx={styles.summaryTitle}>Total</Typography>
                                        <Typography sx={styles.total}>
                                            {formatedPrice}</Typography>
                                    </Box>
                                </Box>

                                <Button
                                    sx={styles.checkoutButton}
                                    variant="contained"
                                    color="error"
                                    onClick={onCheckOut}
                                >
                                    Checkout
                                </Button>
                            </Box>
                            : null
                    }

                </Box>
            </Box>
        )
}

export default Cart

