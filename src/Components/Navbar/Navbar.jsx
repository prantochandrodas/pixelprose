import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import logo from '../../assets/logo.png';
import { FaBars } from "react-icons/fa";
import './Navbar.css'
const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    let menuRef = useRef();
    let imgRef = useRef();
    window.addEventListener('click', (e) => {
        if (e.target !== menuRef.current && e.target !== imgRef.current) {
            setOpen(false)
        }
    })
    const handelLogout = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
    }
    return (
        <header id="head">
        <input type="checkbox" name id="chk1" />
        <div className="logo"><img src={logo} className="w-[140px]" alt="" /></div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/allbus">All Bus</Link></li>
            <li><Link to="/mybookings">My Bookings</Link></li>
        </ul>

        {/* user photo  */}
        {
            user?.uid ? <Link to={`/user/${user?.email}`} className="lg:hidden md:hidden flex lg:mr-8 mr-4">
                <img className="object-cover w-12 ring ring-blue-500 h-12 rounded-full" src={user?.photoURL} alt="" />
            </Link> : <></>
        }


        {
            user?.uid ? <div className="lg:flex lg:items-center hidden lg:mr-8 mr-4" onClick={() => { setOpen(!open) }}>
                    <button onClick={handelLogout} className="bg-[#0245ab] text-white mr-4 px-6 rounded-[2px] h-[40px]">Logout</button>
                <img  className="object-cover w-12 ring ring-blue-500 h-12 rounded-full" src={user?.photoURL} alt="" />
            </div> : <div>
            <ul>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
            </div>
        }

      
        <div className="menu">
            <label htmlFor="chk1">
                <FaBars />
            </label>
        </div>
    </header>
    );
};

export default Navbar;