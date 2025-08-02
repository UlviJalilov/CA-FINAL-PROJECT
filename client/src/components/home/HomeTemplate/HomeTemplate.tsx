
import BannerSlider from "@/components/home/BannerSlider/BannerSlider"
import Navbar from "@/components/shared/Navbar/Navbar"
import SearchForm from "../SearchForm/SearchForm"
import HeroSection from "@/sections/home/Hero/HeroSection"
import Collections from "../Collections/Collections"
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts"
import TestimonialSlider from "@/sections/home/Testimonial/HomeTestimonial"
import TabbedProductSlider from "../TabbedProductSlider/TabbedProductSlider"
import DriveHighlights from "@/sections/home/DriveHighlights/DriveHighlights"
import WhyChooseUs from "@/sections/home/WhyChooseUs/WhyChooseUs"
import LatestBlog from "@/sections/home/LatestBlog/LatestBlog"
import Brands from "@/sections/home/Brands/Brands"
import SocialFeeds from "@/sections/home/SocialFeeds/SocialFeeds"
import NewsSubscription from "@/sections/home/NewsSubscription/NewsSubscription"
import ScrollToTopButton from "@/components/shared/ScrollToTopButton/ScrollToTopButton"
const HomeTemplate = () => {

  return (
    <>
      <main>
       
        <BannerSlider />
        <Navbar />
        <SearchForm />
        <HeroSection />
        <Collections />
        <FeaturedProducts />
        <TestimonialSlider />
        <TabbedProductSlider  />
        <DriveHighlights />
        <WhyChooseUs />
        <LatestBlog />
        <Brands />
        <SocialFeeds />
        <NewsSubscription />
        <ScrollToTopButton />
      
      </main>

    </>
  );
};

export default HomeTemplate;
