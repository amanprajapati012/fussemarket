"use client"

import WhyChooseFusseMarket from "@/app/src/components/services/business-technology-consulting/WhyChooseFusseMarket"
import Hero from "@/app/src/components/services/business-technology-consulting/Hero"
import Technologies from "@/app/src/components/services/Web-Development/Technologies"
import OurServices from "@/app/src/components/services/business-technology-consulting/OurServices"
import DevelopmentProcess from "@/app/src/components/services/business-technology-consulting/DevelopmentProcess"

export default function page () {
    return (
        <>
        <Hero/>
        <Technologies/>
        <WhyChooseFusseMarket/>
        <OurServices/>
        <DevelopmentProcess/>
        </>
    )
}