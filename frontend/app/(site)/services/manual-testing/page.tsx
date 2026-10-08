"use client"

import Hero from "@/app/src/components/services/manual-testing/Hero"
import DevelopmentProcess from "@/app/src/components/services/manual-testing/DevelopmentProcess"
import OurServices from "@/app/src/components/services/manual-testing/OurServices"
import WhyChooseFusseMarket from "@/app/src/components/services/manual-testing/WhyChooseFusseMarket"
import Technologies from "@/app/src/components/services/Web-Development/Technologies"
import Sectors from "@/app/src/components/Homepage/Industries"



export default function page (){
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