import React from 'react';
import {Link} from 'react-router-dom';

class Leadership extends React.Component {
     render(){
          return (
               <div id="Leadership" className="py-5">
               <div className="container text-center">
               <div className="row">
               <div className="col-md-4">

               <div className="profile-body my-3">
               <div className="photo">
               <img src="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
               className="image--cover" alt="kds-member"/>
               </div>
               <div className="profile">
               <h1 className="username">Percy Ohene Nyanteh</h1>
               <h2 className="profession"> President </h2>
               <p className="descricao">Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que
               pode alegrar sua vidis. Quem manda na minha terra sou euzis! Nullam volutpat risus nec leo commodo, ut
               interdum diam laoreet. Sed non consequat odio. Suco
               de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.</p>

               <div className="socialmedia">
               <a href="/" className="button-facebook"><i className="fab fa-facebook-square"></i></a>
               <a href="/" className="button-instagram"><i className="fab fa-instagram"></i></a>
               <a href="/" className="button-twitter"><i className="fab fa-twitter-square"></i></a>
               </div>
               </div>
               </div>
               </div>

               <div className="col-md-4">

               <div className="profile-body my-3">
               <div className="photo">
               <img src="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
               className="image--cover" alt="kds-member"/>
               </div>
               <div className="profile">
               <h1 className="username">Esinam Osei-Bonsu</h1>
               <h2 className="profession"> Vice-President </h2>
               <p className="descricao">Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que
               pode alegrar sua vidis. Quem manda na minha terra sou euzis! Nullam volutpat risus nec leo commodo, ut
               interdum diam laoreet. Sed non consequat odio. Suco
               de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.</p>

               <div className="socialmedia">
               <a href="/" className="button-facebook"><i className="fab fa-facebook-square"></i></a>
               <a href="/" className="button-instagram"><i className="fab fa-instagram"></i></a>
               <a href="/" className="button-twitter"><i className="fab fa-twitter-square"></i></a>
               </div>
               </div>
               </div>
               </div>

               <div className="col-md-4">

               <div className="profile-body my-3">
               <div className="photo">
               <img src="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
               className="image--cover" alt="kds-member"/>
               </div>
               <div className="profile">
               <h1 className="username">Ida Masley</h1>
               <h2 className="profession"> Electoral Commissioner </h2>
               <p className="descricao">Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que
               pode alegrar sua vidis. Quem manda na minha terra sou euzis! Nullam volutpat risus nec leo commodo, ut
               interdum diam laoreet. Sed non consequat odio. Suco
               de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.</p>

               <div className="socialmedia">
               <a href="/" className="button-facebook"><i className="fab fa-facebook-square"></i></a>
               <a href="/" className="button-instagram"><i className="fab fa-instagram"></i></a>
               <a href="/" className="button-twitter"><i className="fab fa-twitter-square"></i></a>
               </div>
               </div>
               </div>
               </div>
               </div>
               <hr/>
               <Link to='/members'><button className="btn btn-outline-secondary">See all members</button></Link>

               </div>
               </div>
          )
     }
}

export default Leadership;
