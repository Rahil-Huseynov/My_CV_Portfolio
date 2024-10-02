import { useState } from 'react';
import './Modal_Contact.css';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ModalContactProps {
    onClose: () => void;
    isActive: boolean;
}

interface FormData {
    name: string;
    email: string;
    message: string;
}
const Modal_Contact: React.FC<ModalContactProps> = ({ onClose, isActive }) => {
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [captchaError, setCaptchaError] = useState(false);

    const SuccessSendMessage = () => toast.success('Message sent successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const ErrorSendMessage = () => toast.error('Failed to send message', {
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
            emailjs.send('service_7tj7mn8', 'template_ujrngfj', {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, 'gGfb3RtM9jt5hkhI8')
                .then(() => {
                    setFormData({ name: '', email: '', message: '' });
                    SuccessSendMessage()
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000); 
                }).catch(() => {
                    ErrorSendMessage();
                })
                .finally(() => {
                    setIsSubmitting(false);
                });
        } else {
            setCaptchaError(true)
            CaptchaCheck();
        }


    };
    const handleCaptcha = (token: string | null) => {
        setCaptchaToken(token);
    };
    return (
        <div className={`modal_overlay ${isActive ? 'active' : ''}`}>
            <div className="modal_overlay">
                <div className="modal_content">
                    <p className='Modal_header_word'>Let’s work together<span className='point'>.</span></p>
                    <p className='Modal_header_about'>Are you working on something great? I would love to help make it happen! Drop me a letter and start your project right now! Just do it.</p>
                    <div>
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
                                    <textarea className='message_Modal'
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
                                <div className='button_send_message_modal_container'>
                                    <button type='submit' className='send_message'>{isSubmitting ? 'Sending...' : 'Send Message'}</button>
                                    <button className="close_modal_button" onClick={onClose}>BACK TO CV</button>
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
                </div>
            </div>
        </div>
    );
}

export default Modal_Contact;
