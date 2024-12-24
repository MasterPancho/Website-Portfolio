import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

{/*This component creates different cards that display the services with a respective image*/}
const ServiceCard = ({ index, title, icon }) => {
  return(
    
    //Adds tilting effect
    <Tilt className="xs:w-[250px] w-full">                  
      <motion.div 
        variants={fadeIn("right", "spring", 0.5*index, 0.7)}                            //Allows for one card to appear after the other
        className="w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card"       //Adds the colour border
      >
        <div
          options={{                                                                  //Adjusts the tilt options
            max:45,
            scale:1,
            speed:450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"   //Adds dark colour, adjusts and centers images and text
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>                          {/*Adds images + adjusts its size*/}          
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>                   {/*Adds text + adjusts its size*/}     
        </div>
      </motion.div>
    </Tilt>
  )
}

{/*This component populates the "about" section with my overview and cards with key attributes */}
const About = () => {
  return (
    <>
      {/*Allows for the text motion animation*/}   
      <motion.div variants={textVariant()}>                              
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      {/*Allows for the text motion animation*/}   
      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}                                                 //Allows for the text to appear after the title               
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"              //Adjusts the text size and line height
      >
        I am a Software Engineer with a passion for _______ and solving complex problems.  
        I have a strong foundation in computer science and software engineering principles. 
        I am a quick learner and a team player who is always eager to learn new things and work on challenging projects.
      </motion.p>
      
      {/*Invokes the cards*/}
      <div className="mt-20 flex flex-wrap gap-10">                                     {/*Adjusts the space between the cards. Wraps on the next row if they don't fit*/}
        {services.map((service, index) => (                                             //Iterates through the services array to make each one a ServiceCard
          <ServiceCard key={service.title} index={index} {...service}/>                 //Spread operator (...) allows to pass all properties of an object as individual props (instead of doing title=service.title icon=service.icon)
        ))}
      </div> 
    </>
  );
};

export default SectionWrapper(About, "about");