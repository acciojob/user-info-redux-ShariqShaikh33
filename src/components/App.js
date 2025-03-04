
import React from "react";
import './../styles/App.css';
import { useSelector,useDispatch } from "react-redux";
import { updateName,updateEmail } from "../Redux Store/Reducers/Slice";

const App = () => {

  const name = useSelector((state)=>state.Name.name);
  const email = useSelector((state)=>state.Name.email);
  const dispatch = useDispatch();

  return (
    <div>
        {/* Do not remove the main div */}
        <form>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={(e)=>dispatch(updateName(e.target.value))}></input>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" onChange={(e)=>dispatch(updateEmail(e.target.value))}></input>
        </form>

        <h1>User Information</h1>
        <div className="output">
          <div className="output">Name - {name}</div>
          <div className="output">Email -{email}</div>
        </div>
    </div>
  )
}

export default App
