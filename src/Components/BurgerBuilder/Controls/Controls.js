import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Button } from 'reactstrap';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'meat', type: 'meat' },
]

const BuildControl = props => {
    return (
        <div className='d-flex my-1'>
            <div style={{ marginRight: 'auto', fontWeight: 'bold', fontSize: '1.2rem' }}>{props.label}</div>
            <button className='btn btn-danger btn-md mx-1'>Less</button>
            <button className='btn btn-success  btn-md mx-1'>More</button>
        </div>
    )
}

const Controls = props => {
    return (
        <div className='container ml-md-5 text-center'>
            <Card style={{
                marginTop: '30px',
                marginBottom: '30px',
                textAlign: 'center'
            }}>
                <CardHeader tag='h4' style={{
                    backgroundColor: '#D70F60',
                    color: "white"
                }}>Add Ingredients</CardHeader>
                <CardBody>
                    {
                        controls.map(item => {
                            return <BuildControl label={item.label} />
                        })
                    }
                </CardBody>
                <CardFooter tag='h5'>Price: BDT</CardFooter>
            </Card>
        </div>
    )
}

export default Controls;