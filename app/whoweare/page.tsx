import WhoWeAreHero from '@/ui/nav/whoweare/Hero'
import UsSection from '@/ui/nav/whoweare/Us'
import React from 'react'

const WhoWeAre = () => {
  return (
    <div>
      <WhoWeAreHero title={'Who We Are'} desc={'Your trusted partner in education and travel solutions. We specialize in School Supervision; Providing guidance and support for students and schools, Staff Recruiting for schools and organisations, Travel Services, Work and Study Abroad Programs.'}  />
      <UsSection />
    </div>
  )
}

export default WhoWeAre
