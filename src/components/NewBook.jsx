export default function NewBook({addEntry, toggle, entries}){
    function addNewBook(formData){
        let title = formData.get("title")
        title = title.split(" ").join("+").toLowerCase()
        console.log(title)
        fetch(`https://openlibrary.org/search.json?q=${title}`)
            .then(res => res.json())
            .then(function(data){
                addEntry((prev) => 
                    [
                        ...prev,
                        {
                            "id":entries[entries.length - 1].id + 1,
                            "img": {
                                "src": `https://covers.openlibrary.org/b/id/${data.docs[0].cover_i}-M.jpg`,
                                "alt": formData.get("imageAlt")
                            },
                            "title": data.docs[0].title,
                            "author": data.docs[0].author_name[0],
                            "rating": 0,
                            "status": formData.get("bookStatus"),
                            "synopsis": "[INSERT SYNOPSIS HERE]"
                        }
                    ]
                )
                console.log(entries)
                toggle()
            })
            /*
        addEntry((prev) => 
            [
                ...prev,
                {
                    "id":entries[entries.length - 1].id + 1,
                    "img": {
                        "src": formData.get("imageSrc"),
                        "alt": formData.get("imageAlt")
                    },
                    "title":title,
                    "author": formData.get("author"),
                    "rating": 0,
                    "status": formData.get("bookStatus"),
                    "synopsis": formData.get("synopsis")
                }
            ]
        )
        console.log(entries)
        toggle()
        */
    }
    
    return (
        <form action={addNewBook}>
            <h1>Add a new book</h1>
            <label htmlFor="title">
                Title: 
                <input placeholder="e.g. A Game of Thrones" id="title" name="title" type="text" required/>
            </label>
            {/*
            <label htmlFor="author">
                Author: 
                <input placeholder="e.g. HG Wells" id="author" name="author" type="text" required/>
            </label>
            */}
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
            {/*
            <label htmlFor="synopsis">
                Synopsis: 
                <textarea placeholder="Provide a blurb for the book" id="synopsis" name="synopsis" type="text" required/>
            </label>
            */}
            <button id="submitBtn" type="submit">Submit</button>
        </form>
    )
}