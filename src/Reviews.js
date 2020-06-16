import React from 'react';
import './App.css';

function Reviews(){
 // menyiapkan data dummy JSON
 const user = 
 [
   {
     "id": 1,
     "name": "Siapkah dia",
     "review": "Mantap lah ini bagus. walaupun mahal tapi bolehlah sekali kali kan",
     "photo": "https://images.pexels.com/photos/2635534/pexels-photo-2635534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
   },
   {
     "id": 2,
     "name": "Dia siapa",
     "review": "Mantap lah ini paling bagus. walaupun mahal bolehlah sekali kali kan",
     "photo": "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
   },
   {
     "id": 3,
     "name": "Apakah dia manusia",
     "review": "Mantap lah ini paling tapi. walaupun mahal tapi sekali kali kan",
     "photo": "https://images.pexels.com/photos/2692553/pexels-photo-2692553.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
   }
 ];
 const listReview = user.map((itemReview) =>
 <div key={itemReview.id} className="item">
     <img src={itemReview.photo} alt="ini orang"/>
   <div className="User">
     <h3>{itemReview.name}</h3>
     <p>{itemReview.review}</p>
   </div>
 </div>
 );
 return(
   <div className="Review-box">
     <h2>Review</h2>
     {listReview}
   </div>
 );
}

export default Reviews;