import React from "react"
import Link from 'next/link';
import "../styles/mobilenav.module.css"

export default function MobileNav({ menuItems }) {
  
  return (
    <div className="overlay navigation">
        <div className="overlay-content">
          {
            menuItems.map((item, index) => {
              return (
                <Link to={item.path} href={item.path} key={index}>{item.name}</Link>
              )
            })
          }
        </div>
    </div>
  )
}