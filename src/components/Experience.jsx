import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import{ styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

{/*This component creates different cards that display the experiences with a respective image*/}
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color:'#fff'}}               //Changes the background colour of the card
    contentArrowStyle={{ borderRight: '7px solid  #232631'}}          //Changes the colour of the arrow
    date={experience.date}                                              //Adds date from the experience                
    iconStyle={{ background: experience.iconBg }}                       //Backgorund colour determined by icon property in experience
    
    //Modifies the icon to display the company logo
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    {/* Adds Title and description for the different work experiences */}
    <div>

      {/* Position */}
      <h3 className="text-white text-[24px] font-bold">
        {experience.title}
      </h3>

      {/* Company Name */}
      <p 
      className="text-secondary text-[16px] font-semibold"
      style={{margin: 0}}
      >
        {experience.company_name}
      </p>
    </div>

    {/* Experience Description */}
    <ul className="mt-5 list-disc ml-5 space-y-2">                            {/*Adds bullet points to the list*/}
      {experience.points.map((point, index) => (                              //Iterates through the points array to make each one a bullet point
        <li 
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"          //Adjusts the text size and spacing
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

{/*This component populates the "experience" section with my work experience */}
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>                                   {/*Allows animation for the p tags*/} 
        <p className={styles.sectionSubText}>What I have Done So Far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />          //Could also use {...experience} instead, but parameter in the ExperienceCard function would change
          ))}

        </VerticalTimeline>


      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience")