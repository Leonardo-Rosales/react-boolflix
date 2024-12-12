import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"

export default function Main() {

    const { films } = useContext(GlobalContext)

    return (
        <main>
            <ul>
                {
                    films.map(film => {
                        return <li key={film.id}>
                            <div>{film.name}</div>
                            <div>{film.original_name}</div>
                            <div>{film.original_language}</div>
                            <div>{film.vote_average}</div>
                        </li>
                    })
                }
            </ul>
        </main>
    )
}
