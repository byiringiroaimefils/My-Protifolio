import React, { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import Photo from '../assets/contact-me.png'
import {FaInstagram, FaLinkedinIn, FaTwitter, FaCheckCircle } from "react-icons/fa"

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })

  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  })
  const [result, setResult] = React.useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setResult("Sending....");
    const formData = new FormData(e.target);

    formData.append("access_key", "2970fb62-6888-4a71-a921-0aa3234a856a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        setResult("Message Sent Successfully!");
        
        // Reset form
        setFormData({
          email: '',
          subject: '',
          message: ''
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
          setResult("");
        }, 5000);
      } else {
        console.log("Error", data);
        setResult(data.message);
        setShowSuccess(false);
      }
    } catch (error) {
      setResult("Failed to send message. Please try again.");
      setShowSuccess(false);
    }
  }

  return (
    <div className='bg-white dark:bg-gray-900 py-16' id="contact">
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-16'>
          <h3 className='text-2xl font-bold mb-2'>
            Get In Touch
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-full mx-auto mb-6"></div>
          <p className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out if you'd like to connect!
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div className='order-2 lg:order-1' data-aos="fade-right">
            {showSuccess && (
              <div className='flex items-center justify-center p-4 mb-6 bg-green-100 dark:bg-green-900 rounded-lg transition-all duration-300 ease-in-out'>
                <FaCheckCircle className="text-green-500 dark:text-green-400 text-xl mr-2" />
                <span className='text-green-700 dark:text-green-300 font-medium'>
                  {result}
                </span>
              </div>
            )}
            {!showSuccess && result && (
              <div className='flex justify-center items-center mt-5 mb-10'>
                <h3 className='text-gray-600 dark:text-gray-400 text-center'>
                  {result}
                </h3>
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
              <input type="hidden" name="replyto" value="custom@gmail.com" />
                <label htmlFor="email" className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-600 focus:border-transparent transition-colors duration-200'
                  placeholder='your@email.com'
                />
              </div>

              <div>
                <label htmlFor="subject" className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-600 focus:border-transparent transition-colors duration-200'
                  placeholder='What is this about?'
                />
              </div>

              <div>
                <label htmlFor="message" className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-sky-600 focus:border-transparent transition-colors duration-200 resize-none'
                  placeholder='Your message here...'
                ></textarea>
              </div>

              <button
                type="submit"
                className='w-full px-6 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-lg hover:shadow-lg hover:shadow-sky-600/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                Send Message
              </button>
            </form>
          </div>

          <div className='order-1 lg:order-2' data-aos="fade-left">
            <div className='relative'>
              <div className='absolute -inset-4 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-full blur-3xl opacity-30 animate-pulse'></div>
              <img 
                src={Photo} 
                alt="Contact illustration" 
                className='relative w-full max-w-md mx-auto drop-shadow-2xl rounded-2xl'
              />
            </div>
          </div>
        </div>

        <div className='translate-y-32 text-center'>
          <h4 className='text-xl font-semibold text-gray-900 dark:text-white mb-6'>
            Connect with Me
          </h4>
          <div className='flex justify-center gap-6 mb-4'>
            <a 
              href="#" 
              className='text-2xl text-gray-600 hover:text-sky-600 transition-colors duration-300'
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://linkbio.co/byiringiroaimefils" 
              className='text-2xl text-gray-600 hover:text-sky-600 transition-colors duration-300'
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://www.linkedin.com/in/byiringiro-aime-fils-281609296/" 
              className='text-2xl text-gray-600 hover:text-sky-600 transition-colors duration-300'
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
          
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            &copy; {new Date().getFullYear()} Coding with aime173@gmail.com. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
