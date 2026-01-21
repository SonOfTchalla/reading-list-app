import React from "react"

export default function Entry(props){
    // Create book rating variable using State
    const [rating, setRating] = React.useState(Number(props.rating));

    function add(){
        if(rating < 10)
            setRating(prev => prev + 1) 
    }

    function subtract(){
        if(rating > 0)
            setRating(prev => prev - 1)
    }

    return (
        <>
        <article>
            <img src={props.img.src} alt={props.img.alt} />

            <div>
                <h1>{props.title}</h1>
                <p><strong>Author:</strong> {props.author}</p>
                <p>
                    <strong>Rating:</strong> {rating}/10 <button onClick={add}>+</button>
                    <button onClick={subtract}>-</button>
                </p>
                <p><strong>Status:</strong> {props.status}</p>
                <p><strong>Synopsis:</strong> {props.synopsis}</p>
            </div>
        </article>
        </>
    )
}