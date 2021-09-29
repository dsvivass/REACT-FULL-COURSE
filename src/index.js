import React from 'react'; // el import es de ES6 JS no es funcionalidad de REACT
import ReactDOM from 'react-dom'

const BookList = () => { // Los componentes los debo poner en mayuscula,
                      // asi react sabe que es especial esta funcion
  
  // Esto que devuelvo es JSX y NO html
  // We have to return a single element, if we try another div appended, it
    // wont work. It must have a parent
  return (
    // En vez de div podemos usar react fragments, o usar semantica de html5
    
    <section>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
    
  )
}

// Usando nested components

const Book = () => {
  return (
    <article>
      This is a book!
    </article>
  )
}

ReactDOM.render(
  <BookList/>,
  document.getElementById('root') // Aqui es donde estara alojada nuestra app
                                  // esta en /public/index.html
)