"use client"

import WhyChooseFusseMarket from "@/app/src/components/services/Customer-Support/WhyChooseFusseMarket"
import Hero from "@/app/src/components/services/Customer-Support/Hero"
import Technologies from "@/app/src/components/services/Web-Development/Technologies"
import OurServices from "@/app/src/components/services/Customer-Support/OurServices"
import DevelopmentProcess from "@/app/src/components/services/Customer-Support/DevelopmentProcess"
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