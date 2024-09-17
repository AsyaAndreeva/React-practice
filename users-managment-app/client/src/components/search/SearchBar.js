export const SerachBar = () =>{
    return(
        <form className="search-form">
            <h2>
                <span>Users</span>
            </h2>
            <div>
                <input type="text" placeholder="Please,select the search criteria" name="search"></input>
                <button>Search</button>
            </div>
        </form>
    );
}