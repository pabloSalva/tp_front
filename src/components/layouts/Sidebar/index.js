import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./styles.scss";

const Sidebar = () => {
    return <div className="sidebar-container" >
        <React.Fragment>
            <div className="menu-title">PRODUCTOS</div>
            <div className="menu-submenu">
                <NavLink className="item" activeClassName="active-item" to="/productos">
                    <div className="item-title">Listar</div>
                </NavLink>
            </div>
            <div className="menu-submenu">
                <NavLink className="item" activeClassName="active-item" to="/crear_producto">
                    <div className="item-title">Crear</div>
                </NavLink>
            </div>
            <hr></hr>
            <div className="menu-title">CATEGORIAS</div>
            <div className="menu-submenu">
                <NavLink className="item" activeClassName="active-item" to="/categorias">
                    <div className="item-title">Listar</div>
                </NavLink>
            </div>
            <div className="menu-submenu">
                <NavLink className="item" activeClassName="active-item" to="/crear_categoria">
                    <div className="item-title">Crear</div>
                </NavLink>
            </div>
            <hr></hr>
        </React.Fragment>
    </div>
}

export default Sidebar;
