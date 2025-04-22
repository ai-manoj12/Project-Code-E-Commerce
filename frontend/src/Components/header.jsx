import styles from "./Header.module.css";

import React, {useState} from 'react';
import {FaShoppingCart, FaUser, FaShoppingBag, FaSearch} from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import "@fontsource/abhaya-libre";

const Header = () => {
    const [isDropdownActive, setDropdownStatus] = useState(false);

    const toggleDropdown = () => {
        setDropdownStatus(!isDropdownActive);
        };

    return (
                <div className={styles.navBar}> 
                    <div className={styles.logo}>
                        <FaShoppingBag></FaShoppingBag>
                        <div className={styles.title}>E-Commerce</div>
                    </div>
                    {/* Need to make drop-down */}
                    <div className={styles.searchDropdown}>
                        <div className={styles.dropDown} onClick={toggleDropdown}>
                            Categories
                            <IoIosArrowDropdown className={`${styles.dropArrow} ${isDropdownActive ? styles.flip : ''}`}></IoIosArrowDropdown>

                 
                        
                            {isDropdownActive && (
                                <ul className={styles.dropdownMenu}>
                                    <li>Textbooks</li>
                                    <li>Lab Kits</li>
                                    <li>ECE Kits</li>
                                    <li>iClickers</li>
                                    <li>General Supplies</li>
                                    <li>Chargers</li>
                                </ul>
                            )}
                        </div>
                        
                        <div className={styles.searchBar}>
                            <input type="text" className={styles.search} placeholder="Search for items..."/>
                            <FaSearch className={styles.searchIcon}></FaSearch>
                        </div>
                    </div>
                    <div className={styles.navbarIcons}>
                        <FaShoppingCart className={styles.icon}/>
                        <FaUser className={styles.icon}/>
                    </div>
                </div>
    );
}

export default Header;