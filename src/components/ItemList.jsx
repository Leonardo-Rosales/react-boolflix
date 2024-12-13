import Card from "./Card"

export default function ItemList({ items = [], title }) {

    return (
        <section>
            <div>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <Card item={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}