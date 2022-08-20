import React from "react"

const DisplayItems = (props) => {
  return (
    <>
      <div className="todo_style" style={{ display: "flex" }}>
        <button
          onClick={() => {
            props.onSelectItem(props.id)
          }}
        >
          deleTe
        </button>

        <li>{props.addItem}</li>
        {/* {index} */}
      </div>
    </>
  )
}

export default DisplayItems
