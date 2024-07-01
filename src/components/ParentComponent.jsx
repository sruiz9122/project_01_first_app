import React, { useState } from 'react'
import { ChildComponent } from './ChildComponent';

export const ParentComponent = () => {

  //Definir un estado local con un mensaje
  const [message] = useState("¡Hola, desde el computador Padre!");
  const [response, setResponse] = useState();

  //Funcion para recibir respuesta del hijo
  const handleChildResponse = (childMessage) => {
    setResponse(childMessage);
  }

  return (
    <div className="parent">
      <h2>Parent Component</h2>
      <ChildComponent message={message} onRespond={handleChildResponse}/>
      {response}
    </div>
  )
}
