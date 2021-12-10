import React from 'react'
import UserImage from '../../images/userImage/3323619.jpg'

const About = () => {
    return (
        <div className="aboutContainer" id="About" >
            
                <div className="upperAboutDiv">
                            <p>
                                About Me
                            </p>
                </div>

                <div className="lowerAboutDiv">
                        <div className="leftAboutDiv">
                                <img src={UserImage} alt="" />
                        </div>

                        <div className="rightAboutDiv">
                            <p>
                            My Name is <span>Rana Yograj</span> and I am an Engineering Student.
                            Currently I am pursuing my Enginnering in <b>Electronics and Computer Engineering</b> at MIT , <a href="#" >Maharshtra</a> , <a href="#" >Bharat</a>.
                            I am <span>Full Stack Web Developer</span> with Knowledge of <span>MERN</span> Stack with a Enthusiasm of building Applications.
                            With this Knowledge I will be a Strong Asset to an Organisation.
                            </p>
                        </div>
                </div>

        </div>
    )
}

export default About;

