"use client"

import Hero from "@/app/src/components/services/application-support-and-management/Hero"
import WhyChooseFusseMarket from "@/app/src/components/services/application-support-and-management/WhyChooseFusseMarket"
import Technologies from "@/app/src/components/services/Web-Development/Technologies"
import OurServices from "@/app/src/components/services/application-support-and-management/OurServices"
import DevelopmentProcess from "@/app/src/components/services/application-support-and-management/DevelopmentProcess"
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