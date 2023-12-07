import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    emailjs.init("jfTQusSKpqa_yLczN");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_evw1h3r', 'template_54349ay', formData)
      .then(function (res) {
        alert('Email Sent Successfully');
      })
      .catch(function (error) {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#FCFBF4] flex justify-center items-center p-4'>
      <form
        onSubmit={handleSubmit}
        className='max-w-[700px] mx-auto p-4 flex flex-col justify-center w-full h-full'
      >
        {/* ... other form elements ... */}
        <input
          className='text-white bg-[#0a192f] p-2'
          type="text"
          placeholder='Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className='text-white my-4 p-2 bg-[#0a192f]'
          type="email"
          placeholder='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className='text-white bg-[#0a192f] p-2'
          name="message"
          rows="15"
          placeholder='Message'
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className='text-black border-2 hover:bg-[#51F02A] hover:border-black-1000 px-4 py-3 my-8 mx-auto flex items-center'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
