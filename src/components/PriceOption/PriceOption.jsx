import PropTypes from "prop-types";

const PriceOption = ({option}) => {
    const {name,price,features}= option;
    return (
        <div className="bg-blue-700 rounded-md p-4 text-yellow-50">
            <h2>
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="test-3xl">Taka </span>
            </h2>
            <h4 className="text-3xl text-center my-8">{name}</h4>
            
            
        </div>
    );
};

PriceOption.protoTypes= {
    option: PropTypes.object
}

export default PriceOption;