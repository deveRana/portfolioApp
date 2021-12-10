import React from 'react'
import img from '../../images/userImage/4380747.jpg'

const Home = () => {
    return (
        <div className="homeContainer" id="Home" >
                <div className="leftHomeSide">
                        <img src={img} alt="" />
                </div>

                <div className="rightHomeSide">
                        
                        <div className="nameDiv">
                            <p>
                                Hello , I'M <span> Rana Yograj </span>
                            </p>
                        </div>

                        <div className="professionDiv">
                            <p>
                                Full Stack Developer
                            </p>
                        </div>

                        <div className="introDiv">
                            <p>
                                Very Good At Building Web Applications
                            </p>
                        </div>
                        

                </div>
        </div>
    )
}

export default Home
