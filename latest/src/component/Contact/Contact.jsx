import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "11017977-e858-4b34-a1e1-c0cad947636c");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>

        <div className='contact-col'>
            <h3>Send us a message <img src={ msg_icon} alt=''/></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eveniet quia sunt corporis quidem, tenetur similique mollitia quas, explicabo, atque ad asperiores ullam odio aut. Cumque itaque animi culpa enim.</p>

            <ul>
                <li> <img src={mail_icon}alt=''/> suthar@gmail.com </li>
                <li> <img src={phone_icon}alt=''/> + 91 6350513177</li>
                <li><img src={location_icon}alt=''/> 77 aadarsh nagar<br/> jaipur </li>
            </ul>npm run dev
            
        </div>
        <div className='contact-col'>
            <from onSubmit={onSubmit}>
                <label>Your name</label>
                <input type='text' name='name' placeholder='enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name='mesage'  rows="6" placeholder='Enter your message'></textarea>
                <label>Choose file</label>
                <input type='file' className='btn dark btn' placeholder='Choose file'/>
                <button type='submit' className='btn dark-btn' >Submit now<img src={white_arrow}alt=""/></button>
            </from>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact