import Frame4 from '../../assets/Frame4.png'
import CustomFrame from '../../shared/CustomFrame';
import img1 from '../../assets/brixagency 1.png'
import img2 from '../../assets/Ellipse 3.png'
import Slider from 'react-slick';
import { useRef } from 'react';
function Testimonials() {
    let sliderRef = useRef(null);
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
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray", borderRadius: 100 }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray", borderRadius: 100 }}
                onClick={onClick}
            ></div>
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    return (
        <div data-aos="fade-in" className="lg:mt-40 container mx-auto">
            <div className="text-center">
                <CustomFrame title="Testimonials" img={Frame4} />
                <p className='text-5xl font-normal my-4 text-[#14161C]'>Look at what people <br /> say about us</p>
                <p className='text-[16px] font-normal mt-5 text-[#464851]'>Hear from our satisfied clients who have found their perfect homes with our help.  Their testimonials reflect <br /> our commitment to  exceptional service and a seamless home-buying experience.</p>
            </div>
            <div className='items-center lg:w-[60%] justify-center px-10 mt-28 lg:mx-[25%]'>
                <Slider
                    ref={(slider) => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >
                    <div key={1}>
                        <div className='lg:flex mx-10'>
                            <img width={80} height={100} className='w-[120px] mr-[100px] h-[120px] rounded-full' src={img1} alt='tina' />
                            <div>
                                <p className='text-[30px] font-medium'>“Navigating properties made easy, unbeatable USA options.”</p>
                                <p className="text-[16px] font-normal my-[6px] text-[#464851]">
                                    Sem egestas elit pretium turpis eu quis tristique phasellus pellentesque elementum pharetra iaculis metus pretium
                                </p>
                                <h2 className="text-lg font-medium mt-8">
                                    Mina
                                </h2>
                                <h2 className="text-lg">
                                    Chicago, IL
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div key={2}>
                        <div className='lg:flex mx-10'>
                            <img className='w-[120px] mr-[100px] h-[120px] rounded-full' src={img2} alt='Smith' />
                            <div>
                                <p className='text-[30px] font-medium'>“Navigating properties made easy, unbeatable USA options.”</p>
                                <p className="text-[16px] font-normal my-[6px] text-[#464851]">
                                    Sem egestas elit pretium turpis eu quis tristique phasellus pellentesque elementum pharetra iaculis metus pretium
                                </p>
                                <h2 className="text-lg font-medium mt-8">
                                    Andy Smith
                                </h2>
                                <h2 className="text-lg">
                                    Chicago, IL
                                </h2>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}
export default Testimonials;