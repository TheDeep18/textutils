import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'



export default function Navbar(props) {
    // const bgChangePrimary = () => {
        
    //     document.body.style.backgroundColor = "#347deb"
    // }
    // const bgChangeSecondary = () => {
        
    //     document.body.style.backgroundColor = "#7d7273"
    // }
    // const bgChangeSuccess = () => {
        
    //     document.body.style.backgroundColor = "#33b025"
    // }
    // const bgChangeDanger = () => {
        
    //     document.body.style.backgroundColor = "#731017"
    // }
    // const bgChangeWarning = () => {
        
    //     document.body.style.backgroundColor = "#cedb14"
    // }
    // const bgChangeInfo = () => {
        
    //     document.body.style.backgroundColor = "#14dbd8"
    // }
    // const bgChangeDark = () => {
    //     document.body.style.backgroundColor = "#20242b"
    // }
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <Link className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/textform">{props.title}</Link> */}
                <a className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} href='#'>{props.title}</a>
                {/* <a className={`navbar-brand text-dark`} href="/">{props.title}</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <Link className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/textform">Home</Link> */}
                            <a className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" href="#">Home</a>
                        </li>
                        {/*<li className="nav-item">
                            {/* <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/about">{props.aboutText}</Link> */}
                            {/*<a className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} href="#">{props.aboutText}</a>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className={`nav-link active text-dark`} aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link text-dark`} href="/">{props.aboutText}</a>
                        </li> */}

                    </ul>
                    {/* <div className="colotBtn m-2">
                        <button type="button" onClick={bgChangePrimary}  className={`btn btn-primary m-1 ${props.mode === 'primary' ? 'primary' : 'light'}`}></button>
                        <button type="button" onClick={bgChangeSecondary} className={`btn btn-secondary m-1 ${props.mode === 'secondary'}`}></button>
                        <button type="button" onClick={bgChangeSuccess} className={`btn btn-success m-1 ${props.mode === 'success'}`}></button>
                        <button type="button" onClick={bgChangeDanger} className={`btn btn-danger m-1 ${props.mode === 'danger'}`}></button>
                        <button type="button" onClick={bgChangeWarning} className={`btn btn-warning m-1 ${props.mode === 'warning'}`}></button>
                        <button type="button" onClick={bgChangeInfo} className={`btn btn-info m-1 ${props.mode === 'info'}`}></button>
                        <button type="button" onClick={bgChangeDark} className={`btn btn-dark m-1 ${props.mode === 'dark' ? 'light' : 'light'}`}></button>
                    </div> */}

                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.protoTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
}