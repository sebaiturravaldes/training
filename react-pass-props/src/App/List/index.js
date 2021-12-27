import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Item from "./Item";

export default function List(props) {
    const [list, setList] = useState(['Trabajar', 'Estudiar', 'Descansar'])
    const [todoList, setTodoList] = useState([])
    const [ready, setReady] = useState([])
    
    useEffect(() => {
        if(list.length === 0 && todoList.length === 0){
                alert(':)')
        }
    }, [ready])

    const moveItem = (listA, listB, setListA, setListB, index)=> {
        const cloneList = listA
        const removed = cloneList.splice(index, 1)
        setListA([...cloneList])
        setListB([...listB, removed])
    }

    return <div>
                <h2>Backlog</h2>
                    <Item   
                            listA={list} 
                            listB={todoList} 
                            setListA={setList} 
                            setListB={setTodoList} 
                            moveItem={moveItem} />
                    <h2>Todo</h2>
                    <Item   
                            listA={todoList} 
                            listB={ready} 
                            setListA={setTodoList} 
                            setListB={setReady} 
                            moveItem={moveItem} />

                    <h2>Ready</h2>
                    <Item   
                            listA={ready} 
                            listB={list} 
                            setListA={setReady} 
                            setListB={setList} 
                            moveItem={moveItem} />
            </div>
}
