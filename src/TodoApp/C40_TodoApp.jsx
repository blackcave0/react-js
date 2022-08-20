import React, {useState} from "react"
import DisplayItems from "./DisplayItems";
import Todo from "./Todo";

const C40_TodoApp = () => {
    //* creating state for input tag
    const [inputList, setInputList] = useState('');
    //* storing value in inputList 
    const itemEvent = e => setInputList(e.target.value);
    
    //* Button and adding item in empty array 
    const [addItem, setItem]= useState([]);
    const addItemButton =()=>{
        //* oldItem access object and Arrays and access value setItem
        setItem((oldItems)=>{
            return [...oldItems, inputList]
        });
        setInputList('')
    }

    //! Deleting Item 

    const deleteItem =(id)=> {
        setItem((oldItems)=>{
            return oldItems.filter((array, index)=>{
                return index !== id;
            })
        })
    };
    
    return ( 
        <>
            <Todo
               itemEvent={itemEvent} 
               addItemButton={addItemButton}
               inputList={inputList}
               //    deleteItem={deleteItem}
            /> 

            <ol type="none" style={{listStyle : 'none',}}>
            {
                addItem.map((addedItems, index)=>{
                    return (
                        <DisplayItems 
                            addItem={addedItems}
                            // deleteItem={deleteItem}
                            key={index}
                            id={index}
                            onSelectItem={deleteItem}
                        />
                    )
                })
            }
            </ol>
        </>
    )
}

export default C40_TodoApp