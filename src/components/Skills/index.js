import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import WordCloud from './wordcloud'


const Skills = () => {
    const [letterClass, setletterClass] = useState('text-animate')

    const skillsArray = 'Skills'.split('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setletterClass('text-animate-hover')
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className="container skills-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={skillsArray}
                            idx={15}
                        />
                        <br />
                    </h1>
                    <p>
                        I am always learning new technologies and build projects using it, which helps
                        me to understand if I want to pursue my career in that direction. 
                        Which has enabled me to learn various technologies.
                    </p>
                    <p>
                        I am looking for a role in a company with oppurtinity to work with
                        latest technologies in web development.
                    </p>

                    <a className="flat-button" href="/Urvi/Resume.pdf"  target="_blank" rel="noopener noreferrer">
                        RESUME
                    </a>

                </div>

                <div className="tagcloud-wrap">
                    <WordCloud />
                </div>
            </div>

            <Loader type="pacman" />
        </>
    )
}

export default Skills
