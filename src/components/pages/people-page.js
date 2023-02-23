import React,{useState} from 'react'
import ItemDetails from '../item-details';
import ItemList from '../item-list';
import Row from '../row';

const PeoplePage = () => {
const [state, setState] = useState({itemId: 1})

    const leftElement = <ItemList setItemId={(id) => setState({itemId: id})}/>
    const rightElement = <ItemDetails itemId={state.itemId}/>



  return (
//     <div className="row mb2">
//     <div className="col-md-6">
//       <ItemList />
//     </div>
//     <div className="col-md-6">
//       <ItemDetails />
//     </div>
//   </div>

    <Row left={leftElement} right={rightElement} />
  )
}

export default PeoplePage;