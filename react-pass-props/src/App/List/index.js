import { useState, useEffect } from "react";
import Items from "./Items";

export default function List(props) {
    const [backlog, setBacklog] = useState(['Trabajar', 'Estudiar', 'Descansar'])
    const [todo, setTodo] = useState([])
    const [ready, setReady] = useState([])
    
    useEffect(() => {
        if(backlog.length === 0 && todo.length === 0){
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
                    <Items   
                            listA={backlog} 
                            listB={todo} 
                            setListA={setBacklog} 
                            setListB={setTodo} 
                            moveItem={moveItem} />
                    <h2>Todo</h2>
                    <Items   
                            listA={todo} 
                            listB={ready} 
                            setListA={setTodo} 
                            setListB={setReady} 
                            moveItem={moveItem} />

                    <h2>Ready</h2>
                    <Items   
                            listA={ready} 
                            listB={backlog} 
                            setListA={setReady} 
                            setListB={setBacklog} 
                            moveItem={moveItem} />
            </div>
}
