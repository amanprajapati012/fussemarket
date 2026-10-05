"use client"

import Sectors from "@/app/src/components/Homepage/Industries"
import DevelopmentProcess from "@/app/src/components/services/on-premises-infrastructure/DevelopmentProcess"
import Hero from "@/app/src/components/services/on-premises-infrastructure/Hero"
import OurServices from "@/app/src/components/services/on-premises-infrastructure/OurServices"
import WhyChooseFusseMarket from "@/app/src/components/services/on-premises-infrastructure/WhyChooseFusseMarket"
import Technologies from "@/app/src/components/services/Web-Development/Technologies"

export default function page () {
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