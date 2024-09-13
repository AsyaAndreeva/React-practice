export const TodoItem = (props) =>{
    return(
        <tr>
            <td>{props.title}</td>
            <td>{props.isCompleted}</td>
            <td>
                <button onClick={() => props.onClick(props)}>Change status</button>
            </td>
        </tr>
    )
}