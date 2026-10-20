import logo from "../../assets/logo.png";
import { PiDownloadSimpleThin } from "react-icons/pi";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="site-navbar navbar lg:navbar-expand bg-1 fg-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Affinity" width="140" />
                </a>

                <button
                    className="btn-icon navbar-toggler"
                    type="button"
                    data-bs-toggle="drawer"
                    data-bs-target="#navbarNavMenu"
                    aria-controls="navbarNavMenu"
                    aria-label="Abrir navegacao"
                >
                    <span className="navbar-toggler-icon" aria-hidden="true"></span>
                </button>

                <dialog
                    className="drawer drawer-end"
                    id="navbarNavMenu"
                    aria-labelledby="navbarNavMenuLabel"
                >
                    <div className="drawer-header">
                        <h5 className="drawer-title" id="navbarNavMenuLabel">Menu</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="drawer"
                            aria-label="Fechar"
                        ></button>
                    </div>

                    <div className="drawer-body">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button
                                    className="btn-solid theme-primary btn-nav-menu"
                                    type="button"
                                    data-bs-toggle="menu"
                                    aria-expanded="false"
                                >
                                    Produto
                                </button>
                                <div className="menu">
                                    <a className="menu-item" href="#">Menu item 1</a>
                                    <a className="menu-item" href="#">Menu item 2</a>
                                    <a className="menu-item" href="#">Menu item 3</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn-solid theme-primary btn-nav-menu"
                                    type="button"
                                    data-bs-toggle="menu"
                                    aria-expanded="false"
                                >
                                    Descubra
                                </button>
                                <div className="menu">
                                    <a className="menu-item" href="#">Menu item 1</a>
                                    <a className="menu-item" href="#">Menu item 2</a>
                                    <a className="menu-item" href="#">Menu item 3</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn-solid theme-primary btn-nav-menu"
                                    type="button"
                                    data-bs-toggle="menu"
                                    aria-expanded="false"
                                >
                                    Ajuda
                                </button>
                                <div className="menu">
                                    <a className="menu-item" href="#">Menu item 1</a>
                                    <a className="menu-item" href="#">Menu item 2</a>
                                    <a className="menu-item" href="#">Menu item 3</a>
                                </div>
                            </li>
                        </ul>

                        <button
                            type="button"
                            id="btn-download"
                            className="btn-solid theme-success"
                        >
                            <PiDownloadSimpleThin />
                            Obtenha o aplicativo
                        </button>
                    </div>
                </dialog>
            </div>
        </nav>
    );
}

export default Navbar;
