import React from "react"
import { Link } from "gatsby"
import Sidebar from "./sidebar"
import layoutStyle from "./layout.module.css"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

const Header = props => (
    <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            {props.children}
        </Link>
    </header>
)

const Footer = props => (
    <footer>
        <u1 className={layoutStyle.footer}>
            <ListLink to="/about">About</ListLink>
            <ListLink to="/contact">Contact</ListLink>
        </u1>
    </footer>
)

export default function Layout({ children }) {
    return (
        <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
            <Header><h3>MySweetSite</h3></Header>
            <Sidebar></Sidebar>
            {children}
            <Footer></Footer>
        </div>
    )
}