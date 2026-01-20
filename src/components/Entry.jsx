export default function Entry(props){

    return (
        <>
        <article>
            <img src={props.img.src} alt={props.img.alt} />

            <div>
                <h1>{props.title}</h1>
                <p><strong>Author:</strong> {props.author}</p>
                <p><strong>Rating:</strong> {props.rating}/10</p>
                <p><strong>Status:</strong> {props.status}</p>
                <p><strong>Synopsis:</strong> {props.synopsis}</p>
            </div>
        </article>
        </>
    )
}