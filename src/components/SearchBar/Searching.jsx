import useFetch from "./useFetch";

function Searching() {
    const {data, loading, error, refetch} = useFetch("https://localhost:7260/api/games")

    if (loading) return  <h1>Loading...</h1>;

    if (error) console.log(error);
    
    return(
        <div className="Searching">
            <h1>
                {data?.name} : {data?.console}
            </h1>

            <button onClick={refetch}>SEARCH</button>
        </div>
    );
}

export default Searching;






