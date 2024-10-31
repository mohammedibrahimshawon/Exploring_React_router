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
        <nav className="text-black p-6 bg-yellow-300 ">
            {/* <FaBeer></FaBeer> */}
            <div className="md:hidden" onClick={() =>setOpen(!open)}>
                {
                    open == true? <AiOutlineClose></AiOutlineClose>: <TiThMenuOutline></TiThMenuOutline>
                }
             {/* <TiThMenuOutline className="text-xl md:hidden"></TiThMenuOutline> */}
            </div>
            <ul className={`md:flex duration-1000  absolute md:static
                 ${open ? 'top-12': '-top-60'}
                

                 bg-yellow-300 px-6 shadow-lg`}>
            {
                routes.map(route =><Link key={route.id} route={route}></Link> )
            }
            </ul>
            
        </nav>
    );
};

export default NavBar;