import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { environments, technologies } from '../constants';
import { styles } from '../styles';

{/*This component invokes the different balls into the section*/}
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap xl:justify-between justify-center gap-10">
      <div className="flex flex-col items-center gap-5">
        <h1 className={`${styles.sectionHeadText}`}>Technical<span> Skills</span></h1>
        <div className="flex flex-row flex-wrap justify-center gap-12 w-[450px]">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-5">
        <h1 className={`${styles.sectionHeadText} !text-[#915eff] text-[#915eff]`}>Environments</h1>
        <div className="flex flex-row flex-wrap justify-center gap-12 w-[450px]">
        {environments.map((environment) => (
          <div className="w-28 h-28" key={environment.name}>
            <BallCanvas icon={environment.icon}/>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "");