import React, { memo, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { FaBars } from 'react-icons/fa';
import image from "../assets/logo.png";
import "./Header.scss";

function Header({ query, dispatch }) {
    const [isToggle, setIsToggle] = useState(false)
    return (
        <>
            <header>
                <NavLink to='/' style={{ textDecoration: 'none' }} >
                    <div className="logo">
                        <img src={image} alt="" />
                    </div>
                </NavLink>

                <div className={isToggle ? 'responsive' : null}>
                    <div className='searchBar'>
                        <NavLink to={`/search/${query}`}>
                            {query.length >= 1 ?
                                <span className='searchIcon '><IoMdSearch /></span>
                                : null}
                        </NavLink>

                        <input type="text" placeholder='Search Movie tv shows... '
                            onChange={(e) => dispatch({ type: 'SET_QUERY', payload: e.target.value })}
                            value={query}
                        />
                    </div>
                </div>

                <div className="humBurger" onClick={() => setIsToggle(!isToggle)}>
                    <FaBars />
                </div>
            </header >
            <Outlet />
        </>
    )
}

export default memo(Header)