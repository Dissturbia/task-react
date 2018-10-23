import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <div className= "content-flex">
         <Content
           image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_udUhC7QMROLqT4UTiGHe9H9RZY5WZggDXZbZVh6-y7Jiq90Aw"
           contenido = "hola"/>
            
         <Content
           image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ycyyBaWLDYktESSNJNRd1bZ1itTeHx9tz3XzKKTg-3bMyU0zIQ"
           contenido = "chau"/>
         <Content
           image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgoQBr6jo_J4D5-KIN5DtHtaOLMd4lCRmveoq4aPpI3rvw4ijXaw"
           contenido = "hello"/>
     </div>
    </div>

  );

  

  };

};


export default App;
