import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis dignissim felis.
            Integer sed lobortis nisi. Etiam pellentesque odio non est fringilla vulputate.
            Integer in auctor nibh. Nam et mauris ornare massa iaculis posuere. Ut ultrices sodales finibus.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vulputate porttitor laoreet.
          </p>
          <p align="LEFT">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis dignissim felis.
            Integer sed lobortis nisi. Etiam pellentesque odio non est fringilla vulputate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis dignissim felis.
            Integer sed lobortis nisi. Etiam pellentesque odio non est fringilla vulputate.
            Integer in auctor nibh. Nam et mauris ornare massa iaculis posuere. Ut ultrices sodales finibus!!!
          </p>
        </div>

        <div className="record-container">
          <div className="record">
            <div className="label"></div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
