import Banner from "../Component/Home/Banner";
import ContactInfo from "../Component/Home/ContactInfo";
import ProductCards from "../Component/Home/ProductCards";
import Faqs from "./Faqs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCards></ProductCards>
            <Faqs></Faqs>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Home;