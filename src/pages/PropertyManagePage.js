import Header from "../components/HomePage/Header";
import AvailableForRent from "../components/PropertyManagePage/AvailableForRent";
import Properties from "../components/PropertyManagePage/Properties";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

function PropertyManagePage() {
    return (
        <div className="p-3">
            <Navbar />
            <AvailableForRent />
            <Properties />
            <Footer />
        </div>
    )
}
export default PropertyManagePage;