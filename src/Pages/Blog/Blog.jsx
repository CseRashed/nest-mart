import React from 'react'
import BlogWelcome from '../../Components/BlogWelcome/BlogWelcome'
import BlogProvide from '../../Components/BlogProvide/BlogProvide'
import BlogPerformance from '../../Components/BlogPerformance/BlogPerformance'
import BlogTeam from '../../Components/BlogTeam/BlogTeam'

export default function Blog() {
  return (
    <div>
      <BlogWelcome></BlogWelcome>
      <BlogProvide></BlogProvide>
      <BlogPerformance></BlogPerformance>
      <BlogTeam></BlogTeam>
    </div>
  )
}
