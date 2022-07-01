import React, {Component} from 'react';
import './header.css';



class Header extends Component{
    render(){
        return (
          <body>

<div class="pos-f-t">
          <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark">
              <h4 class="text-white">Collapsed content</h4>
              <span class="text-muted">Toggleable via the navbar brand.</span>
            </div>
          </div>
          <nav class="navbar navbar-black bg-black">
          <a class="navbar-brand" href="#">Kriz Dairy</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </nav>

</div>

<div className='fondito'>

  <div class="d-grid gap-2">
    
    <a href='../Componentes/Paginas/Recordatorios.js' class="btn btn-danger">+ Recordatorio</a>
    <a href='../Componentes/Paginas/Notas.js' class="btn btn-danger">+ Notas</a>
    <a href='../Componentes/Paginas/Citas.js' class="btn btn-danger">+ Citas</a>
    <a href='../Componentes/Paginas/Eventos.js' class="btn btn-danger">+ Eventos</a>
    
    
  </div>

</div>



 </body>
        
      
  );
  }
}
export default Header;