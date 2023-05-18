import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Pokedex from './Components/Pokedex'

function App() {

  
  const [data, setData] =useState("");
  const [pantalla, setPantalla] =useState([]);
  const [error, setError] = useState(null);
  const [showPokedex, setShowPokedex] = useState(false)

  // ------------------------Declarando variables que mostraremos en pantalla---------------------------

  const [pokeName, setPokeName] = useState('')
  const [img_url, setImgUrl] = useState('')
  
  const [height , setHeight] = useState();
  
  const [weight, setWeight] = useState();

  

  const [hp, setHp] = useState();
  
  const [attack, setAttack] = useState();
  
  const [defense, setDefense] = useState();
  
  const [special_att, setSpecial_att] = useState();
  
  const [special_def, setSpecial_def] = useState();
  // All stats in an array:
  const [pokeStats, setPokeStats] = useState([]);

  const [abilities, setAbilities] = useState([]);

  

  const [speed, setSpeed] = useState();
  // let speed;
const [type, setType] = useState([]);
  // let type;


  // ---------------------------------------Fetching Data-----------------------------------------------

  let url = 'https://pokeapi.co/api/v2/pokemon/'
  let pokemonName =''
  const submit =async(e)=>{
    e.preventDefault();
    setPantalla([...pantalla, data])
    
    
    // usar expresion regular para que siempre inicie en minusculas el nombre del pokemon
    // Quitar espacios al principio y al fianl del nombre del pokemon
    pokemonName = data.toLowerCase();
    url = url + pokemonName + '/';
    console.log(pokemonName);
    console.log(url)

    await fetch(url)
    .then(response =>response.json())
    .then(pokemonData =>{
      console.log(pokemonData);
      setPokeName(pokemonData.name[0].toUpperCase() +pokemonData.name.substring(1) )
      setImgUrl(pokemonData.sprites.other.dream_world.front_default.toString()); 
      setHeight(pokemonData.height / 10);
      setWeight(pokemonData.weight / 10);

      setHp(pokemonData.stats[0].base_stat)
      setAttack(pokemonData.stats[1].base_stat)
      setDefense(pokemonData.stats[2].base_stat)
      setSpecial_att(pokemonData.stats[3].base_stat)
      setSpecial_def(pokemonData.stats[4].base_stat);
      setSpeed(pokemonData.stats[5].base_stat);
      setPokeStats(pokemonData.stats);

      setAbilities(pokemonData.abilities)



      setType([...pokemonData.types]);
      console.log( img_url, height, hp, attack, defense, special_att, special_def, speed, type, pokeStats )
      setShowPokedex(true)

    })
      
      



    .catch(error => setError(error))
    
  }
  

  return (
    <>
      <div className='app-container'>
        
        <Header/>
        
        <div className='description-instructions container'>
          <p>Enter the name of the pokemon you need information about</p>
        </div>

        <div className='form-container'>
          <form  onSubmit={submit} className='form'  >
            <input type="text" className='input form-control' placeholder='Type the pokemon name here' onChange={(e)=>setData(e.target.value)}  />
            <button className='btn btn-primary form-btn' type="submit" >Search</button>
          </form>
        </div>
        
        <Pokedex 
          showPokedex={showPokedex}
          img_url= {img_url}
          height = {height}
          pokeName={pokeName}
          type = {type}
          hp = {hp}
          attack = {attack}
          defense = {defense}
          special_att = {special_att}
          special_def = {special_def}
          speed = {speed}
          pokeStats = {pokeStats}
          weight = {weight}

          abilities = {abilities}
        
        
        />
        



      </div>
    </>
  )
}

export default App
