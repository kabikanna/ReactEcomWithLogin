import * as React from 'react';
import UiModel from './components/Products/UiModel';
import PrimarySearchAppBar from './components/NavBar/NavBar';
export default function Ecom() {
    return (
        <div>
            <PrimarySearchAppBar />
            <div><br></br></div>
            <UiModel />
        </div>
    );
}