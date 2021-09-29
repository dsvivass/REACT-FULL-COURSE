import React from 'react'; // el import es de ES6 JS no es funcionalidad de REACT
import ReactDOM from 'react-dom'

const Greeting = () => { // Los componentes los debo poner en mayuscula,
                      // asi react sabe que es especial esta funcion
  
  // Esto que devuelvo es JSX y NO html
  // We have to return a single element, if we try another div appended, it
    // wont work. It must have a parent
  return (
    // En vez de div podemos usar react fragments, o usar semantica de html5
    <React.Fragment> 
      <div>
        <h4>Hello world2!!</h4>    
        <ul>
          <li>
            <a href="#">Hello people</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
    
  )
}

// Usando nested components

const PersonGreeting = () => {

  return (
  <div>
    <Person/>
    <Message/>
  </div>
  )

}

const Person = () => <h1>Andres</h1>

const Message = () => <p>Bienvenido!!!!</p>


// El equivalente, pero esto no gusta tanto, porque se vuelve tedioso
// const Greeting = () => {
//   return React.createElement(
//     'div', 
//     {}, 
//     React.createElement('h4', {}, 'Hello world!!!')
//   )
// }


ReactDOM.render(
  <div>
    <Greeting/>
    <PersonGreeting/>
  </div>
  ,
  document.getElementById('root') // Aqui es donde estara alojada nuestra app
                                  // esta en /public/index.html
)