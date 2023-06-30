import React from 'react'
import { players } from './Players'
import PlayerCards from './PlayerCards'

const PlayerList = () => {
    console.log({players})
  return (
    <div className='LCards'>
    {
        players.map((player)=>(
            <PlayerCards player={player} key={player.id}/>
        ))   
    }
    </div>
  )
}

export default PlayerList