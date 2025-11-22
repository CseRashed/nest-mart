import React from 'react'
import AboutWelcome from '../../Components/AboutWelcome/AboutWelcome'
import AboutProvide from '../../Components/AboutProvide/AboutProvide'
import AboutPerformance from '../../Components/AboutPerformance/AboutPerformance'
import AboutTeam from '../../Components/AboutTeam/AboutTeam'
import AboutSubscribe from '../../Components/AboutSubscribe/AboutSubscribe'

export default function About() {
  return (
    <div>
      <AboutWelcome></AboutWelcome>
      <AboutProvide></AboutProvide>
      <AboutPerformance></AboutPerformance>
      <AboutTeam></AboutTeam>
      <AboutSubscribe></AboutSubscribe>
    </div>
  )
}
