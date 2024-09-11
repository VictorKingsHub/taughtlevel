import React from 'react'
import styles from "./Services.module.css"

const Service = [
  {label: "Software Engineering", desc: "We focus on producing high-quality, reliable, and efficient software that meets user needs and requirements."},
  {label: "Mobile App Development", desc: "Mobile app development makes websites accessible on smartphones, improving user experience and business opportunities."},
  {label: "Web Development", desc: " The ensurance of visually appealing, functional, and user-friendly online presence. "},
  {label: "Cloud Computing", desc: "Cloud Computing provides the infrastructure and platform on which software applications run."},
  {label: "Coding & Robotics", desc: "Interconect coding with the practical science of building robotic systems.  Learn, advance and Develop"},
  {label: "Training Academy", desc: "Lock in and get engaged with the professional trainers. Grow with the modern age of technology "}
]

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.serve}>
        {Service.map(each => {
          return (
            <div key={each.desc} className={styles.eachService}>
              <h3 className={styles.label}> {each.label} </h3>
              <p> {each.desc} </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services
