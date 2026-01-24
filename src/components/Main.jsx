import Entry from "./Entry"
import sampleData from "../sampleData"
import AddBook from "./AddBook"
import React from "react"

export default function Main(){
    const entryData = sampleData.map((entry)=>(
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
    
    function toggle(){
        setAddingBook(!addingBook)
        setBtnText((prev)=>{
            if(prev === "Back"){
                return "Add New Book"
            } else{
                return "Back"
            }
        })
    }

    return (
        <>
        {!addingBook && entryData}
        <AddBook handleClick={toggle} text={btnText} />

        {addingBook &&
        <form action="">
            <h1>Add a new book</h1>
            <label htmlFor="image">
                Image URL: 
                <input placeholder="https://example.com/img.png" id="name" name="image" type="text" />
            </label>
            <label htmlFor="title">
                Title: 
                <input placeholder="e.g. A Game of Thrones" id="title" name="title" type="text" />
            </label>
            <label htmlFor="author">
                Author: 
                <input placeholder="e.g. HG Wells" id="author" name="author" type="text" />
            </label>
            <label htmlFor="status">
                Status: 
                <select defaultValue="">
                    <option value="" disabled="disabled">---Select a book status---</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="dropped">Dropped</option>
                    <option value="completed">Completed</option>
                </select>
            </label>
            <label htmlFor="synopsis">
                Synopsis: 
                <textarea placeholder="Provide a blurb for the book" id="synopsis" name="synopsis" type="text" />
            </label>
            <button id="submitBtn" type="submit">Submit</button>
        </form>
        }
        </>
    )
}