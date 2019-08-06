import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Samples extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="trosjed">
        <img
              src="http://rosinhan.ba/wp-content/uploads/Una-Trosjed.jpg"
              alt="una"
              style={{height: '300px'}}
               /><img
               src="https://i1.wp.com/rosinhan.ba/wp-content/uploads/Viktorija-Trosjed.jpg?resize=600%2C452"
               alt="viktorija"
               style={{height: '300px'}}
                />
                <img
              src="https://i2.wp.com/rosinhan.ba/wp-content/uploads/Nela-Trosjed.jpg?resize=600%2C452"
              alt="nela"
              style={{height: '300px'}}
               /><img
               src="https://i2.wp.com/rosinhan.ba/wp-content/uploads/Lamija-Trosjed.jpg?resize=600%2C452"
               alt="lamija"
               style={{height: '300px'}}
                />
        
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="fotelja">
        <img
              src="https://i2.wp.com/rosinhan.ba/wp-content/uploads/Pingo-Fotelja.jpg?resize=600%2C452"
              alt="pingo"
              style={{height: '300px'}}
               />
               <img
               src="http://rosinhan.ba/wp-content/uploads/Pingo-2-Fotelja.jpg"
               alt="pingo2"
               style={{height: '300px'}}
                />
                <img
               src="https://i2.wp.com/rosinhan.ba/wp-content/uploads/Potkovica-Fotelja.jpg?resize=600%2C452"
               alt="potkovica"
               style={{height: '300px'}}
                />
                <img
               src="http://rosinhan.ba/wp-content/uploads/Retro-2-Fotelja.jpg"
               alt="retro"
               style={{height: '300px'}}
                />
                <img
               src="http://rosinhan.ba/wp-content/uploads/Retro-Fotelja.jpg"
               alt="retro2"
               style={{height: '300px'}}
                />
                
                
        
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return ( 
      <div className="ormar">
      <img
            src="https://i0.wp.com/rosinhan.ba/wp-content/uploads/Americki-Plakat-200-Plocasti-Namjestaj.jpg?resize=600%2C452"
            alt="ap"
            style={{height: '300px'}}
             /><img
             src="https://i0.wp.com/rosinhan.ba/wp-content/uploads/Americki-Plakat-240-Plocasti-Namjestaj.jpg?resize=600%2C452"
             alt="ap2"
             style={{height: '300px'}}
              />
              <img
            src="https://i2.wp.com/rosinhan.ba/wp-content/uploads/Lara-Plocasti-Namjestaj.jpg?resize=600%2C452"
            alt="lara"
            style={{height: '300px'}}
             /><img
             src="https://i1.wp.com/rosinhan.ba/wp-content/uploads/Silver-Plocasti-Namjestaj.jpg?resize=600%2C452"
             alt="silver"
             style={{height: '300px'}}
              />
      
      </div>
      )
    }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Sofa</Tab>
          <Tab>Armchair</Tab>
          <Tab>Cabinet</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Samples;