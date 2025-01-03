import React, { useState, useEffect } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { awards, certificates } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


// This component creates the card for the given array.
const AchievementCard = ( { name, description, image, onNext, onPrev} ) => {

  //Controls the image expansion when they are clicked.
  const[clickedImage, SetClick] = useState(false);
  const openImage = () => SetClick(true);
  const closeImage = () => SetClick(false);

  useEffect(() => {
    //If image is clicked, disable the scrollbar
    if(clickedImage){
      document.body.style.overflow = "hidden";
    }
    else{
      document.body.style.overflow = "auto";
    }
    // Cleanup function to restore scrolling when the component unmounts.
    return () => {
      document.body.style.overflow = "auto";
    }
  }, [clickedImage])                                  //Add this dependency so that the component runs only when the state of the dependency changes.


  return(
    <>
      <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
        <Tilt options={{max: 10, scale:1, speed:450}}>
          
          {/* Create the card design */}
          <div className="bg-tertiary p-5 rounded-2xl sm:w-[550px] w-full sm:h-[550px] h-full">   {/*For small to large screens, use 550px. for smaller, use the whole screen*/}
            
            {/* Add the details inside the card */}
            <div className="relative w-full h-[350px] cursor-pointer">     {/*Any child element inside the group will be affected by the parent's state. Ex: If parent is hovered over, children will be affected.*/}
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
                onClick={openImage}                                     //Expand the image when it is clicked
              />
              {/* Include arrows. */}
                <button 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 hover:bg-opacity-50 text-white py-3 px-3 rounded-full transition-all duration-300"
                  onClick={onPrev}
                >
                  ◀
                </button>
                <button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 hover:bg-opacity-50 text-white py-3 px-3 rounded-full transition-all duration-300"
                  onClick={onNext}
                >
                  ▶
                </button>
            </div>

            {/*Name + description of the achievement*/}
            <div className="mt-5">
              <h3 className="mt-2 text-white font-bold text-[24px]"> {name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>
          </div>
        </Tilt>  
      </motion.div>

      {/* For image enlargement */}
      {clickedImage? 
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[50]">
          <div 
            className="relative"
            onClick={(e) => e.stopPropagation()}                                    // Prevent closing on image click
          >
            <img 
              src={image}
              alt={name}
              className='lg:w-auto w-[500px] lg:h-auto h-[350px] max-w-[80vw] max-h-[70vh] rounded-2xl'
            />
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 bg-primary text-white rounded-full px-4 py-2 font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      :
      null
      }
    </>
  )}

// This component allows for modularity. Choose between "certificates" array, and "awards".
const AchievementCarousel = ({data}) => {

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