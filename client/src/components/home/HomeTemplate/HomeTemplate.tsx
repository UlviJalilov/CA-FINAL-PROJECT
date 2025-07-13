import AddBanner from "@/components/home/AdBanner/AdBanner"
import BannerSlider from "@/components/home/BannerSlider/BannerSlider"
import Navbar from "@/components/shared/Navbar/Navbar"
import Footer from "@/components/shared/Footer/Footer"
import SearchForm from "../SearchForm/SearchForm"


const HomeTemplate = () => {
    return (
        <>
            <main>
                <AddBanner />
                <BannerSlider />
                <Navbar />
                <SearchForm />               
            </main>
            <Footer />
        </>
    )
}

export default HomeTemplate
