import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className="navBarContainer" id="NavBar" >
            
                <div className="leftNavBarSide">
                        <span>
                            Rana.
                        </span>
                </div>

                <div className="rightNavBarSide">

                        <ul>
                            <li className="homeNav" > <a href="#Home">Home</a> </li>
                            <li> <a href="#About"> About Me   </a> </li>
                            <li> <a href="#Project"> Projects   </a> </li>
                            <li> <a href="#Contact"> Contact Me </a>   </li>
                        </ul>
                        
                        <AiOutlineMenu/>

                </div>

        </div>
    )
}

export default Navbar;
