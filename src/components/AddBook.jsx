export default function AddBook(props){
    
    return (
        <button id="addBtn" style={props.BGColor} onClick={props.handleClick}>
            {props.text}
        </button>
    )
}