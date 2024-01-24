import React, { useEffect, useState } from 'react'
import TagCloud  from 'TagCloud'

const WordCloud = () => {
    const [isLoading, setLoad] = useState(true)


    const container = '.content'

    const texts = [
        'Java',
        'React',
        'NodeJS',
        'ExpressJS',
        'HTML5',
        'CSS3',
        'JS',
        'SQl Server',
        'C##',
        'ASP.NET',
        'Python',
        'Git',
        'R',
        'Visual Studio',
        'Visual Studio Code',
        'TensorFlow',
        'Keras',
        'NumPy',
        'Pandas',
        'Scikit Learn',
        'NLP',
    ]

    const options = {
        radius: 300,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        direction: 135,
        keep: true,
    }

    useEffect(() => {
        if(isLoading) {
            TagCloud(container, texts, options)
            console.log('i fire once')
            setLoad(false)
        }
    })

    return (
        <div className="main">
            <span className="content"></span>
        </div>
    )
}

export default WordCloud