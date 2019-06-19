import React from 'react';
import Form from './Form.js';
import SocialMedia from './SocialMedia.js';
import './styles/Contact.css'

class Contact extends React.Component {


  render() {
    return (
         <div className="container text-center">
               <div className="image-contain text-white">
                    <h5>Get In Touch</h5>
               </div>
               <div className="row">
                    <div className="col-md-6">
                         <h6>Leave a Message</h6>
                         <hr/>
                         <Form/>
                    </div>
                    <div className="col-md-6">
                         <h6>Or connect with us on: </h6>
                         <hr/>
                         <SocialMedia/>
                    </div>
               </div>
         </div>
    )
  }
}

export default Contact;
