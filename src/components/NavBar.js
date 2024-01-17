import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
    render() {
        let mode = this.props.mode;
        let changeTheme = this.props.changeTheme;
        return (
            <div>
                {/* <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}> */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsMania</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                            </ul>
                            {/* <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}> */}
                            <div className="form-check form-switch text-light">
                                <input className="form-check-input" onClick={changeTheme} type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {mode === "light" ? "Dark" : "Light"} Mode</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}