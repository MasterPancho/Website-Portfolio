import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

//This component creates the title design of the website, as well as invoking the 3D model of the computer 
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">                                                                  {/*Fixes background image to the screen*/}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>  {/*Padding on the x axis, absolute positioning, max width of 7xl, center aligned*/}
        
        {/*Creates circle & Gradient line aligned on the left side of the screen*/}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        
        {/*Title and subtext with a predefined style in styles.js*/}
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hello, I am <span className="text-[#915eff]"> Miguel </span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}> A 3rd year Software Engineer Student 
            <br className="sm:block hidden"/> currently on an Internship at Hitachi Rail in Canada 
          </p>
        </div>
      </div>

      {/*Invokes the 3D model of the computer*/}
      <ComputersCanvas />

      {/*Creates a constantly moving circle that redirects to the "about" section*/}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">                                                                               {/*#about -> Browser interprets this as: Find element in page with id=about, then go to that location*/}                  

          {/*Creates container for the circle*/}
          <div className= "w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            
            {/*Creates moving circle*/}
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              />

          </div>
        </a>


      </div>
    </section>
  )
}

export default Hero