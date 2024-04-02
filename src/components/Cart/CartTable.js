import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartTable(props) {
    const { cartList, incrementCount, decrementCount, removeItemFromCart, totalValue } = props;
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price/No</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Remove</th>
                </tr>
                {cartList.length > 0 ? <>{cartList.map((item) => (
                    <tr>
                        <td>{item.title} </td>
                        <td>₹{item.price}</td>
                        <td>  <button style={{ backgroundColor: 'white', border: 'white', cursor: 'pointer' }} onClick={() => incrementCount(item.id)}>+</button>
                            <span>{item.quantity}</span>
                            <button style={{ backgroundColor: 'white', border: 'white', cursor: 'pointer' }} onClick={() => decrementCount(item.id)}>-</button>
                        </td>
                        <td>₹{Math.max(0, (item.quantity * item.price)).toFixed(2)}</td>
                        <td><button onClick={() => removeItemFromCart(item.id, item.price, item.quantity)}><DeleteIcon /></button></td>
                    </tr>
                ))}</> : ""}
                <tr style={{ backgroundColor: 'white' }}>
                    <div><br></br></div>
                </tr>
                <tr style={{ backgroundColor: 'white' }}>
                    <th>Total Price</th>
                    <td>₹{Math.max(0, totalValue).toFixed(2)}</td>
                </tr>
            </table>
        </div>
    );
}