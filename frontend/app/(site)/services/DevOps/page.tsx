"use client"

import Sectors from "@/app/src/components/Homepage/Industries"
import DevelopmentProcess from "@/app/src/components/services/DevOps/DevelopmentProcess"
import Hero from "@/app/src/components/services/DevOps/Hero"
import OurServices from "@/app/src/components/services/DevOps/OurServices"
import WhyChooseFusseMarket from "@/app/src/components/services/DevOps/WhyChooseFusseMarket"
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