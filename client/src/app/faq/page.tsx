import React from 'react'
import FaqBanner from '@/components/shared/FaqBreadCrumb/banner'
import FaqAccordion from '@/components/shared/FaqAccordion/FaqAccordion'
const page = () => {
    return (
        <div>

            <FaqBanner />
            <main className="min-h-screen bg-white flex items-center justify-center">
                <FaqAccordion />
            </main>
        </div>
    )
}

export default page
