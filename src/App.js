import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { addWish, anotherName } from './actions/myaction';


function App() {

  const dispatch = useDispatch();
  
  const name = useSelector(state=>state.name)
  const wish = useSelector(state=>state.wish)

  const mywish = wish.map(item=>{
    return <h2 key={Math.random()}>{item}</h2>
  })

  return (
    <div className="App">
      <h1>App Component</h1>
      <h1>My name is {name}</h1>
      {mywish}
      <button onClick={()=>{dispatch(anotherName())}}>Change it</button>
      <button onClick={()=>{dispatch(addWish())}}>Add Wish</button>
    </div>
  );
}

// const mapStateToProps = (state) =>{
//   return {
//     myname:state.name,
//     mywish:state.wish
//   }
// }

// const mapDispatchToProps = (dispatch) =>{
//   return{
//     changeName:()=>{dispatch(anotherName())},
//     addWish:(wish)=>{dispatch(addWish(wish))}
//   }
// }

export default App;
