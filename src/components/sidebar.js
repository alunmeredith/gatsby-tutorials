import React from 'react'
import { Link } from "gatsby"
import sidebarStyles from "./sidebar.module.css"

const SidebarItem = props => (
    <Link to={props.to} className={sidebarStyles.sidebarItem}>{props.children}</Link>
)

export default function Sidebar() {
    return (
        <div className={sidebarStyles.sidebar}>
            <SidebarItem to="/">Home</SidebarItem>
            <SidebarItem to="/contact">Contact</SidebarItem>
            <SidebarItem to="/about" >About</SidebarItem>
        </div >
    )
}
