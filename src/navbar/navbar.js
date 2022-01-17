import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faVoicemail, faHeart} from "@fortawesome/free-solid-svg-icons";
import {faYoutube, faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {

    const countFav = useSelector((state)=>state.count);
    console.log(countFav);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/fav">Favaurites</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link className="nav-link active" aria-current="page" to="/search">Search</Link>
                            <Link className="nav-link active" to="/form">Register</Link>
                            <p className='icon-div'><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> </p>
                            <p className='icon-div2'>{countFav}</p>
                        </form>
                    </div>
                </div> */}
            </nav>
        </>
    );
}