import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"
import IT from "../assets/it.webp"
import ES from "../assets/es.webp"
import EN from "../assets/us.webp"
import FR from "../assets/fr.webp"

export default function Main() {

    const { films, series } = useContext(GlobalContext)

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
                            <div>{film.title}</div>
                            <div>{film.original_title}</div>
                            <div>{film.vote_average}</div>
                            {flagImage && <img src={flagImage} alt="" />}
                        </li>
                    })
                }
            </ul>

            <ul>
                {
                    series.map(serie => {

                        const flagImage = flagImages[serie.original_language]

                        return <li key={serie.id}>
                            <div>{serie.name}</div>
                            <div>{serie.original_name}</div>
                            <div>{serie.vote_average}</div>
                            {flagImage && <img src={flagImage} alt="" />}
                        </li>
                    })
                }
            </ul>
        </main>
    )
}
