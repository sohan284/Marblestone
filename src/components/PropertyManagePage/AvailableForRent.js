import Frame3 from '../../assets/Frame3.png'
import CustomFrame from '../../shared/CustomFrame';
import Process from '../../assets/Process.png'
import Process2 from '../../assets/Process2.png'
import CustomProcess from '../shared-components/CustomProcess';
function AvailableForRent() {
    const processDetails = [
        {
            title: '1. Search for your favorite house in your location',
            details: "Explore a wide range of homes tailored to your preferences, right in your desired neighborhood. Our listings feature detailed descriptions, high-quality images, and virtual tours to help you find the perfect match. Whether you're looking for modern apartments, cozy cottages, or spacious family homes, your dream property is just a click away!"
        },
        {
            title: '2. Make a visit appointment with one of our agents',
            details: "Schedule a personalized tour with our expert agents at your convenience. Choose your preferred date and time, and our team will ensure a seamless viewing experience, guiding you through every detail of the property. Whether it's your first visit or a follow-up, we're here to help you make the best decision for your future home."
        },
        {
            title: '3. Get your dream house in a month, or less',
            details: "With our efficient process and dedicated team, we streamline every step of the home-buying journey. From browsing to closing, we work tirelessly to ensure you move into your perfect home quickly and smoothly—often within just 30 days or less."
        }
    ]

    return (
        <div className='bg-black rounded-xl'>
            <div className="pt-28 container mx-auto">
                <div className="text-center pb-[240px]">
                    <CustomFrame title="Available for rent" img={Frame3} />
                    <p className='text-5xl font-normal my-4 text-white'>Check on all properties <br /> we have available</p>
                    <p className='text-[16px] font-normal mt-5 text-[#A4A6B0]'>Allow users to refine their search based on criteria like price range, property type, and location,<br /> enhancing the user experience by providing relevant results quickly.</p>
                </div>
                <div className='bg-white mx-[126px]'>

                </div>
            </div>
        </div>
    );
}
export default AvailableForRent;