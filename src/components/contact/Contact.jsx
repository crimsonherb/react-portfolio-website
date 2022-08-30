import React, { useRef } from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import emailjs from '@emailjs/browser';



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bwwqonb', 'template_mhemsay', form.current, 'GBIv4Y56LxYn0U72l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
    alert("Email Sent")
  };


  return (
    <section id="contact">
    <h5>Get Int Touch</h5>
    <h2>Contact Me</h2>

    <div className='container contact__container'>
        <div className='contact__options'>
          
          <article className='contact__option'>
            <MdOutlineEmail className=''/>
            <h4>Email</h4>
            <h5>villanueva.joma@gmail.com</h5>
            <a href='mailto:villanueva.joma@gmail.com' target='_blank'>Send a message</a>
          </article>

        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        
        </form>
    </div>

    </section>
  )
}

export default Contact