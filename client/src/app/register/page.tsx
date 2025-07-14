import AdBanner from "@/components/home/AdBanner/AdBanner"
import RegisterBanner from "@/components/shared/RegisterBanner/RegisterBanner"
import RegisterForm from "@/components/shared/RegisterForm/RegisterForm"

const page = () => {
    return (
        <div>
            <AdBanner />
            <RegisterBanner />
            <main className="min-h-screen bg-white flex items-center justify-center">
                <RegisterForm />
            </main>
        </div>
    )
}

export default page
