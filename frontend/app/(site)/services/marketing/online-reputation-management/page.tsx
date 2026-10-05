"use client "

import Sectors from "@/app/src/components/Homepage/Industries"
import OurServices from "@/app/src/components/services/marketing/influencer-marketing/OurServices"
import DevelopmentProcess from "@/app/src/components/services/marketing/online-reputation-management/DevelopmentProcess"
import Hero from "@/app/src/components/services/marketing/online-reputation-management/Hero"
import WhyChooseFusseMarket from "@/app/src/components/services/marketing/online-reputation-management/WhyChooseFusseMarket"

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