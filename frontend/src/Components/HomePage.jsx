import React, {useState} from 'react';
import {FaShoppingCart, FaUser, FaShoppingBag, FaBook, FaFlask, FaHeart, FaRegHeart, FaSearch} from "react-icons/fa"
import {FaMicrochip, FaPencil, FaBoltLightning, FaH} from "react-icons/fa6"
import { TbDeviceRemote } from "react-icons/tb";
import { IoIosArrowDropdown } from "react-icons/io";
import "@fontsource/abhaya-libre";
import "./HomePage.css";
import Header from "./header" ;

const HomePage = () => {



    const testItem = {
        "name": "T-Shirt",
        "price": "25",
        "picture": require("../Images/tshirt.jpg"),
    };

    const testItems = [
        {
            "name": "T-Shirt",
            "price": "25",
            "picture": require("../Images/tshirt.jpg"),
            "liked" : false,
        },
        {
            "name": "T-Shirt",
            "price": "25",
            "picture": require("../Images/tshirt.jpg"),
            "liked" : false,
        },
        {
            "name": "T-Shirt",
            "price": "25",
            "picture": require("../Images/tshirt.jpg"),
            "liked" : false,
        },
        {
            "name": "T-Shirt",
            "price": "25",
            "picture": require("../Images/tshirt.jpg"),
            "liked" : false,
        }
    ]

    return (
        //put your code here
        <div className="home-page">
            {/* <h1>This is a test</h1> */}
            {/* NavBar */}
            <Header></Header>
            <div className="header"> 
                <div className="header-detail">
                    <h1 className="slogan">Your One-Stop Shop for UIUC Essentials</h1>
                    <div className="subheading">From iClickers to ioLabs, buy and sell your used school tech and textbooks 
                        to help students achieve their academic goals.
                    </div>
                    <button className='button buy-now'>Shop Now</button>
                    <button className='button view-detail'>View Detail</button>
                </div>
                {/* <div className='header-image'> */}
                    <img src={require('../Images/CartImage.png')} alt="tiny-cart-image" className='image-main' />
                {/* </div> */}
            </div>
            <div className="featured-header"> 
                <div className='featured-navbar'>
                    <h2 className='featured-categories-text'>Featured Categories</h2>
                    <button className="button view-detail small">All Categories</button>
                </div>
                <div className='categories-list'>
                    {/* @TODO create categories list */}
                    <div className='card textbook'>
                        <FaBook className='large-icon'></FaBook>
                        <div className='featured-category'>Textbooks</div>
                        <div className='product-count'>112 products</div>
                    </div>

                    <div className='card labkits'>
                        <FaFlask className='large-icon'></FaFlask>
                        <div className='featured-category'>Lab Kits</div>
                        <div className='product-count'>112 products</div>
                    </div>

                    <div className='card ecekits'>
                        <FaMicrochip className='large-icon'></FaMicrochip>
                        <div className='featured-category'>ECE Kits</div>
                        <div className='product-count'>112 products</div>
                    </div>

                    <div className='card iclicker'>
                        <TbDeviceRemote className='large-icon'></TbDeviceRemote>
                        <div className='featured-category'>iClicker</div>
                        <div className='product-count'>112 products</div>
                    </div>

                    <div className='card generalsupplies'>
                        <FaPencil className='large-icon'></FaPencil>
                        <div className='featured-category'>General Supplies</div>
                        <div className='product-count'>112 products</div>
                    </div>

                    <div className='card chargers'>
                        <FaBoltLightning className='large-icon'></FaBoltLightning>
                        <div className='featured-category'>Chargers</div>
                        <div className='product-count'>112 products</div>
                    </div>
                </div>
            </div>
            <div className="items"> 
                {/* @TODO create items, prob make a render item function */}
                
                {
                    // allEvents.map((event) => (renderEvent(event)))
                
                testItems.map((item) => ( 
                    <div className="itemBox"> 
                        {ItemCard(item)}
                    </div>
                
                    
                ))
                }
            </div>


        </div>
    );
};

const ItemCard = (item) => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {

        setLiked(!liked);
        item.liked = liked;
    }

    const itemName = item.name;
    const itemPrice = item.price;
    const itemImg = item.picture;

    return (
        <div className='item-card'> 

            <div className='image-box'>

                <img className='item-image' alt={itemName} src={itemImg}></img>
            {/* <button className="like-button" onClick={toggleLike}>

                <i className={item.liked ? <FaHeart></FaHeart> : <FaRegHeart></FaRegHeart>}></i>
            </button> */}
            {liked ? <FaHeart className='like-button' onClick={toggleLike}></FaHeart> : 
    <FaRegHeart className='like-button' onClick={toggleLike}></FaRegHeart>}
            </div>
            <div className='item-text'>
                <div className='item-name'>{itemName}</div>
                <div className='item-price'>${itemPrice}</div>
            </div>

        </div>
    )
};

export default HomePage;