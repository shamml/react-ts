import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-400 text-white items-center">
            <span>React 2022</span>
            <span>
                <Link to="/" className="mr-3">Product</Link>
                <Link to="about">About</Link>
            </span>
        </nav>
    );
};

export default Navigation;