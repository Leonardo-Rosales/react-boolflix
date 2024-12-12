
export default function Header({ filterFilms, searchQuery, setSearchQuery, handleSearch }) {

    return (
        <header>

            <div>
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