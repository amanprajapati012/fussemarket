"use client"

import Sectors from "@/app/src/components/Homepage/Industries"
import DevelopmentProcess from "@/app/src/components/services/migration/DevelopmentProcess"
import Hero from "@/app/src/components/services/migration/Hero"
import OurServices from "@/app/src/components/services/migration/OurServices"
import WhyChooseFusseMarket from "@/app/src/components/services/migration/WhyChooseFusseMarket"
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