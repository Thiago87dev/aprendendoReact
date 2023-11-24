import Item from "./Item"

function List (){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <li>Fiat - 1999</li>
                <Item marca='Ferrari' ano_lancamento={2010}/>
                <Item marca='Renault' ano_lancamento={2020}/> 
                <Item /> 
            </ul>
        </>
    )
}

export default List