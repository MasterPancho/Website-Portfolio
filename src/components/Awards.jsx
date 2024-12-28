import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { achievements } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const AchievementCard = ( {index, name, description, image} ) => {

  return(
    <motion.div
      variants={fadeIn("up", "spring", index*0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 10,
          scale:1,
          speed:450,
        }}
      >
        {/* Create the card design */}
        <div className="bg-tertiary p-5 rounded-2xl sm:w-[550px] w-full">   {/*For small to large screens, use 360px. for smaller, use the whole screen*/}
          
          {/* Add the details inside the card */}
          <div className="relative group w-full h-[350px]">     {/*Any child element inside the group will be affected by the parent's state. Ex: If parent is hovered over, children will be affected.*/}
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* Include arrows. */}
            <div className="absolute p-5 inset-0 flex justify-between group-hover:opacity-80 opacity-0 transition-opacity duration-300"> {/* Center them, make them invisible until they are hovered over.*/}
              
              {/* Design of arrow when the parent is hovered over. */}
              <button className="hover:bg-black bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-transition duration-300">    
                ◀
              </button>
              <button className="hover:bg-black bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-transition duration-300">
                ▶
              </button>
            </div>
          </div>
        </div>
      </Tilt>  
    </motion.div>
  )}

{/*this component creates the work section with the title, description and the different projects*/}
const Awards = () => {
  return (
    <>
      {/*Adds the title*/}
      <motion.div variants={textVariant()}>                                                 {/*Allows animation for the p tags*/} 
        <p className={styles.sectionSubText}>Achievements</p>
        <h2 className={styles.sectionHeadText}>Certificates & Awards</h2>
      </motion.div>

      {/*Invokes the different project cards*/}
      <div className="mt-20 flex flex-wrap gap-7">                                        {/*margin top = 20; arranges based on screen size, gap between them = 7*/}
        {achievements.map((achievement, index) => (
          <AchievementCard key={`achievement-${index}`} index={index} {...achievement}/>
        ))}
      </div>
    </>
    )
}

export default SectionWrapper(Awards, "");