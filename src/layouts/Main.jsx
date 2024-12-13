import ItemList from "../components/ItemList"
import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"

export default function Main() {

    const { films, series } = useContext(GlobalContext)


    return (
        <main className="container">
            <ItemList items={films} />
            <ItemList items={series} />
        </main>
    )
}
