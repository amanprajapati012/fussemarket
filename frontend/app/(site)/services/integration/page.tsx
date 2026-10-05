"use client"


import Hero from "@/app/src/components/services/integration/Hero"
import WhyChooseFusseMarket from "@/app/src/components/services/integration/WhyChooseFusseMarket"
import Technologies from "@/app/src/components/services/Web-Development/Technologies"
import DevelopmentProcess from "@/app/src/components/services/integration/DevelopmentProcess"
import Sectors from "@/app/src/components/Homepage/Industries"
import OurServices from "@/app/src/components/services/integration/OurServices"

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