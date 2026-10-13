import VideoCard from '@/components/VideoCard'
import TeamSection from '@/components/TeamSection'
import InfoCards from '@/components/InfoCards'
import QuePretendemos from '@/components/QuePretendemos'
import ComoLoHacemos from '@/components/ComoLoHacemos'
import React from 'react'

export default function QuienesSomos() {
  return (
    <div className="snap-page">
    <VideoCard id="oTJnEjA-3Po" />

    <QuePretendemos />
    <ComoLoHacemos />

    <InfoCards />

    <div className="snap-block flex items-center">
      <TeamSection language="spanish"/>
    </div>
    </div>
  )
}