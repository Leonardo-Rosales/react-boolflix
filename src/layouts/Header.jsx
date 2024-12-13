
export default function Header({ filterFilms, searchQuery, setSearchQuery, handleSearch }) {

    return (
        <header>

            <div className="nav-bar">

                <ul className="list-link">
                    <li>
                        <a href="">Boolflix</a>
                    </li>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Serie TV</a>
                    </li>
                    <li>
                        <a href="">Originali</a>
                    </li>
                    <li>
                        <a href="">Aggiunti di recente</a>
                    </li>
                    <li>
                        <a href="">La mia Lista</a>
                    </li>
                </ul>

                <form onSubmit={filterFilms} action="">
                    <input
                        type="text"
                        placeholder="Cerca un film..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={handleSearch}>Cerca</button>
                </form>

            </div>

        </header>
    )
}