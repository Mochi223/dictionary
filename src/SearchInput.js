

function SearchInput({handleSubmit, searchWord, setSearchWord}) {
    return ( 
        <form onSubmit={(e) => handleSubmit(e)} >
            <input 
                type="text" 
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
      />
        </form>
     );
}

export default SearchInput;