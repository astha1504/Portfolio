import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';

const MessageBox = ({ show, message, type, onClose }) => {
  const bgColor = type === 'success' ? 'bg-yellow-600' : 'bg-red-600';
  const icon = type === 'success' ? (
    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  ) : (
    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  );

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className={`fixed bottom-8 left-1/2 -translate-x-1/2 p-4 rounded-lg shadow-2xl z-50 text-white flex items-center transform transition-all ${bgColor}`}
        >
          {icon}
          <span>{message}</span>
          <button onClick={onClose} className="ml-4 opacity-75 hover:opacity-100 transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Contact() {
  const sectionRef = useRef(null);
  const [messageBox, setMessageBox] = useState({ show: false, message: '', type: '' });
  const [isVisible, setIsVisible] = useState(false);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessageBox({ show: true, message: 'Message sent successfully!', type: 'success' });
      reset();
    } catch (error) {
      setMessageBox({ show: true, message: 'Message failed to send. Please try again.', type: 'error' });
    }

    setTimeout(() => setMessageBox({ show: false, message: '', type: '' }), 5000);
  };

  const copyEmailToClipboard = async () => {
    // Fallback for clipboard copy using document.execCommand('copy') as navigator.clipboard.writeText may not be available
    const textarea = document.createElement('textarea');
    textarea.value = "asthasingh00442@gmail.com";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      setMessageBox({ show: true, message: 'Email copied to clipboard!', type: 'success' });
    } catch (e) {
      setMessageBox({ show: true, message: 'Copy failed. Please try manually.', type: 'error' });
    } finally {
      document.body.removeChild(textarea);
      setTimeout(() => setMessageBox({ show: false, message: '', type: '' }), 3000);
    }
  };

  useEffect(() => {
    // IntersectionObserver for a smooth scroll-in animation without external libraries
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-gray-900 text-white px-4 py-24 min-h-screen overflow-hidden"
      style={{ backgroundImage: "url('https://i.pinimg.com/originals/6f/7c/63/6f7c63991726d61d63730682e791d78c.gif')" }}
    >
      <div className={`relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center bg-gray-800 bg-opacity-50 rounded-3xl p-8 md:p-14 border border-gray-700 shadow-2xl backdrop-blur-sm gap-10 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img 
            src="public\contact.png"
            alt="Contact Illustration"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-xl object-contain"
          />
        </motion.div>

        {/* Right Form + Info */}
        <div className="w-full md:w-1/2 max-w-2xl">
          <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-8">
            Let's Connect!
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: true })}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow duration-300"
            />
            {errors.name && <p className="text-red-400 text-sm">Name is required</p>}

            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow duration-300"
            />
            {errors.email && <p className="text-red-400 text-sm">Valid email required</p>}

            <textarea
              placeholder="Your Message"
              {...register("message", { required: true })}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow duration-300"
              rows="5"
            ></textarea>
            {errors.message && <p className="text-red-400 text-sm">Message required</p>}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(252,211,38,0.7)" }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>

          <div className="mt-8 space-y-5 text-lg text-center md:text-left">
            <motion.div 
              whileHover={{ x: 10, backgroundColor: 'rgba(252,211,38,0.1)' }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center group cursor-pointer p-2 rounded-lg transition-all duration-200 ease-in-out"
              onClick={copyEmailToClipboard}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-400 mr-4 text-2xl w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-yellow-300 hover:text-yellow-200 transition-colors">
                asthasingh123@gmail.com
              </span>
            </motion.div>

            <motion.div
              whileHover={{ x: 10, backgroundColor: 'rgba(252,211,38,0.1)' }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center group p-2 rounded-lg transition-all duration-200 ease-in-out"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-300 mr-4 text-2xl w-6 h-6 group-hover:text-white transition-colors" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 0a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.49v-1.7c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.6.07-.6.07-.6 1.05.07 1.6 1.08 1.6 1.08.93 1.58 2.44 1.12 3.03.86.09-.67.36-1.12.65-1.38-2.32-.26-4.75-1.16-4.75-5.16 0-1.14.4-2.07 1.06-2.8-.1-.26-.46-1.32.1-2.76 0 0 .86-.28 2.82 1.07A9.8 9.8 0 0110 4.8c.84.15 1.7.22 2.54.22 1.96-1.35 2.82-1.07 2.82-1.07.56 1.44.2 2.5.1 2.76.66.73 1.06 1.66 1.06 2.8 0 4-2.43 4.9-4.75 5.16.38.33.68.97.68 1.95v2.9c0 .27.18.58.68.49A10 10 0 0010 0z" clipRule="evenodd" />
              </svg>
              <a href="https://github.com/astha1504" target="_blank" rel="noreferrer" className="hover:underline transition-colors">
                astha1504
              </a>
            </motion.div>

            <motion.div
              whileHover={{ x: 10, backgroundColor: 'rgba(252,211,38,0.1)' }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center group p-2 rounded-lg transition-all duration-200 ease-in-out"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400 mr-4 text-2xl w-6 h-6 group-hover:text-blue-300 transition-colors" viewBox="0 0 20 20" fill="currentColor">
                <path d="M16.333 4.29a.997.997 0 00-.997-.997H4.667c-.551 0-1.002.446-.997.997v11.42c-.005.551.446 1.002.997.997h10.666c.551.005 1.002-.446.997-.997V4.29zM15 15H5V5h10v10z" />
                <path d="M6.333 7.667c0-.275.225-.5.5-.5h6.334a.5.5 0 010 1H6.833a.5.5 0 01-.5-.5zM6.333 10c0-.275.225-.5.5-.5h6.334a.5.5 0 010 1H6.833a.5.5 0 01-.5-.5zM6.333 12.333c0-.275.225-.5.5-.5h6.334a.5.5 0 010 1H6.833a.5.5 0 01-.5-.5z" />
              </svg>
              <a href="https://linkedin.com/in/astha-singh-8b6a4a291" target="_blank" rel="noreferrer" className="hover:underline transition-colors">
                Astha Singh
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <MessageBox 
        show={messageBox.show} 
        message={messageBox.message} 
        type={messageBox.type} 
        onClose={() => setMessageBox({ show: false, message: '', type: '' })} 
      />
    </section>
  );
}
