import React from 'react';


  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", phone:"", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { name, email,phone, message } = this.state;
      return (
        <form onSubmit={this.handleSubmit} className="p-5">

               <div className="form-group">
                    <label htmlFor="contactName">Name</label>
                    <input className="form-control" id="contactName" type="text" name="name" value={name} onChange={this.handleChange} />
               </div>

               <div className="form-group">
                    <label htmlFor="contactEmail">Email</label>
                    <input className="form-control" id="contactEmail" type="email" name="email" value={email} onChange={this.handleChange} />
               </div>
               <div className="form-group">
                    <label htmlFor=""></label>
                    <input type="number" name="phone" className="form-control" id="contactNumber" value={phone} onChange={this.handleChange}/>
               </div>
               <div className="form-group">
                    <label htmlFor="message"></label>
                    <textarea name="message" className="form-control" id="message" value={message} onChange={this.handleChange} />
               </div>


            <button type="submit" className="btn btn-outline-success">Submit</button>

        </form>
      );
    }
  }

  export default Form;
