// Import React Library
import React from 'react'

// Import CSS StyleSheet
import './contact.css'

// Import React Icons
import { MdEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
import { SiZalo } from "react-icons/si";

// Import React EmailJS Library
import { useRef } from 'react';
import emailjs_com from 'emailjs-com';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ngh5kzs', 'template_iq2szua', form.current, {
                publicKey: 'ZOLn3RaxFCRa02dUg',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

        e.target.reset();
    };


    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                {/* ---------- BEGIN OF CONTACT OPTIONS ---------- */}
                <div className="contact__options">
                    {/* ---------- BEGIN OF CONTACT OPTION 1 ---------- */}
                    <article className='contact__option'>
                        <MdEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>sulananh@gmail.com</h5>
                        <a href="mailto:sulananh@gmail.com" target='_blank' rel="noreferrer">
                            Send a Message
                        </a>
                    </article>
                    {/* ---------- END OF CONTACT OPTION 1 ---------- */}

                    {/* ---------- BEGIN OF CONTACT OPTION 2 ---------- */}
                    <article className='contact__option'>
                        <RiMessengerFill className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Kayden Kingsley</h5>
                        <a href="https://m.me/dhlananhh" target='_blank' rel="noreferrer">
                            Send a Message
                        </a>
                    </article>
                    {/* ---------- END OF CONTACT OPTION 2 ---------- */}

                    {/* ---------- BEGIN OF CONTACT OPTION 3 ---------- */}
                    <article className='contact__option'>
                        <RiWhatsappFill className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+123456789</h5>
                        <a href="https://api.whatsapp.com/send?phone=+0906809981" target='_blank' rel="noreferrer">
                            Send a Message
                        </a>
                    </article>
                    {/* ---------- END OF CONTACT OPTION 3 ---------- */}

                    {/* ---------- BEGIN OF CONTACT OPTION 4 ---------- */}
                    <article className='contact__option'>
                        <SiZalo className='contact__option-icon' />
                        <h4>Zalo</h4>
                        <h5>+123456789</h5>
                        <a href="https://zalo.me/0906809981" target='_blank' rel="noreferrer">
                            Send a Message
                        </a>
                    </article>
                    {/* ---------- END OF CONTACT OPTION 4 ---------- */}
                </div>
                {/* ---------- END OF CONTACT OPTIONS ---------- */}


                {/* ---------- BEGIN OF CONTACT FORM ---------- */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" id="" placeholder='Your Full Name' required />
                    <input type="email" name="email" id="" placeholder='Your Email' required />
                    <textarea id="" name="message" cols={3} rows={7} placeholder='Your Message' required ></textarea>
                    <button type="submit" value="Send Message" className='btn btn-primary'>
                        Send Message
                    </button>
                </form>
                {/* ---------- END OF CONTACT FORM ---------- */}
            </div>
        </section>
    )
}
