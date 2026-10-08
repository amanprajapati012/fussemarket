"use client"

import Sectors from "@/app/src/components/Homepage/Industries"
import DevelopmentProcess from "@/app/src/components/services/marketing/improved-roi/DevelopmentProcess"
import Hero from "@/app/src/components/services/marketing/improved-roi/Hero"
import OurServices from "@/app/src/components/services/marketing/improved-roi/OurServices"
import WhyChooseFusseMarket from "@/app/src/components/services/marketing/improved-roi/WhyChooseFusseMarket"

export default function page () {
    return (
        <>
        <Hero/>
        <WhyChooseFusseMarket/>
        <OurServices/>
        <DevelopmentProcess/>
        <Sectors/>
        </>
    )
}