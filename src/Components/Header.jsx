import React from "react";

function Header(){

  return(
    <header>
        <h1 className='app-title'>Pokedex</h1>

        <div className='img-div'>
        
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt="charmander-img" className='animate__animated animate__fadeInLeft  charmander' />
        
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg" alt="" className='animate__animated animate__fadeInDown animate__delay-2s pikachu' />
        

        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="bulbasaur-img" className='animate__animated animate__fadeInRight animate__delay-1s bulbasaur' />

        </div>
        
        <h3 className='app-subtitle'>Welcome to the <span className='pokedex-span'>Pokedex</span>  App!</h3>
          <p className='app-desc' >The Electronic Encyclopedia Every Pokemon Trainer Needs </p>
        </header>
  )

}


export default Header;