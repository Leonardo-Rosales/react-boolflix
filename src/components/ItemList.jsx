import Card from "../components/card/Card"

export default function ItemList({ items = [] }) {


    return (
        <section>
            <div>
                <ul className="card-list">
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