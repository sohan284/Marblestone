import Frame4 from '../../assets/Frame4.png'
import CustomFrame from '../../shared/CustomFrame';
import img1 from '../../assets/brixagency 1.png'
import img2 from '../../assets/Ellipse 3.png'
import Slider from 'react-slick';
import { useRef } from 'react';
function Testimonials() {
    let sliderRef = useRef(null);

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