import Banner from "../Component/Home/Banner";
import ContactInfo from "../Component/Home/ContactInfo";
import ProductCards from "../Component/Home/ProductCards";
import Testimonials from "../Component/Home/Testimonials";
import Faqs from "./Faqs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCards></ProductCards>
            <Testimonials></Testimonials>
            <Faqs></Faqs>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Home;