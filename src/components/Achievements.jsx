import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { awards, certificates } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


// This component creates the card for the given array.
const AchievementCard = ( { index, name, description, image, onNext, onPrev} ) => {

  return(
    <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
      <Tilt options={{max: 10, scale:1, speed:450}}>
        
        {/* Create the card design */}
        <div className="bg-tertiary p-5 group rounded-2xl sm:w-[550px] w-full h-[550px]">   {/*For small to large screens, use 360px. for smaller, use the whole screen*/}
          
          {/* Add the details inside the card */}
          <div className="relative w-full h-[350px]">     {/*Any child element inside the group will be affected by the parent's state. Ex: If parent is hovered over, children will be affected.*/}
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            {/* Include arrows. */}
            <div className="absolute p-5 inset-0 flex items-center justify-between group-hover:opacity-80 opacity-0 transition-opacity duration-300"> {/* Center them, make them invisible until they are hovered over.*/}
        
              {/* Design of arrow when the parent is hovered over. */}
              <button 
                className="hover:bg-black bg-black bg-opacity-50 text-white py-5 px-2 rounded-full hover:bg-transition duration-300"    
                onClick={onPrev}
              >
                ◀
              </button>
              <button 
                className="hover:bg-black bg-black bg-opacity-50 text-white py-5 px-2 rounded-full hover:bg-transition duration-300"
                onClick={onNext}
              >
                ▶
              </button>
            </div>
          </div>

          {/*Name + description of the achievement*/}
          <div className="mt-5">
            <h3 className="mt-2 text-white font-bold text-[24px]">{index+1}. {name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
        </div>
      </Tilt>  
    </motion.div>
  )}

// This component allows for modularity. Choose between "certificates" array, and "awards".
const AchievementCarousel = ({data, title}) => {

  const [curIndex, setIndex] = useState(0);

  //Go to the previous certificate image
  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex-1 + data.length) % data.length) 
  }

  //Go to the next certificate image
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length); 
  }

  return(
    /*Invokes the different project cards*/
    <div>
    <AchievementCard 
      index={curIndex}
      onNext={handleNext}
      onPrev={handlePrev}
      {...data[curIndex]}
    />
  </div>
  );
};


{/*this component creates the work section with the title, description and the different achievements*/}
const Achievements = () => {

  return (
    <>
      {/*Adds the title*/}
      <motion.div variants={textVariant()}>                                                 {/*Allows animation for the p tags*/} 
        <p className={styles.sectionSubText}>Achievements</p>
        <h2 className={styles.sectionHeadText}>Certificates & Awards</h2>
      </motion.div>

      <div className="mt-10 flex justify-between flex-wrap gap-7">                  {/*margin top = 20; arranges based on screen size, gap between them = 7*/}
        <AchievementCarousel
          data={certificates}
        />

        <AchievementCarousel
          data={awards}
        />

      </div>
    </>
    )
}

export default SectionWrapper(Achievements, "");