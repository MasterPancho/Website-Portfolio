import { useEffect, useState } from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { environments, technologies } from '../constants';
import { styles } from '../styles';

{/*This component invokes the different balls into the section*/}
const Tech = () => {

  const[isMobile, setIsMobile] = useState(false);                //State variable to check if the screen is mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');             //Adds listener for changes in the screen size
    
    setIsMobile(mediaQuery.matches);                                        //Set the initial value of 'isMobile' to true or false if mediaQuery matches the screen size restriction

    const handleMediaQueryChange = (event) => {                             //Callback function for handling media query changes
      setIsMobile(event.matches);                                   
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);          //Adds the callback function as a listener for 'change' in the media query; updates to mobile if required.

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);     //Removes the listener when the component is unmounted
    }
  }, [])

  return (
    <div className="flex flex-row flex-wrap xl:justify-between justify-center gap-10">
      <div className="flex flex-col items-center gap-5">
        <h1 className={`${styles.sectionHeadText}`}>Technical Skills</h1>
        <div className="flex flex-row flex-wrap justify-center gap-12 w-[450px]">
          {technologies.map((technology) => (
            isMobile? 
              (<div className="w-24 h-24 bg-white p-2 rounded-full flex items-center justify-center" key={technology.name}>
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-14 w-14 object-contain"
              />
              </div>)
              :
              (<div className="w-28 h-28" key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>)
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-5">
        <h1 className={`${styles.sectionHeadText} !text-[#915eff] text-[#915eff]`}>Environments</h1>
        <div className="flex flex-row flex-wrap justify-center gap-12 w-[450px]">
        {environments.map((environment) => (
          <div className="w-24 h-24 bg-white p-2 rounded-full flex items-center justify-center" key={environment.name}>
            <img
              src={environment.icon}
              alt={environment.name}
              className="h-14 w-14 object-contain"
            />
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "");