import IT from "../assets/it.webp"
import ES from "../assets/es.webp"
import EN from "../assets/us.webp"
import FR from "../assets/fr.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons"


export default function Card({ item }) {

    const { title, original_title, name, original_name, vote_average, original_language, poster_path } = item
    const IMG_URI = 'https://image.tmdb.org/t/p/w154'

    const flagImages = {
        it: IT,
        en: EN,
        fr: FR,
        es: ES
    }

    let vote = Math.ceil(vote_average / 2)
    // console.log(vote)
    const stars = []

    for (let i = 0; i < 5; i++) {

        if (i < vote) {
            stars.push(faStarSolid)
        } else {
            stars.push(faStarRegular)
        }
    }


    return (
        <div>

            <figure>
                <img src={`${IMG_URI}${poster_path}`} alt="" />
            </figure>

            <h3>{title || name}</h3>
            <p>{original_title || original_name}</p>

            {
                flagImages[original_language] ?
                    <img src={flagImages[original_language]} alt="" /> :
                    <p>{original_language}</p>
            }

            <div>
                {stars.map((star, i) => (
                    <FontAwesomeIcon key={i} icon={star} />
                ))}
            </div>

        </div>
    )
}