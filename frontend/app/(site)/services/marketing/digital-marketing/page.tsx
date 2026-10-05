"use client "

import DevelopmentProcess from "@/app/src/components/services/marketing/digital-marketing/DevelopmentProcess"
import Hero from "@/app/src/components/services/marketing/digital-marketing/Hero"
import OurServices from "@/app/src/components/services/marketing/digital-marketing/OurServices"
import WhyChooseFusseMarket from "@/app/src/components/services/marketing/digital-marketing/WhyChooseMarketing"

export default function page () {
    return (
        <>
        <Hero/>
        <WhyChooseFusseMarket/>
        <OurServices/>
        <DevelopmentProcess/>
        
        </>
    )
}