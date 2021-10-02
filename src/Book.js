import React from 'react'

const Book = (props) => {

    // Para manejar un evento en react necesitamos un argumento y un eventHandler
  
    const clickHandler = (event) => {
      console.log(event)
      console.log(event.target)
      alert('Clicked ' + props.id)
    }
  
    const clickHandlerWithArgs = (author) => {
      alert('Autor: ' + author)
      // Cuando escribamos datos a una base de datos es util pasar args
    }
  
    // para no escribir props.<attr> puedo desencapsular mi objeto
    // const {img, title, author} = props
  
    return (
  
      <article className='book' onMouseOver={() => {
        console.log(props.title)
      }}>
  
        <h1>Title: {props.title}</h1>
        {props.children}
        <img src={props.img} alt="" />
        <h4>Author: {props.author.toUpperCase()}</h4>
        <p>{6 + 6}</p>
        <button type='button' onClick={clickHandler}>Click</button>
        <button type='button' onClick={() => clickHandlerWithArgs(props.author)}>Click With Args</button>
  
      </article>
  
    )
  
  }  

export default Book // Default se usa para que al importar uno
                    // pueda usar cualquier nombre, ej:
                    //      import Libro from './Book'
                    // traera Book asi hayamos escrito libro

