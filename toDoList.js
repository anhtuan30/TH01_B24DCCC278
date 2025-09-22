import React, {useState} from "react";
function ToDoList() {

    const [item, setItem] = useState("");
    const [items, setItems] = useState([]);

    const addItem = () => {       
        setItems([...items, item]);
        setItem("")
        ;
    }  
    
    const deleteItem = (index) => {
        const newItems = items.filter((_, i) => index !== i);
        setItems(newItems);
    }

    return (
        <div style ={{pading: 20}}>
            <h2>Bai 1: To-do List</h2>
            <input
             type = 'text'
             value = {item}
             onChange={(e) => 
                setItem(e.target.value)}
             placeholder = 'Nhap cong viec'
            />
            <button onClick = {addItem} > Them </button>
            <ul>
                {items.map((t, index) => (
                    <li key = {index}>
                        {t}
                        <button onClick = {()=>
                        deleteItem(index)}>Xoa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ToDoList;