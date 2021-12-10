import React ,{useState} from 'react'
import { BsTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import {   toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import { USERID , TEMPLATEID , SERVICEID } from '../../data';
import validator from 'validator';

const Contact = () => {

    toast.configure();
        
    const [inputValue , setInputValue] = useState({
        name : '',
        email : '',
        message : ''
    })

    const callInputEvent = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInputValue({...inputValue ,[name]:value  })
    }

    const callSubmitEvent = async ()=>{

        if (inputValue.name.length > 0 && inputValue.email.length > 0 && inputValue.message.length > 0  ) {
              
                if(validator.isEmail(inputValue.email)){

                        await emailjs.send( SERVICEID , TEMPLATEID , inputValue , USERID)


                        toast.success('Thank You For Sending Email to Rana', {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: 'colored'
                        });

                        setInputValue({
                                        name : '',
                                        email : '',
                                        message : ''
                        })


                }else{

                        toast.error('Email is Not Valid', {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: 'colored'
                                });


                }

                
                
        }else{

                toast.error('Please Fill Every Input Field', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'colored'
                        });

        }

        

          
    }


    return (
        <div className="contactContainer" id="Contact" >
            
                <div className="borderContactDiv">

                </div>

                <div className="mainContactDiv">

                        <div className="leftContactDiv">

                                <div className="contactHeadingDiv">
                                        <p>
                                            Let's Discuss Your Project
                                        </p>
                                </div>

                                <div className="contactInfoDiv">

                                        <p> <BsTelephoneFill/>  +917666208350 </p>
                                        <p className="margin30Px" > <AiOutlineMail/>  developerrana0509@gmail.com </p>
                                        <p> <MdLocationOn/>  Aurangabad , Maharashtra , Bharat. </p>

                                </div>

                        </div>

                        <div className="rightContactDiv">
                            
                                <div className="contactInputHeading">
                                        <p>
                                            <b>Get in Touch</b>. Always available for Freelancing
                                        </p>
                                </div>

                                <div className="contactInputDiv">

                                    <input 
                                    type="text" placeholder="Name" value={inputValue.name}
                                    name="name"
                                    onChange={callInputEvent}
                                    
                                    />

                                    <input 
                                    type="email" placeholder="Email" className="margin30Px" value={inputValue.email}
                                    name="email"
                                    onChange={callInputEvent}
                                    
                                    />

                                    <textarea 
                                    className="contactTextArea"placeholder="Message"  value={inputValue.message} 
                                    name="message"
                                    onChange={callInputEvent}
                                    ></textarea>

                                </div>

                                <div className="contactButtonDiv">
                                        <button onClick={callSubmitEvent} >
                                            Submit
                                        </button>

                                        <a href="#NavBar">
                                          <BsFillArrowUpCircleFill/>
                                        </a>

                                </div>


                        </div>

                </div>

        </div>
    )
}

export default Contact
