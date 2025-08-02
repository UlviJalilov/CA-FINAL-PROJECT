import AdBanner from "@/components/home/AdBanner/AdBanner"
import LoginBanner from "@/components/shared/LoginBanner/LoginBanner"
import LoginForm from "@/components/shared/LoginForm/LoginForm"
const page = () => {
  return (
    <div>
      <AdBanner />
      <LoginBanner />
     
        <LoginForm />
      
    </div>
  )
}

export default page
