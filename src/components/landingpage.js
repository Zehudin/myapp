import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.15752-9/56549510_411387372983874_1508221660556165120_n.jpg?_nc_cat=109&_nc_ht=scontent.fsjj1-1.fna&oh=b180e7b4ee76f68aee75b205cedd7dab&oe=5D45FAF2"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Make Your Perfect Sofa</h1>

            <hr/>

          <p>Rošin Han | Bosnia and Herzegovina | Sarajevo | Ilidža | Umihane Čuvidine 3 </p>

        <div className="social-links">

          {/* instagram */}
          <a href="https://www.instagram.com/salonnamjestaja_rosinhan/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>

          {/* facebook */}
          <a href="https://www.facebook.com/Rošin-Han-Namještaj-po-mjeri-177399209513/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>

          {/* location */}
          <a href="https://www.navigator.ba/#/p/salon-namjestaja-rosin-han" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-map-marker" aria-hidden="true" />
          </a>

           {/* web Page */}
           <a href="http://rosinhan.ba/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-home" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;