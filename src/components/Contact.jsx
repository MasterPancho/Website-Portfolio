import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

//Creates an email and sends it to mine.
const Contact = () => {

  const formRef = useRef();                                   //A reference to the form object
  const [form, setForm] = useState({
    name: '',
    email:'',
    message:'',
  });
  const [loading, setLoading] = useState(false);                                //Controls the state for submitting a message.

  //Updates the form state as the user writes on the box. "e" has the information from the section were the event was triggered. Ex: After typing: form={name:'Dave' email:'d@gmail.com' message:'hi'}
  const handleChange = (e) => {
    const { name, value } = e.target;                                           //Extract name and value from where the event was triggered.
    setForm({ ...form, [name]: value });                                        //Updates the form by spreading the existing values and replacing the one that matches the name with the new value
    
  }

  //Handles email interaction. "e" has the information from the section were the event was triggered.
  const handleSubmit = async (e) => {
    e.preventDefault();                                                        //When user submits, it prevents page from refreshing
    
    // Regular Expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Displays an error if email is not specified or it is invalid
    if(!form.email || !emailRegex.test(form.email)){
      alert("Please provide a valid email address.")                          
      return;
    }

    setLoading(true);                                                           //loading set to true -> allows to disable the button

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;                       //Gets the URL from the .env file

    try{
      const response = await fetch(`${BACKEND_URL}/send-email`, {
        method: 'POST',                                                         //Method to send the request
        headers:{
          'Content-Type': 'application/json',                                   //Type of data being sent
        },
        body: JSON.stringify({                                                  ////Converts the form data into a JSON string
          name: form.name,
          email: form.email,
          message: form.message,
        }),                                             
      });

      //If executed correctly, bring everything back to default (empty boxes, not loading.)
      if(response.ok){
        alert('Thank you! I will get back to you as soon as possible.');  
        setForm({
          name: '',
          email:'',
          message:'',
        })
      }
      else{
        const errorData = await response.json();                                //Display the error message
        alert(errorData.error);
      }
    }
    catch(e){
      console.error('Error:', e);
      alert('Something went wrong. Please try again.');
    }

    finally{
      setLoading(false);                                                        //No matter what happens, loading is set to false -> button is enabled again
    }
}

  return (
    //Controls the Contact section between the 3D model and the boxes
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"> 
      <motion.div
        variants={slideIn('left','tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"                                //Creates the section background
      >
        {/*Creates title and subtext*/}
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <div className='text-secondary'>
          NOTE: After a period of inactivity, the backend service may experience delays of up to 
          a minute when processing requests. Please be patient while the request is fulfilled.
        </div>
        {/*Creates/Adjusts the different input boxes*/}
        <form
          ref={formRef}                                                                    //ref attribute is assigned to the "form" Element
          onSubmit={handleSubmit}                                                          //When the button is pressed, handleSubmit event is fired 
          className="mt-12 flex flex-col gap-8"
        >
          {/*Creates a box for inserting name*/}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type = "text"                                                               //Defines the input type
              name="name"                                                                 //Tells onChange handler which part of the form state needs to be updated
              value={form.name}                                                           //Stores the name value written by the user
              onChange={handleChange}                                                     // When there is an user input, this onChange event is fired. Browser translates this to: onChange={(event) => handleChange(event)}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'    //Modifies design of box + adds placeholder
            />
          </label>

          {/*Creates a box for inserting email*/}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type = "email"                                                                  //Since "email" some restrictions apply (Ex: must have "@")
              name="email"
              value={form.email}                                                              //Stores the email value written by the user
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'    //Modifies design of box + adds placeholder
            />
          </label>

          {/*Creates a box for inserting a message*/}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
              rows="7"
              name="message"
              value={form.message}                                                             //Stores the message written by the user
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium resize-none'    //Modifies design of box + adds placeholder
            />
          </label>

          {/*Adds the button for sending the information*/}
          <button
            disabled={loading}                                                                 //If loading is set to true, it means that the submit button is pressed, and thus, button is disabled
            type="submit"
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading? 'Sending...' : 'Send'}                                                                                            {/* If the  */}
          </button>
        </form>
        </motion.div>

        {/*Adds the floating Earth 3D model*/}
        <motion.div 
          variants={slideIn('right','tween', 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
          >
            <EarthCanvas />
        </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact")