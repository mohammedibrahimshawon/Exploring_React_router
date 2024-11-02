import PriceOption from "../PriceOption/PriceOption";
import priceOptions from './PriceOptions';


const PriceOptions = () => {

    const priceOptions =[

    


    
        {
          "id": 1,
          "name": "Basic",
          "price": 30,
          "features": [
            "Access to gym equipment",
            "1 group class per week",
            "Locker access",
            "Basic health assessment",
            "Access during staffed hours only",
            "Free Wi-Fi",
            "Personal trainer not included"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 50,
          "features": [
            "Access to gym equipment",
            "3 group classes per week",
            "Locker access",
            "1 personal training session per month",
            "Access during extended hours",
            "Free gym merchandise (one-time)",
            "Monthly fitness progress tracking",
            "Discount on fitness events"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 70,
          "features": [
            "Access to gym equipment",
            "Unlimited group classes",
            "Locker access",
            "4 personal training sessions per month",
            "Sauna access",
            "Free guest pass once a month",
            "Free entry to monthly fitness workshops",
            "Dietary and nutrition guidance",
            "Priority booking for classes",
            "Access during extended hours"
          ]
        },
        {
          "id": 4,
          "name": "VIP",
          "price": 100,
          "features": [
            "24/7 gym access",
            "Unlimited group classes",
            "Locker and towel service",
            "8 personal training sessions per month",
            "Sauna and steam room access",
            "Access to VIP lounge",
            "Free guest pass twice a month",
            "Complimentary health screening every 3 months",
            "Personalized nutrition plan",
            "Priority booking for classes and training",
            "Free gym merchandise every 6 months",
            "Complimentary massage session once a month"
          ]
        }
    ]
    
    return (
        <div>
            <h2 className='text-5xl'>Best Prices</h2>
            <div className="grid grid-cols-4 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}>

                </PriceOption>)
            }
            </div>
            
        </div>
    );
};

export default PriceOptions;