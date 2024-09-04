import AboutUs from "../components/HomePage/AboutUs";
import Header from "../components/HomePage/Header";
import OurBlogs from "../components/HomePage/OurBlogs";
import OurProcess from "../components/HomePage/OurProcess";
import ProjectCustomer from "../components/HomePage/ProjectCustomer";
import SeenOn from "../components/HomePage/SeenOn";
import Testimonials from "../components/HomePage/Testimonials";
import WhyUs from "../components/HomePage/WhyUs";
import Footer from "../shared/Footer";

function HomePage() {
    return (
        <div className="p-3 rounded">
            <Header />
            <SeenOn />
            <ProjectCustomer />
            <AboutUs />
            <WhyUs />
            <OurProcess />
            <Testimonials />
            <OurBlogs />
            <Footer />
        </div>
    )
}
export default HomePage;