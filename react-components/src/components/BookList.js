import { Book } from "./Book"

export const BookList = (props) =>{
return(
    <ul>
        <li>
            <Book 
            title= {props.books[0].title}
            author = {props.books[0].author}
            />
        </li>
        <li>
            <Book 
            title= {props.books[1].title}
            author = {props.books[1].author}
            />
        </li>
        <li>
            <Book 
            title= {props.books[2].title}
            author = {props.books[2].author}
            />
        </li>
        <li>
            <Book 
            title= {props.books[3].title}
            author = {props.books[3].author}
            />
        </li>
    </ul>
)
}