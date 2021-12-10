import React , {useState} from 'react'

import quoteImg from '../../images/projectImages/quoteAppImg/image.png';
import jokeImg from '../../images/projectImages/jokesAppImg/img-1.png';
import weatherImg from '../../images/projectImages/weatherAppImg/img-1.png';
import socialImg from '../../images/projectImages/socialMediaAppImg/social.png'
import chatImg_2 from '../../images/projectImages/chatAppImg/img-2.png';

const Projects = () => {

    const [activeState, setActiveState] = useState('quote')

    const [imgValue, setImgValue] = useState(quoteImg)

    const callQuote = ()=>{
        setActiveState('quote')
        setImgValue(quoteImg)
    }

    const callJoke= ()=>{
        setActiveState('joke')
        setImgValue(jokeImg)
    }

    const callWeather = ()=>{
        setActiveState('weather')
        setImgValue(weatherImg)
    }

    const callSocial = ()=>{
        setActiveState('social')
        setImgValue(socialImg)
    }

    const callChat = ()=>{
        setActiveState('chat')
        setImgValue(chatImg_2)
    }



    return (
        <div className="projectContainer" id="Project" >
           
                <div className="leftProjectSide">

                        <div className="projectHeadingDiv">
                            <p>
                                Projects
                            </p>
                        </div>

                        <div className="projectListDiv">
                            

                           <p 
                            className={ activeState === 'quote' ? 'activeProjectList' : ' ' } 
                            onClick={callQuote} 
                            >
                            Quote App
                             </p>

                           <p 
                            className={ activeState === 'joke' ? 'activeProjectList' : ' ' }
                            onClick={callJoke} 
                            >
                            Joke App 
                            </p>

                           <p 
                            className={ activeState === 'weather' ? 'activeProjectList' : ' ' }
                            onClick={callWeather} 
                            >
                            Weather App </p>

                           <p 
                            className={ activeState === 'social' ? 'activeProjectList' : ' ' }
                            onClick={callSocial} 
                            >
                            Social Media App </p>

                           <p 
                            className={ activeState === 'chat' ? 'activeProjectList' : ' ' }
                            onClick={callChat}
                            >
                            Chat App 
                            </p>


                        </div>

                </div>
                
                <div className="rightProjectSide">
                        <div className="projectImageContainer">
                                <img src={imgValue} alt="" />
                        </div>
                </div>

        </div>
    )
}

export default Projects;
