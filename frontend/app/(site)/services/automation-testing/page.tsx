"use client"

import WhyChooseFusseMarket from "@/app/src/components/services/automation-testing/WhyChooseFusseMarket"
import Hero from "@/app/src/components/services/automation-testing/Hero"
import Technologies from "@/app/src/components/services/Web-Development/Technologies"
import OurServices from "@/app/src/components/services/automation-testing/OurServices"
import DevelopmentProcess from "@/app/src/components/services/automation-testing/DevelopmentProcess"
import Sectors from "@/app/src/components/Homepage/Industries"

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