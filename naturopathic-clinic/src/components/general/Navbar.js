import PropTypes from 'prop-types';
import '../../style/general.css';
import NavbarStrip from './NavbarStrip';

var logo = require('../../images/HerbLogo3.png');

const Navbar = ({companyName}) => {
    return (
        <div className="container-fluid g-0">
            <NavbarStrip></NavbarStrip>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="40" height="40" alt=""/>
                    {companyName}
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Location</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Book an Appointment</button>
                    </form>
                </div>
            </nav>
        </div>
        
    )
}

Navbar.propTypes = {
    companyName: PropTypes.string.isRequired
}

export default Navbar