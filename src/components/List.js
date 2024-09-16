import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={2024}/>
                <Item marca="Fiat" ano_lancamento={1985}/>
                <Item marca="Renault" ano_lancamento={2007}/>
                <Item ano_lancamento={400}/>
                <Item marca="Tesla"/>
            </ul>
        </>
    )
}

export default List