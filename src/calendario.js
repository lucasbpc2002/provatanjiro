import React from "react"
import './App.css';

const calendario=()=>{
    return(
        <section>
        <center>
      <h3 className="h">Calendário</h3>
          </center>
      <h4 className="h" id="calen"> 2021.1</h4>
      <div className="calendario">
          <h6>14/05/2021 à 21/05/2021 </h6>
          <p> → Matrícula para o período 2021.1. </p>
          <h6>07/06/2021 à 08/06/2021</h6>
          <p> → Re-matrícula para o período 2021.1.</p>
          <h6>07/06/2021</h6>
          <p> → Início do período letivo 2021.1.</p>
          <h6>14/06/2021</h6>
          <p> → Início do período trancamento de turma 2021.1.</p>
          <h6>16/07/2021</h6>
          <p> → Término do período trancamento de turma 2021.1.</p>
          <h6>31/10/2021</h6>
          <p> → Término do período trancamento de turma 2021.1.</p>
      </div>
  
      <h4 className="h" id="calen"> 2021.2</h4>
      <div className="calendario">
          <h6> 30/09/2021 à 07/10/2021 </h6>
          <p> → Matrícula para o período 2021.2. </p>
          <h6> 18/10/2021 à 20/10/2021</h6>
          <p> → Re-matrícula para o período 2021.2.</p>
          <h6>04/10/2021</h6>
          <p> → Início do período letivo 2021.2.</p>
          <h6>25/10/2021</h6>
          <p> → Início do período trancamento de turma 2021.2.</p>
          <h6>26/11/2021</h6>
          <p> → Término do período trancamento de turma 2021.2.</p>
          <h6>19/02/2022</h6>
          <p> → Término do período letivo 2021.2.</p>
      </div>
  
  
      </section>
    );
}
export default calendario;