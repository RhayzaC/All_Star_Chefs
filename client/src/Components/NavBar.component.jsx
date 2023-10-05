import React from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import { BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid text-center">
            <div className="row w-100 align-items-center">
                <div className="col-md-4 d-flex align-items-center">
                    <BiStar size={22} className="me-2 text-warning" />
                    <BiStar size={22} className="me-2 text-warning" />
                    <BiStar size={22} className="me-2 text-warning" />
                    <h1 className="navbar-brand m-2"> All Star Chefs </h1>
                    <BiStar size={22} className="me-2 text-warning" />
                    <BiStar size={22} className="me-2 text-warning" />
                    <BiStar size={22} className="me-2 text-warning" />
                </div>
            
            <div className="col-md-8">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarColor01"
                    aria-controls="navbarColor01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">
                                    Home
                            <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">
                                    About
                            </a>
                        </li>/
                        <li className="nav-item">
                            <a className="nav-link" href="/recipes">
                                    Recipes
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="/"
                                id="topChefsDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                    Top Chefs
                            </a>
                <div
                    className="dropdown-menu"
                    aria-labelledby="topChefsDropdown"
                    >
                        <a className="dropdown-item" href="/chefs/">
                                    Top 5
                        </a>
                </div>
                </li>
            </ul>
                <form className="d-flex">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                    />
                <button
                        className="btn btn-secondary my-2 my-sm-0"
                        type="submit"
                >
                                Search
                </button>
                </form>
                    <Link className="nav-link text-light ms-3" to="/login">
                        <i className="bi bi-person"></i> Log In
                    </Link>
            </div>
        </div>
    </div>
</div>
</nav>
);
};

export default NavBar;
