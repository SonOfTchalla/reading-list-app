export default function NewBook({addEntry, toggle, entries}){
    function addNewBook(formData){
        addEntry((prev) => 
            [
                ...prev,
                {
                    "id":entries[entries.length - 1].id + 1,
                    "img": {
                        "src": formData.get("imageSrc"),
                        "alt": formData.get("imageAlt")
                    },
                    "title":formData.get("title"),
                    "author": formData.get("author"),
                    "rating": 0,
                    "status": formData.get("bookStatus"),
                    "synopsis": formData.get("synopsis")
                }
            ]
        )
        console.log(entries)
        toggle()
    }
    
    return (
        <form action={addNewBook}>
            <h1>Add a new book</h1>
            <label htmlFor="imageSrc">
                Image URL: 
                <input placeholder="https://example.com/img.png" id="imageSrc" name="imageSrc" type="text" required/>
            </label>
            <label htmlFor="imageAlt">
                Image Alt: 
                <input placeholder="https://example.com/img.png" id="imageAlt" name="imageAlt" type="text" required/>
            </label>
            <label htmlFor="title">
                Title: 
                <input placeholder="e.g. A Game of Thrones" id="title" name="title" type="text" required/>
            </label>
            <label htmlFor="author">
                Author: 
                <input placeholder="e.g. HG Wells" id="author" name="author" type="text" required/>
            </label>
            <label htmlFor="status">
                Status: 
                <select id="status"
                name="bookStatus"
                defaultValue="" required>
                    <option value="" disabled="disabled">---Select a book status---</option>
                    <option value="Currently Reading">Currently Reading</option>
                    <option value="Dropped">Dropped</option>
                    <option value="Completed">Completed</option>
                </select>
            </label>
            <label htmlFor="synopsis">
                Synopsis: 
                <textarea placeholder="Provide a blurb for the book" id="synopsis" name="synopsis" type="text" required/>
            </label>
            <button id="submitBtn" type="submit">Submit</button>
        </form>
    )
}