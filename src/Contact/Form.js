import React from 'react';


class Form extends React.Component {


  render() {
    return (
         <form name="contact" className="pb-5" data-netlify="true">
           <div className="form-group">
             <label htmlFor="contactName">Name</label>
             <input type="text" name="name" className="form-control" id="contactName" placeholder="Akwasi Mintah"/>
           </div>
             <div className="form-group">
               <label htmlFor="contactEmail">Email address</label>
               <input type="email" name="email" className="form-control" id="contactEmail" placeholder="name@example.com"/>
             </div>
               <div className="form-group">
                 <label htmlFor="contactNumber">Phone Number</label>
                 <input type="number" name="number" className="form-control" id="contactNumber" placeholder="024194119"/>
               </div>
           <div className="form-group">
             <label htmlFor="contactText">Message</label>
             <textarea  name="message" className="form-control" id="contactText" rows="3"></textarea>
           </div>
           <button className="btn btn-outline-success" type="submit">Submit</button>
         </form>
    )
  }
}

export default Form;
