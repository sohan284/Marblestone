
import { useRef } from 'react';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import img1 from '../../assets/brixagency 1.png'
import img2 from '../../assets/Ellipse 3.png'
function ProjectCustomer() {
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
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div data-aos="fade-in" className="lg:mt-20 mt-12 container mx-auto">
      <div className="flex justify-center">
        <div className="mt-6 grid w-full lg:grid-cols-2  gap-20">
          <div className='grid lg:grid-cols-2 gap-10'>
            <div>
              <p className='text-[18px] font-medium'>Our Project</p>
              <h1 className="text-7xl font-medium"><CountUp end={10} delay={1} />k<span className="text-gray-400">+</span></h1>

              <p className='text-[16px] mt-5 text-[#464851]'>We have successfully managed 10,000 projects, showcasing our extensive experience and ability to handle diverse client needs with precision</p>
            </div>
            <div>
              <p className='text-[18px] font-medium'>Our Customer</p>
              <h1 className="text-7xl font-medium"><CountUp end={200} delay={1} /><span className="text-gray-400">k</span></h1>

              <p className='text-[16px] mt-5 text-[#464851]'>Our commitment to excellence is reflected in our service to over 200,000 customers, each benefiting from our dedicated support and high-quality solutions</p>
            </div>
            <div>

            </div>
          </div>
          <div className='hidden lg:block'>
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div key={1}>
                <div className='flex mx-10'>
                  <img width={80} height={100} className='w-[90px] mr-[22px] h-[90px] rounded-full' src={img1} alt='tina' />
                  <div>
                    <p className='text-lg font-medium'>"If you want convenience, call Tina"</p>
                    <p className="text-[16px] font-normal my-[6px] text-[#464851]">
                      With a proactive attitude and a keen eye for detail, <br /> Alex consistently goes above and beyond expectations.
                    </p>
                    <h2 className="text-lg font-medium">
                      Chicago, IL
                    </h2>
                  </div>
                </div>
              </div>
              <div key={2}>
                <div className='flex mx-10'>
                  <img width={80} height={100} className='w-[90px] mr-[22px] h-[90px] rounded-full' src={img2} alt='Smith' />
                  <div>
                    <p className='text-lg font-medium'>"If you want convenience, call Smith"</p>
                    <p className="text-[16px] font-normal my-[6px] text-[#464851]">
                      Their reliability and innovative ideas drive <br /> projects forward and elevate team performance
                    </p>
                    <h2 className="text-lg font-medium">
                      Chicago, IL
                    </h2>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCustomer;