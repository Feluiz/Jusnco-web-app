import ServiceBar from './ServiceBar/ServiceBar';
import HomeGallery from './HomeGallery/HomeGallery';
import AboutSection from './AboutSection/AboutSection';
import InstagramSection from './InstagramSection/InstagramSection';
import ContactSection from './ContactSection/ContactSection';

const Home = (data) => {
    const selectTab = data.props;

    return (
        <>
            <ServiceBar onClickedTab={selectTab}/>
            <HomeGallery />
            <AboutSection />
            <InstagramSection />
            <ContactSection />
        </>
    )
};

export default Home;