import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"
import IT from "../assets/it.webp"
import ES from "../assets/es.webp"
import EN from "../assets/us.webp"
import FR from "../assets/fr.webp"

export default function Main() {

    const { films } = useContext(GlobalContext)

    const flagImages = {
        it: IT,
        en: EN,
        fr: FR,
        es: ES
    };


    return (
        <main>

            <ul>
                {
                    films.map(film => {

                        const flagImage = flagImages[film.original_language]

                        return <li key={film.id}>
                            <div>{film.name}</div>
                            <div>{film.original_name}</div>
                            <div>{film.vote_average}</div>
                            {flagImage && <img src={flagImage} alt="" />}
                        </li>
                    })
                }
            </ul>
        </main>
    )
}
