import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

{/* This component creates the different feedback cards */}
const FeedbackCard = ({index, testimonial, name, designation, company, image}) => (
  <motion.div
    variants={fadeIn("", "spring", index*0.5, 0.75)}                                      //fade effect
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"                         //Card Design 
  >
    <p className="text-white font-black text-[48px]">"</p>

    {/*Adjusts card margin and quote design*/}
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]"> {testimonial}</p>             {/*Modifies the testimonial sentence design*/}
      
      {/*Adjusts the person section inside the card*/}
      <div className="mt-7 flex justify-between items-center gap-1">                     
        
        {/*Design for name, "@", and company designation*/}
        <div className="flex-1 flex flex-col">
          <p  className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
        
        {/*Person's photo*/}
        <img
          src={image}
          alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
          />
      </div>
    </div>


  </motion.div>

)

{/*This component generates the feedback section with the different quotations inside cards*/}
const Feedbacks = () => {
  return (
    //Creates the testimonials section with a dark background
    <div className="mt-12 bg-black-100 rounded-[20px]">
      
      {/* Uses the same design protocol as in the other sections to create the title */}
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>           {/*Adds a lighter background*/}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What Others Say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>

      {/* Adds the different feedback cards */}
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>              {/*-mt-20 -> cards overlap on the previous "div"*/}
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial}/>             //{...testimonial} -> Take all properties in testimonials and make them props
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")