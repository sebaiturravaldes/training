export default function Item(props) {
    const { listA, listB, setListA, setListB, moveItem} = props

    return <ul>
                {listA.map((value, index)=> (
                    <li 
                    key={value} 
                    onClick={()=>{moveItem(listA, listB, setListA, setListB, index)}}>
                        {value}
                    </li>
                ))}
        </ul>
}