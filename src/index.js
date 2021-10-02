import React from 'react'; // el import es de ES6 JS no es funcionalidad de REACT
import ReactDOM from 'react-dom'

//CSS
import './index.css'

import {books} from './books'
import Book from './Book'

const BookList = () => { // Los componentes los debo poner en mayuscula,
                      // asi react sabe que es especial esta funcion
  
  // Esto que devuelvo es JSX y NO html
  // We have to return a single element, if we try another div appended, it
    // wont work. It must have a parent
  return (
    // En vez de div podemos usar react fragments, o usar semantica de html5
    
    <section className='bookList'>
      {
        books.map((book) => {

          return (

            // book={book}.    el ... funciona como **kwargs en python para desempaquetar
            <Book key={book.id}  {...book}/>

          )

        })
      }
    </section>
    
  )
}

// Usando nested components

// const Book = () => {
//   return (
//     <article className='book'>
//       <Title/>
//       <Image/>
//       <Author/>
//     </article>
//   )
// }

const Image = () => {

  return (
    <img src="data:image/jpeg;base64,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" 
    alt="" />
  )

}

const Title = () => <h1>Viga de demostración</h1>
const Author = () => <h4 style={
  {
    color: 'blue',
    fontSize: '0.75rem',
  }
}>Daniel Vivas</h4>

ReactDOM.render(
  <BookList/>,
  document.getElementById('root') // Aqui es donde estara alojada nuestra app
                                  // esta en /public/index.html
)