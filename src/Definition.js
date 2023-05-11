function Definition({loading, data, word, error}) {

    // displays before any word searched
    if(!word){
        return <h2>Search for a word in the bar above</h2>
    }

    //displays 
    if(loading && !data){
        return <h1>One moment, Loading...</h1>
    }

    if(error){
        return <h1>An Error has occured</h1>
    }

    return (  
        <>
            <h1>{data[0].word}</h1>

            <br />

            <div>
                {data[0].phonetics.map((text, index) => (
                    <span key={index} > {text.text} </span>
                ))}
            </div>

            <br />

            <div class="fun" >
                {data[0].meanings.map((meaning, index) => (
                    <div key={meaning.partOfSpeech}>
                        <h2>{meaning.partOfSpeech}</h2>

                        <br />

                        {meaning.definitions.map((obj, index) => (
                            <ul key={index}>
                                <li>{obj.definition}</li>
                            </ul>
                        ))}
                    </div>
                ))}
            </div>

            <div>
                {data[0].sourceUrls.map((source, index) => (
                    <span key={index}>
                        Source: <a href={source}> {source} </a>
                    </span>
                ))}
            </div>
        </>
    );
}

export default Definition;