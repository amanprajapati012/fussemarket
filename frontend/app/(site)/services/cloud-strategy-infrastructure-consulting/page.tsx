"use client "

import Sectors from "@/app/src/components/Homepage/Industries"
import DevelopmentProcess from "@/app/src/components/services/cloud-strategy-infrastructure-consulting/DevelopmentProcess"
import CloudInfrastructureSupportServicesPage from "@/app/src/components/services/cloud-strategy-infrastructure-consulting/DevelopmentProcess"
import Hero from "@/app/src/components/services/cloud-strategy-infrastructure-consulting/Hero"
import OurServices from "@/app/src/components/services/cloud-strategy-infrastructure-consulting/OurServices"
import WhyChooseFusseMarket from "@/app/src/components/services/cloud-strategy-infrastructure-consulting/WhyChooseFusseMarket"

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