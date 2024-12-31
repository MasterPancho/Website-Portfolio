import {useSate, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';       //Allows for people to send emails
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import Earth from './canvas/Earth';

//Creates an email and sends it to mine.
const Contact = () => {
  const API_KEY = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const ID = import.meta.env.VITE_EMAILJS_USER_ID;

  const formRef = useRef();                                   //A reference to the form object
  const [form, setForm] = useState({
    name: '',
    email:'',
    message:'',
  });
  const [loading, setLoading] = useState(false);                                //Controls the state for submitting a message.

  //Updates the form state as the user writes on the box. "e" has the information from the section were the event was triggered.
  const handleChange = (e) => {
    const { name, value } = e.target;                                           //Extract name and value from where the event was triggered.
    setForm({ ...form, [name]: value });                                        //Updates the form by spreading the existing values and replacing the one that matches the name with the new value
                                                                                //Ex: After typing: form={name:'Dave' email:'d@gmail.com' message:'hi'}
  }

  //Handles email interaction. "e" has the information from the section were the event was triggered.
  const handleSubmit = (e) => {
    e.preventDefault();                                                        //When user submits, it prevents page from refreshing
    
    // Regular Expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Displays an error if email is not specified or it is invalid
    if(!form.email || !emailRegex.test(form.email)){
      alert("Please provide a valid email address.")                          
      return;
    }

    setLoading(true);                                                          //loading set to true -> allows to disable the button
    
    emailjs.send(
      API_KEY,                                                      //Service ID -> identifies as Gmail
      TEMPLATE,                                                     //Template ID -> template created in emailjs
    {
      //User information, which will be populated in the email
      from_name: form.name,                                                   
      from_email: form.email,
      message: form.message,
    },
      ID,
    )
    //After execution, bring everything back to default (empty boxes, not loading.)
    .then(() => {
      setLoading(false)                                                         //load is done
      alert('Thank you! I will get back to you as soon as possible.');          
      setForm({
        name: '',
        email:'',
        message:'',
      })
    }, (error) => {
      setLoading(false)                                                           //loading set to false -> button is enabled again
      console.log(error);
      alert('Something went wrong.')
    })
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
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'    //Modifies design of box + adds placeholder
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