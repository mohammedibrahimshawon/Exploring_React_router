import Link from "../Link/Link";
// import { FaBeer } from 'react-icons/fa';
import { TiThMenuOutline } from "react-icons/ti";

const NavBar = () => {


    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/faq", name: "FAQ" }
      ];
      
      
      
    return (
        <nav>
            {/* <FaBeer></FaBeer> */}
            <TiThMenuOutline className="text-xl">

            </TiThMenuOutline>
            <ul className="md:flex">
            {
                routes.map(route =><Link key={route.id} route={route}></Link> )
            }
            </ul>
            
        </nav>
    );
};

export default NavBar;