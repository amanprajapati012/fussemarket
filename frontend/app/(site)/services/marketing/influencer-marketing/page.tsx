"use client"

import Sectors from "@/app/src/components/Homepage/Industries"
import DevelopmentProcess from "@/app/src/components/services/marketing/influencer-marketing/DevelopmentProcess"
import Hero from "@/app/src/components/services/marketing/influencer-marketing/Hero"
import OurServices from "@/app/src/components/services/marketing/influencer-marketing/OurServices"
import WhyChooseFusseMarket from "@/app/src/components/services/marketing/influencer-marketing/WhyChooseFusseMarket"

export default function page() {
    return (
        <>
            <Hero />
            <WhyChooseFusseMarket/>
            <OurServices/>
            <DevelopmentProcess/>
            <Sectors/>
            
        </>
    )
}