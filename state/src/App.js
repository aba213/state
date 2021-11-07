
import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Taha Hussein",
        bio: "Taha Hussein né le 14 novembre 1889 à Al-Minya et mort le 28 octobre 1973 au Caire est un universitaire, romancier, essayiste et critique littéraire égyptien. Il a perdu la vue enfant, à la suite d'une ophtalmie mal soignée. Il fut ministre de l'Éducation nationale entre janvier 1950 et janvier 1952" ,
        imgSrc: "https://www.lesclesdumoyenorient.com/local/cache-gd2/7f/5ade0b062634ebb0b0ad6359c355d1-resp364.jpg.webp?1591362551",
        profession: "romancier",
        shows: true,

      }
    }

  };

  
  handleShowPerson = () => {
    
    this.setState({
      shows: !this.state.shows,
      
    });
    console.log(this.state.shows)
  };



  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margintop: 50 }}  >
        <button style={{  color: 'white', backgroundColor: '#black', fontSize: '30px', padding: '30px 70px' }} 
        onClick={this.handleShowPerson}>{!this.state.shows ? 'Show' : 'Hide'}</button>
        {this.state.shows ?
        
          <div style={{  margin: 25, padding: 15 }}>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
              <h1>{this.state.Person.fullName}</h1>

              <img style={{ width: 200, height: 200, }} src={this.state.Person.imgSrc}></img>
            </div>
            <div style={{ margin: 25 }}>
              <h3>{this.state.Person.bio}</h3>
              <h2>{this.state.Person.profession}</h2>
            </div>

            
          </div>
          :<h1> 👋Press to the buttun please</h1>
          
        }

      </div>
    )
  }
  
}

export default App
