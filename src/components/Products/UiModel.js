import * as React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from '../Card/Card';
import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { addCartApiUrl, EComProductsApiUrl } from '../../util';

export default function UiModel() {
    const [totalValue, setTotalValue] = React.useState(0);
    const [cartList, setcartList] = React.useState([]);
    const [items, setItems] = React.useState([]);
    const [loader, setloader] = React.useState(true);
    const [badgeValue, setBadgeValue] = React.useState(0);

    useEffect(() => {
        async function getProducts() {
            const response = await fetch(EComProductsApiUrl);
            const body = await response.json();
            setItems(body);
            setloader(false)
        }
        getProducts();
    }, []);

    let addToCartButton = (arg) => {
        arg["quantity"] = 1
        axios.post(addCartApiUrl, arg)
            .then((res) => {
                alert("res")
            })
            .catch((err) => {
            });

        setBadgeValue((prevState) => prevState + 1)
        let isChanged = true;
        cartList.map((cart) => {
            if (cart.id == arg.id) {
                cart.quantity = cart.quantity + 1
                setcartList(cartList)
                setTotalValue(totalValue + arg.price)
                isChanged = false;
                return
            }
        });

        // if (isChanged) {
        //     arg["quantity"] = 1
        //     console.log(arg)
        //     cartList.push(arg)
        //     setcartList(cartList)
        //     setTotalValue(totalValue + arg.price)
        // }
    };

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
                <Grid item xs={12}>
                    {loader ?
                        <div style={{ margin: 'auto', width: 50, paddingTop: 200 }}>
                            <Box sx={{ display: 'flex' }}>
                                <CircularProgress />
                            </Box>
                        </div> :
                        <Grid container spacing={2}>
                            {items.map((item) => (
                                <Grid item md={4}>
                                    <ProductCard item={item} style={{ height: 400, width: 300 }} addToCartButton={addToCartButton} />
                                </Grid>
                            ))}
                        </Grid>
                    }
                </Grid>
            </Grid>
            <Button variant="contained" style={{ position: 'fixed', right: 10, bottom: 30, zIndex: 2 }}> <Badge badgeContent={badgeValue} color="secondary">
                <AddShoppingCartIcon />
            </Badge>Go To Cart </Button>
        </div>
    );
}