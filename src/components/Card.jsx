import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
    let dispatch = useDispatchCart();

    let options = props.priceOptions;

    const data = useCart();
    const priceRef = useRef();

    // an inbuilt javascript function to get the key names from the key value pair of an object, takes that object as an input
    let priceOptions = Object.keys(options);
    const [qty, setqty] = useState('1')
    const [size, setsize] = useState("")

    //when add to cart button is pressed
    let finalPrice = qty * parseInt(options[size]);

    const handleAddtoCart = async () => {
        await dispatch({ type: "ADD", id: props.foodItem._id, img: props.img, name: props.foodItem.name, price: finalPrice, qty: qty, size: size });
        await console.log(data);
    }


    useEffect(() => {
        setsize(priceRef.current.value);
    }, [])

    return (
        <div>
            <div className="card m-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded' style={{ "color": "white" }} onChange={(e) => setqty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option style={{ "color": "white" }} key={i + 1} value={i + 1}>{i + 1}</option>
                                );
                            })}
                        </select>
                        <select className='m-2 h-100 bg-success rounded' style={{ "color": "white" }} ref={priceRef} onChange={(e) => setsize(e.target.value)}>
                            {priceOptions.map((data) => {
                                return (
                                    <option key={data} value={data}>{data}</option>
                                );
                            })}
                        </select>
                        <div className='d-inline h-100'>₹{finalPrice}/-</div>
                        <hr></hr>
                        <button className={'btn btn-success justify-center ms-2'} onClick={handleAddtoCart}>Add to Cart</button>

                    </div>
                </div >
            </div >
        </div >

    )
}
