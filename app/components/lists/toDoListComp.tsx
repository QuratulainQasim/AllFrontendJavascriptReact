import React from "react";

interface TodoListCompprops {
    onSelect: () => void;
    text: string;
    link: string;
    key: number;
    id: number;
    pic:string,
}

const TodoListComp = (props: TodoListCompprops) => {
    return (
        <>
            <div className="todo-style">
                {props.id == 0 && <img

                    src={props.link}
                    alt=""
                    className="cross-icon"
                    onClick={() => props.onSelect()}
                />}
                {props.id == 1 && <img

                    src={props.pic}
                    alt=""
                    className="cross-icon"
                    onClick={() => props.onSelect()}
                />}
                <li>{props.text}</li>
            </div>
        </>
    );
};

export default TodoListComp;