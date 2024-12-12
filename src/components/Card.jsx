import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"
import IT from "../assets/it.webp"
import ES from "../assets/es.webp"
import EN from "../assets/us.webp"
import FR from "../assets/fr.webp"

export default function Card() {

    const { films, series } = useContext(GlobalContext)

    const flagImages = {
        it: IT,
        en: EN,
        fr: FR,
        es: ES
    }

    return (

        <ul>
            <li>
                {
                    films.map(film => {

                        const flagImage = flagImages[film.original_language]

                        return <ul key={film.id}>
                            <li>{film.title}</li>
                            <li>{film.original_title}</li>
                            <li>{film.vote_average}</li>
                            {flagImage && <img src={flagImage} alt="" />}
                        </ul>
                    })
                }
            </li>


            <li>
                {
                    series.map(serie => {

                        const flagImage = flagImages[serie.original_language]

                        return <ul key={serie.id}>
                            <li>{serie.name}</li>
                            <li>{serie.original_name}</li>
                            <li>{serie.vote_average}</li>
                            {flagImage && <img src={flagImage} alt="" />}
                        </ul>
                    })
                }
            </li>
        </ul>
    )
}