"use client"

import Sectors from "@/app/src/components/Homepage/Industries"
import DevelopmentProcess from "@/app/src/components/services/hybrid-infrastructure/DevelopmentProcess"
import Hero from "@/app/src/components/services/hybrid-infrastructure/Hero"
import OurServices from "@/app/src/components/services/hybrid-infrastructure/OurServices"
import WhyChooseFusseMarket from "@/app/src/components/services/hybrid-infrastructure/WhyChooseFusseMarket"
import Technologies from "@/app/src/components/services/Web-Development/Technologies"

export default function Page () {
    return (
        <>
        <Hero/>
        <Technologies/>
        <WhyChooseFusseMarket/>
        <OurServices/>
        <DevelopmentProcess/>
        <Sectors/>
        </>
    )
}