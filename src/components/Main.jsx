import Entry from "./Entry"
import sampleData from "../sampleData"

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

    return (
        <>
        {entryData}
        </>
    )
}