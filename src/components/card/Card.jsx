import IT from "../../assets/it.webp"
import ES from "../../assets/es.webp"
import EN from "../../assets/us.webp"
import FR from "../../assets/fr.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons"
import style from "../card/Card.module.css"


export default function Card({ item }) {

    const { title, original_title, name, original_name, vote_average, original_language, poster_path, overview } = item
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
    if (!poster_path) {
        return null
    }

    return (


        <div className={style.card}>
            <figure className={style.card_header}>
                <img src={`${IMG_URI}${poster_path}`} alt="" />
            </figure>

            <div className={style.card_body}>
                <h3 className={style.title}>Titolo: {title || name}</h3>
                <p className={style.sub_title}>Titolo originale: {original_title || original_name}</p>
                <div className={style.icons}>
                    <span>
                        Lingua:
                        {flagImages[original_language] ? (
                            <img src={flagImages[original_language]} alt="" height="20" />
                        ) : (
                            <p>{original_language}</p>
                        )}
                    </span>

                    <span>
                        Voto:
                        {stars.map((star, i) => (
                            <FontAwesomeIcon className={style.stars} key={i} icon={star} />
                        ))}
                    </span>
                </div>
                <p><strong>Trama: </strong>{overview}</p>
            </div>
        </div>




    )
}