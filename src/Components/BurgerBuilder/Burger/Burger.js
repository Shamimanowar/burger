import React from 'react';

import Ingredient from '../Ingredient/Ingredient';
import './Burger.css'
const Burger = props => {
    let ingredientArr = props.ingredients.map(item => {
        return [...Array(item.ammount).keys()].map(_ => {
            return <Ingredient key={Math.random() * Math.random()} type={item.type} />
        })
    })
        .reduce((arr, item) => {
            return arr.concat(item)
        }, [])

    if (ingredientArr.length === 0) {
        ingredientArr = <p>Please add some ingredients</p>
    }
    return (
        <div className='Burger'>
            <Ingredient type='bread-top' />
            {ingredientArr}
            <Ingredient type='bread-bottom' />
        </div>
    )
}

export default Burger;