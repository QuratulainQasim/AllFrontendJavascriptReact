// parent component (TodoList.js)
import React, { useState } from "react";
import "./design.css";
import TodoListComp from "./toDoListComp";

const TodoList = () => {
    const [inputList, setInputList] = useState<string>("");
    const [items, setItems] = useState<string[]>([]);

    const itemFunction = (event: any) => {
        setInputList(event.target.value);
    };

    const listOfItem = () => {
        setItems((oldItems) => { 
            return [inputList, ...oldItems];
        });
        setInputList("");
    };

    const deleteItems = (id:number) => {
        setItems((oldItems) => {
            return oldItems.filter((fj, index) => index !== id);
        });
    };

    return (
        <>
            <div className="main-div">
                <br />
                <div className="center-div">
                    <h1 className="list-head">ToDo List</h1>
                    <br />
                    <input
                        className="input"
                        type="text"
                        placeholder="Add an item"
                        value={inputList}
                        onChange={(ev)=>itemFunction(ev)}
                    />
                    <button className="button" onClick={listOfItem}>
                        +
                    </button>
                    <ol>
                        {items.map((passItem, index) => (
                            <TodoListComp
                                key={index}
                                id={index}
                                text={passItem}
                                link={
                                    "/crossimg.jpg"
                                }
                                
                                pic="/tick.jpg"
                                
                                onSelect={() => deleteItems(index)} // Corrected the prop name
                            />
                        ))}
                    </ol>
                </div>
            </div>
             <br /><br />
        </>
    );
};

export default TodoList;
