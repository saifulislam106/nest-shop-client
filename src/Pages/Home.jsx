import Banner from "../Component/Home/Banner";
import Categories from "../Component/Home/Categories";
import ContactInfo from "../Component/Home/ContactInfo";
import Features from "../Component/Home/Features";
import ProductCards from "../Component/Home/ProductCards";
import Testimonials from "../Component/Home/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <ProductCards></ProductCards>
            <Testimonials></Testimonials>
            <Categories></Categories>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Home;