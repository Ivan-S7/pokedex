import '../Styles/Pokedex.css'


function Pokedex ( {submit, data, pantalla, error, showPokedex, img_url, pokeName, height, type, pokeStats,   weight, abilities, hp, attack, defense, special_att, special_def, speed} ){
  

  // console.log(img_url, height, showPokedex)

  const typeClass = (type) =>{
    if(type === 'fire'){
      return 'pokemon-type red'
    } else if(type === 'grass'){
      return 'pokemon-type green'
    } else if(type === 'electric'){
      return 'pokemon-type yellow'
    } else if(type==='poison'){
      return 'pokemon-type purple'
    } else if(type==='water'){
      return 'pokemon-type blue'
    } 
    else{
      return 'pokemon-type gray'
    }
  }

  
  
  const styleObjct = (statValue) =>{
    let statSting = (statValue / 2).toString();
    const percen = '%'
    return(
      {width: statSting + percen}
    )
  }

  const toMayus = (str) =>{
    if(str === 'hp'){
      return 'HP'
    }
    else if(str === 'attack'){
      return 'Attack'
    }
    else if(str === 'defense'){
      return 'Defense'
    }
    else if(str === 'special-attack'){
      return 'Special Attack'
    }
    else if(str === 'special-defense'){
      return 'Special Defense'
    }
    else if(str === 'speed'){
      return 'Speed'
    }
  }

  const toReplace = (str) =>{
    let nstr = str.replace(/-/g," ")
    let arr = nstr.split(' ')
    let mayusStr ='';
    let mayusArr =[];
    for (let i = 0; i <arr.length; i++){
      mayusStr = arr[i][0].toUpperCase() + arr[i].substring(1);
      mayusArr.push(mayusStr);
    }
    let newStr = mayusArr.join(' ');
    return(newStr)
  }

 
  return(
      <>
        <div>
          {
          showPokedex === true ? (
            <div className='container pokedex-container' id='pokedex'>
              <div className='circles container-fluid'>
                <div className='circle1' id='circle1'></div>
                <div className='circle2' id='circle2'></div>
                <div className='circle3' id='circle3'></div>
                <div className='circle4' id='circle4'></div>
                
              </div>
              



               <div className='pokedex-screen container'>
                  <div className='conatiner grid-container'>
                    <div className='row first-row '>
                      <div className='col-8 col-md-8 col-img'>
                        <img src={img_url} alt="pokemon-img" className='pokemon-img' />
                      </div>
                      <div className='col-4 col-md-4 poke-info'>
                          <div className='pokemon-name'>Name: <br/> {pokeName}</div>
                          <div className='pokemon-height'>Height:<br/> {height} m</div>
                          <div className='pokemon-weight'>Weight: <br/> {weight} Kg</div>
                          <div className='pokemon-types'>Type: 
                            {type.map((tp) =>{
                              return(
                                <div key={tp.slot} className={typeClass(tp.type.name)}>{tp.type.name}</div>
                              )
                            })}
                          </div>
                      </div>

                    </div>
                    <div className='row second-row'>
                      <div className='col-8 col-md-8 gauge-div'>
                        {pokeStats.map((stat) =>{
                          return(
                            <div key={stat.stat.name} className='container stat-conatiner'>
                              <div className='row subGrid-row'>
                                <div className='col-4 col-md-4 stat-name'>
                                  {toMayus(stat.stat.name)}
                                </div>
                                <div className='col-8 col-md-8'>
                                  <div  className="progress bg-secondary" role="progressbar" aria-label="Basic example" 
                                    aria-valuenow={stat.base_stat.toString()} aria-valuemin="0" aria-valuemax="200"> 
                                      <div className="progress-bar bg-primary text-light" style={styleObjct(stat.base_stat)}>
                                      </div>
                                  </div>
                           
                                </div>

                              </div>

                            </div>
                              
                            
                          )
                        })}
                        
                        
                      </div>
                      <div className='col-4 col-md-4 abilities'>
                        <p className='abilities-title'>Abilities:</p> 
                        {abilities.map((abi)=>{
                          return(
                            <div key={abi.ability.name} className='ability'>
                              {toReplace(abi.ability.name)}
                            </div>
                          )
                        })}

                      </div>

                    </div>

                    

                  </div>
               </div>
               <div className='pokedex-bottom'>
                        
                    <div className='circle-buttom'></div>
                    <div className='green-box'></div>
                    <i class="bi bi-dpad-fill"></i>
                    </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        
        
        
      </>
  )
}

export default Pokedex;