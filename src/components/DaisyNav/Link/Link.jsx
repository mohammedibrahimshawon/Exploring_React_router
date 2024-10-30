
import PropTypes from 'prop-types'; // ES6
const Link = ({route}) => {
    return (
        <li className="mr-3" >
            <a href={`route.path`}>{route.name}</a>
        </li>
    );
};


Link.prototypes = {
    route: PropTypes.object
}
export default Link;