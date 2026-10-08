"use client"

import Sectors from "@/app/src/components/Homepage/Industries"
import DevelopmentProcess from "@/app/src/components/services/marketing/digital-advisory-and-consultation/DevelopmentProcess"
import Hero from "@/app/src/components/services/marketing/digital-advisory-and-consultation/Hero"
import OurServices from "@/app/src/components/services/marketing/digital-advisory-and-consultation/OurServices"
import WhyChooseFusseMarket from "@/app/src/components/services/marketing/digital-advisory-and-consultation/WhyChooseFusseMarket"

export default function page () {
    return (
        <>
        <Hero/>
        <WhyChooseFusseMarket/>
        <OurServices/>
        <DevelopmentProcess/>
        <Sectors/>
        </>
        
    )
}