import { motion } from 'framer-motion';
import { styles } from '../styles';
import portrait from '../assets/portrait.png';

//This component creates the title design of the website, a self-portrait, and a moving circle that redirects to the "about" section
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">                                                                  {/*Fixes background image to the screen*/}
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>  {/*Padding on the x axis, absolute positioning, max width of 7xl, center aligned*/}
        
        {/*Creates circle & Gradient line aligned on the left side of the screen*/}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        
        {/*Title and subtext with a predefined style in styles.js*/}
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hello, I am <span className="text-[#915eff]"> Miguel </span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}> A third-year Software Engineering student,
            <br className="sm:block hidden"/>  currently interning at Hitachi Rail in Canada. 
          </p>
        </div>
      </div>

      {/*Adds self-portrait*/}
      <div className="absolute inset-x-0 bottom-0 flex justify-center items-end">
        <img
          src={portrait}
          alt="me"
          className="2xl:w-[33%] xl:w-[30%] lg:w-[27%] w-[500px]"
        />
      </div>

      {/*Creates a constantly moving circle that redirects to the "about" section*/}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
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