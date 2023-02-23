import React,{useState, useEffect} from 'react';
import   './item-details.css';
import SwapiService from '../../services/swapi-service';

const ItemDetails = ({ itemId }) => {
  const [state, setState] = useState({data: {}})
  const swapi = new SwapiService()



  useEffect(() =>{
      console.log('--->', itemId);
    swapi.getPerson(itemId)
    .then(data => {
      setState({data: data})
    })
  },
  [itemId]
  )

  const {id, name, gender, birthYear, eyeColor} = state.data
  const itemImg = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`

 

  return(
          <div className="person-details card">
        <img className="person-image"
          src={itemImg}/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );

}



export default ItemDetails;





// export default class PersonDetails extends Component {


//   render() {

//     return (
//       <div className="person-details card">
//         <img className="person-image"
//           src='https://starwars-visualguide.com/assets/img/characters/3.jpg'/>

//         <div className="card-body">
//           <h4>R2-D2</h4>
//           <ul className="list-group list-group-flush">
//             <li className="list-group-item">
//               <span className="term">Gender</span>
//               <span>male</span>
//             </li>
//             <li className="list-group-item">
//               <span className="term">Birth Year</span>
//               <span>43</span>
//             </li>
//             <li className="list-group-item">
//               <span className="term">Eye Color</span>
//               <span>red</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }
