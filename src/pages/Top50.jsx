function Top50 (){
    return(
        <>
        <section className="container">
            <h2 className="text-center m-2">Top 50 Songs US!</h2>
            <p className="text-center m-1">Here is the top 50 songs as of October 2025 in the US streaming, information provided comes directly from Spotify top charts.</p>
        </section>
        <section className="container m-4">
            <div className="row">
                <div className="col-6">
                    <br />
                    <p className="text-center">Find your favorites here, ranging from Kendrick Lamar to Chappel Roan. At the bottom of the page here, we have a button to help sort the list to you're liking, whether that just be choosing random songs from the list, or sorting by artist. The world is your oyster.</p>
                    <div className="d-grid">
                        <button className="m-1 btn btn-dark">Full List</button>
                        <button className="m-1 btn btn-danger">Random</button>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search Artist" aria-label="Search"/>
                            <button class="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <div className="col-6">
                    <br />
                    <p className="text-center">placeholder for the list</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Top50