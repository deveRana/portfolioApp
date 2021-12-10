import React from 'react'

import htmlImg from '../../images/skillImages/html.png'
import cssImg from '../../images/skillImages/css-3.png'
import javaScriptlImg from '../../images/skillImages/js-file.png'
import reactImg from '../../images/skillImages/physics.png'
import nodeImg from '../../images/skillImages/node-js.png'
import expressImg from '../../images/skillImages/express-2.png'
import mongoDBImg from '../../images/skillImages/mongo.png'

const Skills = () => {
    return (
        <div className="skillContainer" id="Skills" >
                
                <div className="upperSkillContainer">
                    <p>
                        Skills
                    </p>
                </div>

                <div className="innerSkillContainer">

                        <div className="skillDiv">
                                <div className="skillImgDiv">
                                    <img src={htmlImg} alt="" />
                                </div>
                                <div className="skillHeadingDiv">
                                    <p>Html</p>
                                </div>
                        </div>

                        <div className="skillDiv">
                                <div className="skillImgDiv">
                                    <img src={cssImg} alt="" />
                                </div>
                                <div className="skillHeadingDiv">
                                    <p>Css</p>
                                </div>
                        </div>

                        <div className="skillDiv">
                                <div className="skillImgDiv">
                                    <img src={javaScriptlImg} alt="" />
                                </div>
                                <div className="skillHeadingDiv">
                                    <p>JavaScript</p>
                                </div>
                        </div>

                        <div className="skillDiv">
                                <div className="skillImgDiv">
                                    <img src={reactImg} alt="" />
                                </div>
                                <div className="skillHeadingDiv">
                                    <p>React</p>
                                </div>
                        </div>

                        <div className="skillDiv">
                                <div className="skillImgDiv">
                                    <img src={nodeImg} alt="" />
                                </div>
                                <div className="skillHeadingDiv">
                                    <p>Node Js</p>
                                </div>
                        </div>

                        <div className="skillDiv">
                                <div className="skillImgDiv">
                                    <img src={expressImg} alt="" />
                                </div>
                                <div className="skillHeadingDiv">
                                    <p>Express Js</p>
                                </div>
                        </div>

                        <div className="skillDiv">
                                <div className="skillImgDiv mongoImg">
                                    <img src={mongoDBImg} alt="" />
                                </div>
                                <div className="skillHeadingDiv">
                                    <p>Mongo Db</p>
                                </div>
                        </div>

                </div>
        </div>
    )
}

export default Skills;
