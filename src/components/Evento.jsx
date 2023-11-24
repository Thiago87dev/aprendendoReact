function Evento ({numero}){

    function meuEvento(){
        console.log(`Opa, fui ativado ${numero}`);
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Ativar!</button>

            {/* função direto no evento */}
            <p>Clique para disparar outro evento</p>
            <button onClick={()=> console.log('Outro evento')}>Ativar!</button>
        </div>
    )
}

export default Evento