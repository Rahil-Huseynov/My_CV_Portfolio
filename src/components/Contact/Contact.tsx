import { useState } from 'react';
import contact from '../../assets/chat.png'
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import './Contact.css'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [captchaError, setCaptchaError] = useState(false);
    const [IsSuccess, setIsSuccess] = useState(false);
    const [IsError, setIsError] = useState(false);
    const [captchaTokenCheck, setcaptchaTokenCheck] = useState(false);

    const SuccessSendMessage = () => toast.success('Send Message', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const ErrorSendMessage = () => toast.error('Message Could Not Be Sent', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });;

    const CaptchaCheck = () => toast.error('Please complete the CAPTCHA', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (captchaToken) {
            setIsSubmitting(true)
            setCaptchaError(false)
            if (IsSuccess) {
                SuccessSendMessage();
            }
            setIsSuccess(true)
            emailjs.send('service_7tj7mn8', 'template_ujrngfj', {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, 'gGfb3RtM9jt5hkhI8')
                .then(() => {
                    setFormData({ name: '', email: '', message: '' });
                }).catch(() => {
                    if (IsError) {
                        ErrorSendMessage();
                    }
                    setIsError(true)
                })
                .finally(() => {
                    setIsSubmitting(false);
                });
        } else {
            setCaptchaError(true)
            if (captchaTokenCheck || !captchaError) {
                CaptchaCheck();
            }
            setcaptchaTokenCheck(true)
        }


    };
    const handleCaptcha = (token: string | null) => {
        setCaptchaToken(token);
    };
    return (
        <>
            <section id='CONTACTME'>
                <div className='skills_container'>
                    <div >
                        <div className='skills_header_container'>
                            <div>
                                <img className='skills_icon' src={contact} alt="contact" />
                            </div>
                            <div>
                                <h2 className='skills'>Contact<span className='point'>.</span></h2>
                                <p className='my_skills_about'>All my life I have been driven by my strong belief that education is important. I try to learn something new every single day.</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='contact_user_info_message_container'>
                            <div className='contact_user_info'>
                                <input type="text"
                                    name="name"
                                    placeholder='Name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required />
                                <input type="email"
                                    name="email"
                                    placeholder='E-mail'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div className='textarea_container'>
                                <textarea className='message'
                                    name="message"
                                    placeholder='Message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required />
                            </div>
                        </div>
                        <div>
                            <div className='ReCAPTCHA_container'>
                                <ReCAPTCHA className={captchaError ? 'error-captcha' : ''} sitekey="6Le32koqAAAAAIyK0ZAx3177bCNWM5GmJrAqoNlL" onChange={handleCaptcha} hl='en' />
                            </div>
                            <div className='button_send_message'>
                                <button type='submit' className='send_message'>{isSubmitting ? 'Sending...' : 'Send Message'}</button>
                                <ToastContainer
                                    position="top-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="light" />
                            </div>
                        </div>
                    </form>
                </div>

            </section >
        </>
    )
}

export default Contact