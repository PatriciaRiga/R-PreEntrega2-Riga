import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="container">
            <Link to='/' className="ecoargento"><h1 className="ecoargento">Productos Ecoargento - Ver todos</h1></Link>
            <section>
                <NavLink to={"/category/Billeteras"}><button className="botonNav">Billeteras</button></NavLink>
                <NavLink to={"/category/Accesorios"}><button className="botonNav">Accesorios</button></NavLink>
                <NavLink to={"/category/Para el hogar"}><button className="botonNav">Para el hogar</button></NavLink>
                <NavLink to={"/category/Urbanos"}><button className="botonNav">Urbanos</button></NavLink>
                <NavLink to={"/Cart"}><CartWidget /></NavLink>
            </section>
        </nav>
    )
}

export default NavBar;