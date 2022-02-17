import React, {useState, useEffect} from 'react';

export default function ListaCarros(){

    const[carros,setcarros]=useState([])

    useEffect(()=>{
            fetch('https://cfbcursosapireactexemplo1.brcampos.repl.co/')
            .then((res)=>res.json())
            .then(
                (resultado)=>{
                    setcarros(resultado)
                }
            )
        }
    )
    return(
    <>
    <div>
        {
            carros.map(carro=>
                <div key={carro.id}>{carro.id}{carro.marca}{carro.modelo}</div>
                )
        }
    </div>
    </>
    );
}
