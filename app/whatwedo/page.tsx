import CentralText from '@/ui/nav/welcome/CentralText'
import Services from '@/ui/nav/welcome/Services'
import Hero from '@/ui/nav/whoweare/Hero'
import React from 'react'

const WhatWeDo = () => {
  return (
    <div>
      <Hero title={'What We Do'} desc={'We help our clients achieve their business goals through customized solutions and various web-marketing programs designed to maximize return on investment.'} />
      <Services  />
    </div>
  )
}

export default WhatWeDo
