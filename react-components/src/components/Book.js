export const Book =(props) =>{
    return(
        <article>
            <h2>{props.title}</h2>
            <footer>
                <span>{props.author}</span>
            </footer>
        </article>
    );
}