export default function AddBook(props){
    
    return (
        <button id="addBtn" onClick={props.handleClick}>
            {props.text}
        </button>
    )
}