import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"
import IT from "../assets/it.webp"
import ES from "../assets/es.webp"
import EN from "../assets/us.webp"
import FR from "../assets/fr.webp"


export default function Card({ item }) {

    const { title, original_title, name, original_name, vote_average, original_language, poster_path } = item
    const IMG_URI = 'https://image.tmdb.org/t/p/w154'

    const flagImages = {
        it: IT,
        en: EN,
        fr: FR,
        es: ES
    }


    return (
        <div>
            <img src={`${IMG_URI}${poster_path}`} alt="" />
            <h3>{title || name}</h3>
            <p>{original_title || original_name}</p>

            {
                flagImages[original_language] ?
                    <img src={flagImages[original_language]} alt="" /> :
                    <p>{original_language}</p>
            }
            <p>{vote_average}</p>
        </div>
    )
}