import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Globe from './Globe'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form =useRef()
    const contactArray = 'Contact Me'.split('')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
         .sendForm(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
         )
         .then(
            () => {
                toast.success('Message successfully sent!', {
                    position: 'bottom-center',
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                })
                const timeout = setTimeout(() => {
                    window.location.reload(false)
                }, 3900)

                return () => clearTimeout(timeout)
            },
            () => {
                  toast.error('Failed to send the message, please try again', {
                   position: 'bottom-center',
                   autoClose: 3500,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                   theme: 'dark',                
                  })
            }

         )

    }
    

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={contactArray}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in web developer oppurtinities - part-time or full-time. 
                        If you have any other question or request, don't hesitate to contact me.
                        Looking forward to talking to you !!!!!!!!!!! 
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="from_name" required />
                                </li>
                                <li className="half">
                                    <input 
                                        placeholder="Email"
                                        type="email"
                                        name="from_email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input 
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
                <div className='globe-wrap'>
                    <Globe />
                </div>
                
            </div>     
            <Loader type="pacman" />
        </>
    )
}

export default Contact
 
