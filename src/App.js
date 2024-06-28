import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_USER_PANDING, GET_USER_PANDING, POST_USER_PANDING, UPDATE_USER_PANDING } from './redux-saga/admin/action';

const App = () => {

  let user = useSelector((state) => state.adminReducer)
  console.log(user);

  let dispatch = useDispatch();
  let name = useRef();
  let prise = useRef();
  const [view, setview] = useState({})
  const [model, setmodel] = useState("none")


  useEffect(() => {
    dispatch({ type: GET_USER_PANDING })

  }, [])

  let adduser = () => {
    let user = {
      name: name.current.value,
      prise: prise.current.value,
    }
    // console.log(user);
    dispatch({ type: POST_USER_PANDING, payload: user })
  }

  // for delete

  function deleteUser(id) {
    dispatch({ type: DELETE_USER_PANDING, payload: id });

  }

  //update
  let viewdata = (val) => {
    setview(val)
    setmodel("block")
  }

  let handleview = (e) => {
    setview({ ...view, [e.target.name]: e.target.value })
  }

  let save = () => {
    dispatch({ type: UPDATE_USER_PANDING, payload: view })
    setmodel("none")
  }

  return (
    <>
      <div className="box">
        <input type="text" ref={name} />
        <input type="number" ref={prise} />
        <button onClick={adduser}>add</button>
      </div>
      <div className="model" style={{ display: `${model}` }}>
        <label>name : <input type="text" name="name" value={view.name} onChange={handleview} /></label>
        <label>prise : <input type="number" name="prise" value={view.prise} onChange={handleview} /></label>
        <button onClick={save}>save User</button>
      </div>

      <table border="1px" cellPadding="10px" >
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>delete</th>
            <th>update</th>
          </tr>
        </thead>
        <tbody>
          {
            user.users?.map((val, index) => {
              return (
                <React.Fragment key={index}>
                  <tr>
                    <h1>{val.name}</h1>
                    <h2>{val.prise}</h2>
                    <button onClick={() => deleteUser(val.id)}>delete</button>
                    <td><button onClick={() => viewdata(val)}>view</button></td>
                  </tr>
                </React.Fragment>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App;


