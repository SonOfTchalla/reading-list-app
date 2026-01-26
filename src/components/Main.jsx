import Entry from "./Entry"
import sampleData from "../sampleData"
import AddBook from "./AddBook"
import React from "react"
import NewBook from "./NewBook"

export default function Main(){
    const [entries, addEntry] = React.useState(sampleData);
    
    const entryData = entries.map((entry)=>(
     <Entry 
        key={entry.id}
        img={entry.img}
        title={entry.title}
        author={entry.author}
        rating={entry.rating}
        status={entry.status}
        synopsis={entry.synopsis}
     />   
    ))

    const [addingBook, setAddingBook] = React.useState(false)
    const [btnText, setBtnText] = React.useState("Add New Book")
    const [bgColor, setbgColor] = React.useState({backgroundColor:"orange"})
    
    function toggle(){
        setAddingBook(!addingBook)
        setBtnText((prev)=>{
            if(prev === "⬅ Back"){
                return "Add New Book"
            } else{
                return "⬅ Back"
            }
        })
        setbgColor((prev)=>{
            if(prev.backgroundColor === "orange"){
                return {backgroundColor:"red"}
            } else{
                return {backgroundColor:"orange"}
            }
        })
    }

    return (
        <>
        {!addingBook && entryData}
        <AddBook handleClick={toggle} text={btnText} BGColor={bgColor}/>

        {addingBook && 
            <NewBook addEntry={addEntry} toggle={toggle} entries={entries}/>
        }
        </>
    )
}