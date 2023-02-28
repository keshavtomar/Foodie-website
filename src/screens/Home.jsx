import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousel from '../components/Carousel';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <div><Card src="./images/pizza.jpg" /></div>
            <div><Card src="./images/pizza.jpg" /></div>
            <div><Card src="./images/pizza.jpg" /></div>
            <div><Card src="./images/pizza.jpg" /></div>

            <Footer />
        </div >
    )
}
