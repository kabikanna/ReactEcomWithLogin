import * as React from 'react';
import './card.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import GroupsIcon from '@mui/icons-material/Groups';
import Grid from '@mui/material/Grid';
/**
 * Ui card camponent
 * @param {*} item product item details.
 * @param {*} addToCartButton add to cart onclick nutton function.
 * @returns 
 */
export default function ProductCard({ item, addToCartButton }) {
    return (
        <div>
            <div class="card" style={{ height: 400 }}>
                <div style={{ height: 150 }}>  <img src={item.image} style={{ width: 100 }} /></div>
                <div style={{ height: 35 }}> <h5>{item.title}</h5></div>
                <p class="price">₹{item.price}</p>
                {/* <p style={{fontSize:10}}>{item.description}</p> */}
                {/* <div ><div><StarBorderIcon/></div><div> {item.rating.rate}  / <GroupsIcon/>{item.rating.count}</div></div> */}
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <StarBorderIcon />
                    </Grid>
                    <Grid item xs={3} style={{ padding: 20, paddingLeft: 0 }}>
                        {item.rating.rate}
                    </Grid>
                    <Grid item xs={3}>
                        <GroupsIcon />
                    </Grid>
                    <Grid item xs={3} style={{ padding: 20, paddingLeft: 0 }}>
                        {item.rating.count}
                    </Grid>
                </Grid>
                <button onClick={() => addToCartButton(item)}>Add to Cart</button>
            </div>
        </div>
    );
}