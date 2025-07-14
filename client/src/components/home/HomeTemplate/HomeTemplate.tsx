import AddBanner from "@/components/home/AdBanner/AdBanner"
import BannerSlider from "@/components/home/BannerSlider/BannerSlider"
import Navbar from "@/components/shared/Navbar/Navbar"
import Footer from "@/components/shared/Footer/Footer"
import SearchForm from "../SearchForm/SearchForm"
import HeroSection from "@/sections/home/HeroSection/HeroSection"
import Collections from "../Collections/Collections"


const HomeTemplate = () => {
    return (
        <>
            <main>
                <AddBanner />
                <BannerSlider />
                <Navbar />
                <SearchForm />
                <HeroSection />
                <Collections />
            </main>
            <Footer />
        </>
    )
}

export default HomeTemplate
