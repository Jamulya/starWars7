import React,{useState} from 'react'
import ItemDetails from '../item-details';
import ItemList from '../item-list';
import Row from '../row';
import withSwapi from '../hoc';



const PeoplePage = () => {
const [state, setState] = useState({itemId: 1})


const NewItemList = withSwapi(ItemList)
const NewItemDetails = withSwapi(ItemDetails)





    const leftElement = <NewItemList setItemId={(id) => setState({itemId: id})}/>
    const rightElement = <NewItemDetails itemId={state.itemId}/>



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
    // <Row left={leftElement}  />
  )
}

export default PeoplePage;