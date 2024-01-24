import { useEffect, useState } from 'react'
import {
    faJs,
    faCss3,
    faGitAlt,
    faHtml5,
    faReact,
    faPython,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const aboutArray = 'About Me'.split('')

    const [ letterClass, setLetterClass ] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
        return () => clearTimeout(timer)
    }, [])
    

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={aboutArray}
                            idx={15}
                        />
                    </h1>

                    <p>
                        I'm passionate about developing technologies. Currently, I am exploraing 
                        and learning web development technologies.
                    </p>
                    <p>
                        I have completed Masters in Electrical and Computer Engineering from University 
                        of Waterloo. And I am currently working as Full Stack Web Developer Intern at Ineract Health Pro.
                    </p>
                    <p>
                        I thrive in collaborative work environments. So far I have worked with Python, C##, JavaScript. 
                        I am most comfortable in workign with Python.
                    </p>
                    <p>
                        I can be described as hardworking, dedicated and a reader !!!!!!
                    </p>  
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJs} color="#4B8BBE" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" /> 
        </>
    )  
}

export default About

