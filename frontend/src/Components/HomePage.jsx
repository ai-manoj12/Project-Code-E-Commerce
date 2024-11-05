import React, {useState} from 'react';
import {FaShoppingCart, FaUser, FaShoppingBag, FaBook, FaFlask, FaHeart, FaRegHeart, FaSearch} from "react-icons/fa"
import {FaMicrochip, FaPencil, FaBoltLightning, FaH} from "react-icons/fa6"
import { TbDeviceRemote } from "react-icons/tb";
import { IoIosArrowDropdown } from "react-icons/io";
import "@fontsource/abhaya-libre";
import "./HomePage.css"

const HomePage = () => {
    const [isDropdownActive, setDropdownStatus] = useState(false);

    const toggleDropdown = () => {
        setDropdownStatus(!isDropdownActive);
      };

    // const likeButton = (item) => {
    //     let heart;
    //     if (item.liked) {
    //         heart = (<FaHeart className='like-button' onClick={toggleLike}></FaHeart>)
    //     } else {
    //         heart = (<FaRegHeart className='like-button' onClick={toggleLike}></FaRegHeart>)
    //     }
    //     return (
    //         {heart}
    //     )
    // };

    const renderItem = (item) => {

        const itemName = item.name;
        const itemPrice = item.price;
        const itemImg = item.picture;
        let heart;
        if (item.liked) {
            heart = (<FaHeart className='like-button' onClick={toggleLike}></FaHeart>)
        } else {
            heart = (<FaRegHeart className='like-button' onClick={toggleLike}></FaRegHeart>)
        }
        return (
            <div className='item-card'> 

                <div className='image-box'>

                    <img className='item-image' src={itemImg}></img>
                {/* <button className="like-button" onClick={toggleLike}>

                    <i className={item.liked ? <FaHeart></FaHeart> : <FaRegHeart></FaRegHeart>}></i>
                </button> */}
                {heart}
                </div>
                <div className='item-text'>
                    <div className='item-name'>{itemName}</div>
                    <div className='item-price'>${itemPrice}</div>
                </div>

            </div>
        )
    };

    const toggleLike = (item) => {
        item.liked = !item.liked;
      };

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
            <div className="navBar"> 
                <div className='logo'>
                    <FaShoppingBag></FaShoppingBag>
                    <div className="title">E-Commerce</div>
                </div>
                {/* Need to make drop-down */}
                <div className='search-dropdown'>
                    <div className="drop-down" onClick={toggleDropdown}>
                        Categories
                        <IoIosArrowDropdown className='drop-arrow'></IoIosArrowDropdown>
                    
                    {isDropdownActive && (
                        <ul className="dropdown-menu">
                            <li>Textbooks</li>
                            <li>Lab Kits</li>
                            <li>ECE Kits</li>
                            <li>iClickers</li>
                            <li>General Supplies</li>
                            <li>Chargers</li>
                        </ul>
                    )}
                    </div>
                    {/* <div className='divider'>|</div> */}
                    <div className='search-bar'>
                        <input type="text" className="search" placeholder="Search for items..."/>
                        <FaSearch className='search-icon'></FaSearch>
                    </div>
                </div>
                <div className="navbar-icons">
                    <FaShoppingCart className='icon'/>
                    <FaUser className='icon'/>
                </div>
            </div>
            <div className="header"> 
                <div className="header-detail">
                    <h1 className="slogan">Your One-Stop Shop for UIUC Essentials</h1>
                    <div className="subheading">From iClickers to ioLabs, buy and sell your used school tech and textbooks 
                        to help students achieve their academic goals.
                    </div>
                    <button className='button buy-now'>Buy Now</button>
                    <button className='button view-detail'>View Detail</button>
                </div>
                <div className='header-image'>
                    <img src={require('../Images/CartImage.png')} className='image-main' />
                </div>
            </div>
            <div className="featured-header"> 
                <div className='featured-navbar'>
                    <h2 className='featured-categories-text'>Featured Categories</h2>
                    <button className="button view-detail small">View Detail</button>
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
                testItems.map((item) => (renderItem(item)))
                }
            </div>


        </div>
    );
};

export default HomePage;