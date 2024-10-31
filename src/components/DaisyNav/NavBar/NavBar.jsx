import { useState } from "react";
import Link from "../Link/Link";
// import { FaBeer } from 'react-icons/fa';
import { TiThMenuOutline, } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";


const NavBar = () => {
    const[open,setOpen] = useState(false)


    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/faq", name: "FAQ" }
      ];
      
      
      
    return (
        <nav className="text-black bg-yellow-300 ">
            {/* <FaBeer></FaBeer> */}
            <div className="md:hidden" onClick={() =>setOpen(!open)}>
                {
                    open == true? <AiOutlineClose></AiOutlineClose>: <TiThMenuOutline></TiThMenuOutline>
                }
             {/* <TiThMenuOutline className="text-xl md:hidden"></TiThMenuOutline> */}
            </div>
            <ul className="md:flex absolute bg-yellow-300 ">
            {
                routes.map(route =><Link key={route.id} route={route}></Link> )
            }
            </ul>
            
        </nav>
    );
};

export default NavBar;