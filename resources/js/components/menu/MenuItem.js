import React from 'react';
import {
    Link
  } from "react-router-dom";

export default function MenuItem({ item, onClick }) {
    return (
        <li className = {`nav-item mr-3 ${ item.checked ? 'active' : '' }`}>
            <Link  
                className="nav-link" 
                to = { item.url } 
                onClick={ onClick }
            >{ item.title }</Link>
        </li>
    )
}