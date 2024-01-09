import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";



const Contact = () => {

  const formRef = useRef();
  const [message, setMessage] = useState( false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
        'service_lgxilrm',
        'template_cid8lop',
        {
          from_name: form.name,
          to_name: 'Olusola',
          from_email: form.email,
          to_email: 'olusolawebtech@gmail.com',
          message: form.message,
        },
        'aBjfc5O5oyXi2kAC4'
    )
        // .then(() => {
        //   setLoading(false);
        //   alert('Thank You, I will get back to you ASAP.');
        //
        //   setForm({
        //     name: '',
        //     email: '',
        //     message: '',
        //   })
        // }, (error) => {
        //   setLoading(error);
        //   alert('email not sent!')
        // })

        .then(
            (message) => {
                setLoading(false);
                message?.status === 200 && showSuccess();

                setForm({
                        name: '',
                        email: '',
                        message: '',
                        })
            },
            (error) => {
                setLoading(error);
                setError(true);
            }
        )
        e.target.reset();
  };

  const showSuccess = () => {
      setMessage(true);
      setTimeout(()=> setMessage(false), 3000);
  };


  return (
    <div className="xl: mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
      variants={slideIn('left', "tween", 0.2,1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl" >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>


        <form
         ref={formRef}
         onSubmit={handleSubmit}
         className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Name </span>
            <input
                required
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary
                  text-white rounded-lg outline-none border-none font-medium"
                />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Email </span>
            <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Message </span>
            <textarea
                required
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your Message"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button type="submit" className=" bg -tertiary py-3 px-8
          outline-none w-fit text-white
          font-bold shadow-md shadow-primary rounded-xl" >
            {loading ? 'sending...' : 'send'}
          </button>
            {message && <p className=" text-white "> Message sent. I will respond soon </p>}

        </form>
      </motion.div>

      <motion.div
          variants={slideIn('right', "tween, 0.2, 1")}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]" >
          <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");