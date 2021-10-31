import React from "react";

import BreadTop from '../../../assets/images/top.png';
import BreadBottom from '../../../assets/images/bottom.png';
import Meat from '../../../assets/images/meat.png';
import Salad from '../../../assets/images/salad.png';
import Cheese from '../../../assets/images/cheese.png'

import './Ingredient.css';

const Ingredient = props => {
    let ingredient = null;

    switch (props.type) {
        case 'bread-top':
            ingredient = <div><img src={BreadTop} alt='Top Bread' /></div>
            break;
        case 'bread-bottom':
            ingredient = <div><img src={BreadBottom} alt='Bottom Bread' /></div>
            break;
        case 'meat':
            ingredient = <div><img src={Meat} alt='Meat' /></div>
            break;
        case 'salad':
            ingredient = <div><img src={Salad} alt='Cheese' /></div>
            break;
        case 'cheese':
            ingredient = <div><img src={Cheese} alt='Salad' /></div>
            break;
        default:
            ingredient = null
    }


    return (
        <div className='Ingredient'>
            {ingredient}
        </div>
    )
}

export default Ingredient;