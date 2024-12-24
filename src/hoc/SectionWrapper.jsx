import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

{/*This HOC wraps the section component with a specific format*/}
const SectionWrapper = (Component, idName) =>
    function HOC() {
        return(
            <motion.section
                variants={staggerContainer()}                                           //Allows for the stagger effect
                initial="hidden"                                                        //section is predefined as hidden
                whileInView="show"                                                      //When in view, show the section
                viewport={{once: true, amount: 0.25}}                                   //Control if the effect executes once or always, and the point of the screen required for the effect to run.
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}          //Adjusts section positioning
            >
                <span className="hash-span" id={idName}>                                {/*Assigns a specific ID to the section, which then will allow different links to go to this section*/}   
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        )
}

export default SectionWrapper