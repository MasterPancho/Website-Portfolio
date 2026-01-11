import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

{/*This component creates the different project cards*/}
const ProjectCard = ( {index, name, description, tags, image, source_code_link} ) => {
  return(
    <motion.div
      variants={fadeIn("up", "spring", index*0.5, 0.75)}                                  //fade them in with a spring animation, with a small delay, and a duration of 0.75s
    >
      {/*Adjust the tilting of the card + creates the section*/}
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] h-[100%] w-full flex flex-col"
        >
          {/*Creates the card design*/}
          <div className="relative w-full h-[230px]">
            
            {/*Adjust the project image to the card*/}
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            
            {/*Adjusts the GitHub logo on the top right of each card*/}
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">            {/* sets all positions to 0, then moves it to the top right*/}
              
              {/*Creates the GitHub Logo, and adjusts its position*/}
              <div
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => window.open(source_code_link, "_blank")}
              >
                {/*Get the image and adjust its size*/}
                <img 
                  src={github}
                  alt="github"
                  className="w-2/3 h-2/3 object-contain"
                />
              </div>
            </div>
          </div>

          {/*Name + description of the project*/}
          <div className="mt-5 flex-1 flex flex-col">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          {/*Tech used in each project*/}
          <div className="mt-auto flex flex-wrap gap-2 pt-4">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>     {/*Modifies the colour dynamically from index.js in the projects -> tags property*/}
                #{tag.name}
              </p>

            ))}
          </div>

      </Tilt>


    </motion.div>

  )}

{/*this component creates the work section with the title, description and the different projects*/}
const Works = () => {
  return (
    <>
      {/*Adds the title*/}
      <motion.div variants={textVariant()}>                                                 {/*Allows animation for the p tags*/} 
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      {/*Adds the description for the section*/}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {/* I recreated the classic Atari Pong game using Python and Pygame, 
          incorporating real-time interactions, collision mechanics, and an intuitive UI. I also built 
          a C program to analyze NOAA data, creating functions to compute temperature metrics and display them in a 
          structured format. Additionally, I led a team in developing a Java-based bookstore application with JavaFX, applying OOP principles 
          and implementing features like login systems, book management, and customer interfaces. 
          These experiences have strengthened my programming skills and ability to design practical, user-focused solutions. */}

          I developed a Python-based die detection application using OpenCV and Tkinter to capture and process images, applying multiple 
          recognition methods including OCR, a CNN model, and GPT-4o to identify the number on the top face of a six-sided die. 
          I also built a C program to analyze NOAA data, developing functions to compute temperature metrics and present results in a structured format. 
          In addition, I recreated the classic Atari Pong game using Python and Pygame, incorporating real-time interactions, collision mechanics, and 
          an intuitive user interface. These experiences have strengthened my programming skills and my ability to design practical, user-focused solutions.
        </motion.p>
      </div>

      {/*Invokes the different project cards*/}
      <div className="mt-20 flex flex-wrap gap-7">                                        {/*margin top = 20; arranges based on screen size, gap between them = 7*/}
        {projects.map( (project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />             //*During iteration, index=0,1,2... ; {...projects} -> All objects properties passed as props 
        ))}
      </div>
    </>
    )
}

export default SectionWrapper(Works, "work");