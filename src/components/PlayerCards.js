import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './PlayerCards.css'

const PlayerCards = (props) => {
    console.log({props})    
  return (
    <div className='Cards'>
      <Card style={{ width: '18rem' }}>
      <Card.Img style={{ height:'250px' }} variant="top" src= {props.player.imgUrl}/>
      <Card.Body>
      <Card.Title>{props.player.Name}</Card.Title>
      <Card.Text>
          Team : {props.player.Team}<br></br>
          Jersey Number : {props.player.jerseyNumber}<br></br>
          Age : {props.player.age}<br></br>
          Nationality : {props.player.Nationality}
      </Card.Text>
      <Button variant="primary">Go players</Button>
      </Card.Body>
      </Card>
    </div>
  )
}
PlayerCards.defaultProps={
  Nationality : "Tunisie"
};
export default PlayerCards;

