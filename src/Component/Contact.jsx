import React, { useRef } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_isjo8g9",
        "template_r8z5g7q",
        form.current,
        "uslXqGbc8arzCFrwc"
      )
      .then(
        () => {
          toast.success("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white py-16 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <Slide direction="down">
          <h1 className="text-4xl font-extrabold mb-10 text-blue-500 text-center">
            Contact Me
          </h1>
        </Slide>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Fade direction="left">
            <div className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-md h-fit">
              <div className="flex items-center gap-4">
                <FaEnvelope size={24} className="text-red-400" />
                <a
                  href="mailto:tanviralamkhantonmoy@gmail.com"
                  className="hover:text-blue-400 transition"
                >
                  tanviralamkhantonmoy@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt size={24} className="text-green-400" />
                <p className="hover:text-blue-400 transition">+8801617725840</p>
              </div>

              <div className="flex gap-4 mt-6 mb-6 justify-center md:justify-start">
                <a
                  href="https://github.com/TANVIRALAMKHAN72"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={28}
                    className="hover:text-blue-400 transition"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/tanvir-alam-khan-84070b350/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    size={28}
                    className="hover:text-blue-400 transition"
                  />
                </a>
                <a
                  href="https://www.facebook.com/tanviralamkhan.tanvir"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    size={28}
                    className="hover:text-blue-400 transition"
                  />
                </a>
              </div>
            </div>
          </Fade>

          <Fade direction="right">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-gray-800 p-6 rounded-lg shadow-md space-y-4"
            >
              <div>
                <label className="block mb-1 text-blue-400">Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Enter your name"
                  className="w-full p-2 rounded bg-gray-700 text-white outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-blue-400">Your Email</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="Enter your email"
                  className="w-full p-2 rounded bg-gray-700 text-white outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-blue-400">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Write your message here..."
                  className="w-full p-2 rounded bg-gray-700 text-white outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow-md transition"
              >
                Send Message
              </button>
            </form>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Contact;
