import Navbar from "../../shared/Navbar";
import banner from '../../assets/Rectangle 2.png'
import CustomButton from "../../shared/CustomButton";
function Header() {
    return (
        <div>
            <div className="container mx-auto">
                <Navbar />
                <div className="container mx-auto">
                    <div className="absolute grid p-2 lg:grid-cols-4 mr-20 mt-20 xl:mt-[100px]  text-white">
                        <h1 className="lg:text-[72px] sm:text-4xl md:text-5xl col-span-3 font-medium">Chicago's Southside <br /> Property Management</h1>
                        <div>
                            <p className="font-normal hidden lg:block">Explore your dream home with ease on our real estate website, where cutting-edge search features and detailed property listings bring you closer to finding the perfect match.</p>
                            <div className="w-28 mt-6">
                                <CustomButton title="More" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="w-full rounded-xl shadow-lg shadow-[gray]" src={banner} alt="logo" />
        </div>
    );
}
export default Header;