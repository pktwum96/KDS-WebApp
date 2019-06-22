import React from 'react';

const encode = (data) => {
     return Object.keys(data)
               .map(key=> encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
               .join("&");
}
class Form extends React.Component {
     constructor(props){
          super(props);
          this.state={
               name:"",
               email:"",
               phone:0,
               message:""
          }
          this.handleChange= this.handleChange.bind(this);
          this.handleSubmit= this.handleSubmit.bind(this);
     }

     handleChange(e){
          console.log(e.target.name);
          this.setState({[e.target.name]:e.target.value })
     };

     handleSubmit(e){
          fetch("/",{
               method: "POST",
               headers: { "Content-Type": "application/x-www-form-urlencoded"},
               body: encode({"form-name": "contact", ...this.state})
          })
          .then(()=> alert("Success!"))
          .catch(error => alert(error))
          e.preventDefault();
     }
     render() {
          const {name,email,phone,message} = this.state;
          return (
              <form name="contact" className="pb-5" data-netlify="true">
                <div className="form-group">
                  <label htmlFor="contactName">Name</label>
                  <input type="text" name="name" className="form-control" id="contactName" value={name} onChange={this.handleChange} placeholder="Akwasi Mintah"/>
                </div>
                  <div className="form-group">
                    <label htmlFor="contactEmail">Email address</label>
                    <input type="email" name="email" className="form-control" value={email} onChange={this.handleChange} id="contactEmail" placeholder="name@example.com"/>
                  </div>
                    <div className="form-group">
                      <label htmlFor="contactNumber">Phone Number</label>
                      <input type="number" name="phone" className="form-control" value={phone} onChange={this.handleChange} id="contactNumber" placeholder="024194119"/>
                    </div>
                <div className="form-group">
                  <label htmlFor="contactText">Message</label>
                  <textarea  name="message"  onChange={this.handleChange} className="form-control" id="contactText" rows="3" value={message}></textarea>
                </div>
                <button className="btn btn-outline-success" type="submit">Submit</button>
              </form>
          )
     }
}

export default Form;
