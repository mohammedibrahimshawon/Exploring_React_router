
import PropTypes from 'prop-types'; // ES6
const Link = ({route}) => {
    return (
        <li className="mr-3 px-6 hover:bg-yellow-500" >
            <a href={`route.path`}>{route.name}</a>
        </li>
    );
};


Link.prototypes = {
    route: PropTypes.object
}
export default Link;