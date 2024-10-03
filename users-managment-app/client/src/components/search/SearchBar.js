import styles from './SearchBar.module.css'

export const SerachBar = () =>{
    return(
        <form className={styles.searchForm}>
            <h2>
                <span>Users</span>
            </h2>
            <div>
                <input type="text" placeholder="Please,select the search criteria" name="search"></input>
                <button>Search</button>
            </div>
            <div>
                <h4>Search criteria</h4>
                <div className={styles.dropdown}>
  <button className={styles.dropbtn}>Dropdown</button>
  <div className={styles.dropdownContent}>
  </div>
</div>
            </div>
        </form>
    );
}