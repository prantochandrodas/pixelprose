import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import logo from '../../assets/logo.png';
import { FaBars } from "react-icons/fa";
import userimg from '../../assets/dropdown/72-729756_how-to-add-a-new-user-to-your.png'
// import edit from '../../assets/dropdown/edit.png'
import logout from '../../assets/dropdown/images-removebg-preview.png'
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
                navigate('/signup')
            })
    }
    return (
        <header id="head">
        <input type="checkbox" name id="chk1" />
        <div className="logo"><img src={logo} className="w-[140px]" alt="" /></div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="allColleges">Colleges</Link></li>
            <li><Link to="/admission">Admission</Link></li>
            <li><Link to={`/myCollege/${user?.email}`}>My College</Link></li>
        </ul>

        {/* user photo  */}
        {
            user?.uid ? <Link to={`/user/${user?.email}`} className="lg:hidden md:hidden flex lg:mr-8 mr-4">
                <img className="object-cover w-12 ring ring-blue-500 h-12 rounded-full" src={user?.photoURL} alt="" />
            </Link> : <></>
        }


        {
            user?.uid ? <div className="lg:flex hidden lg:mr-8 mr-4" onClick={() => { setOpen(!open) }}>
                <img ref={imgRef} className="object-cover w-12 ring ring-blue-500 h-12 rounded-full" src={user?.photoURL} alt="" />
            </div> : <div>
            <ul>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
            </div>
        }

        <div ref={menuRef} className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
            <div className="flex justify-center items-center py-4">
                <div className="lg:flex hidden lg:mr-8 mr-4">
                    <img ref={imgRef} className="object-cover w-12 ring ring-blue-500 h-12 rounded-full" src={user?.photoURL} alt="" />
                </div>
                <div>
                    <p className="font-bold robotofont">{user?.displayName}</p>
                    <p className="robotofont">{user?.email}</p>
                </div>
            </div>
            <ul>
                <Link to={`/user/${user?.email}`}>
                    <li className='dropdownItem'>
                        <img className="w-[100px] h-[100px]" src={userimg} />
                        <Link to={`/user/${user?.email}`} className="text-[14px] "> My Profile </Link>
                    </li>
                </Link>

                {/* <li className='dropdownItem'>
                    <img src={edit} />
                    <a className="text-[14px] "> Edit Profile</a>
                </li> */}
                <li className='dropdownItem' onClick={handelLogout}>
                    <img src={logout} />
                    <a className="text-[14px] "> Logout </a>
                </li>
            </ul>
        </div>
        <div className="menu">
            <label htmlFor="chk1">
                <FaBars />
            </label>
        </div>
    </header>
    );
};

export default Navbar;