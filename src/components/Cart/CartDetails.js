import * as React from 'react';
import Grid from '@mui/material/Grid';
import CartTable from './CartTable';

export default function cartDetails() {
    const [totalValue, setTotalValue] = React.useState(0);
    const [cartList, setcartList] = React.useState([]);

    let removeItemFromCart = (id, price, quantity) => {
        for (let i = 0; i < cartList.length; i++) {
            if (cartList[i].id == id) {
                cartList.splice(i, 1);
                setcartList(cartList)
                setTotalValue(totalValue - (price * quantity))
                return
            }
        }
    };

    function incrementCount(id) {
        cartList.map((cart) => {
            if (cart.id == id) {
                cart.quantity = cart.quantity + 1;
                setcartList(cartList)
                setTotalValue(totalValue + cart.price)
                return
            }
        });
    }

    function decrementCount(id) {
        for (let i = 0; i < cartList.length; i++) {
            if (cartList[i].id == id) {
                if (cartList[i].quantity == 1) {
                    setTotalValue(totalValue - cartList[i].price)
                    cartList.splice(i, 1);
                    return
                }

                cartList[i].quantity = cartList[i].quantity - 1;
                setTotalValue(totalValue - cartList[i].price)
                setcartList(cartList)
                return
            }
        }
    }

    return (
        <div style={{ padding: 5 }}>
            <Grid container spacing={2}>
                <CartTable cartList={cartList} removeItemFromCart={removeItemFromCart} decrementCount={decrementCount} incrementCount={incrementCount} totalValue={totalValue} />
            </Grid>
        </div>
    );
}