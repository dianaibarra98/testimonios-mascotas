import './App.css';
import Testimonio from './componentes/Testimonio'


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Principales Razas de Perros Domésticos</h1>
     <Testimonio 
     raza = 'Mestizos'
     razon = 'Razon para adoptar un Mestizo'
     testimonio ='La gran mayoría de perros de raza son propensos a padecer varias enfermedades genéticas. Eso es debido a la cría selectiva o a la consanguinidad entre varios factores. La esperanza de vida de un perro mestizo es, con creces, superior a la de los perros de raza o poseedores de pedigree. También suelen disfrutar de un mejor estado de salud.'
     imagen = 'perrituu.jpg'/> 

     <Testimonio 
     raza = 'Golden' 
     razon= 'Razon para adoptar un Golden'
     testimonio = 'Son perros dóciles, lo que facilita muchísimo tanto el manejo como la convivencia. Además, también acostumbran a mostrarse cariñosos, aunque en este punto hay que tener en cuenta que este cariño es bidireccional, es decir, también tienen una gran necesidad de recibir cariño, algo a considerar antes de adoptar uno.'
     imagen ='goldenbebe.png'
     />

     < Testimonio
     raza ='Rottweiler'
     razon ='Razon para adoptar un Rottweiler'
     testimonio = 'El Rottweiler es un perro majestuoso, no solo por su impresionante estatura y presencia dominante, sino también por su lealtad hacia los miembros de su familia. Cariñosamente conocido por los entusiastas como “Rottie”, esta raza realmente tiene un lado blando, a pesar de la imagen “dura” y la mala reputación que a menudo se le da en los medios.'
     imagen ='rottweiler.jpg'
     />
     </div>
    </div>
  );
}

export default App;
