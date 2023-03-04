import React from 'react'

export default function Card(props) {

    let options = props.priceOptions;

    // an inbuilt javascript function to get the key names from the key value pair of an object, takes that object as an input
    let priceOptions = Object.keys(options);

    return (
        <div>
            <div className="card m-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src={props.src} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded' style={{ "color": "white" }}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option style={{ "color": "white" }} key={i + 1} value={i + 1}>{i + 1}</option>
                                );
                            })}
                        </select>
                        <select className='m-2 h-100 bg-success rounded' style={{ "color": "white" }}>
                            {priceOptions.map((data) => {
                                return (
                                    <option key={data} value={data}>{data}</option>
                                );
                            })}
                        </select>
                        <div className='d-inline h-100'>Total Price</div>
                    </div>
                </div >
            </div >
        </div >

    )
}
