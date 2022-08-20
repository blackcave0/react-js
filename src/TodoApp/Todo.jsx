import React from "react"
// import DisplayItems from "./DisplayItems"

const Todo = (props) => {
    // const deleteItem =()=> {console.log('deleted')};
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>todo list</h1>
          <br />
          <input
            type="text"
            placeholder="Add Item"
            onChange={props.itemEvent}
            value={props.inputList}
            autoFocus={true}

          />
          <button onClick={props.addItemButton}>Add Item</button>
          {/* <DisplayItems/> */}
        </div>
      </div>
    </>
  )
}

export default Todo
