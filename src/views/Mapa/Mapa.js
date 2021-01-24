/*

Cambio por Adrian :
Cambio de libreria 
Con Actualziacion de google Maps.
Iconos impelementados
*/

import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';


//Datos de marker
import json from './db.json';

// iconos Repartidor
import Repartidor from './iconos/UGTruck-Blue.png';

//Iconos Marcador
import Marcador1 from './iconos/MapMarker-Green.png';
import Marcador2 from './iconos/MapMarker-Red.png';
import Marcador3 from './iconos/MapMarker-Yellow.png';
import Marcador4 from './iconos/blue.png';

class Mapa extends Component {
  constructor() {
    super();
    this.socket = null;
    this.state = {
      coordenadas: {},


      socketUrl: 'http://192.168.1.179:3000/',
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},


    };
  }
  async componentDidMount() {
    await this.setState({ coordenadas: json }, (resp) => {

      for (var coordenadas in this.state.coordenadas) {
        console.log(this.state.coordenadas[coordenadas]);
      }

      // console.log(this.state.coordenadas['coordenadas2']);
      //  console.log(this.state.coordenadas)
    });

  }

  /* componentDidMount() {
       const { socketUrl } = this.state;
       this.socket = io(socketUrl, {
           query:
               'auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZDdjMTM2ZWQ0ZjBkMDA0OTc3ZDRhOTAiLCJuYW1lIjoidGVzdCIsImxhc3RfbmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAdXJnZWdhcy5jb20iLCJpYXQiOjE1NjkxNzc3NzB9.EXfPzmqw9pN7itQyeSTNjRU4EbCTKiib_gV7G9_C6u4',
       });
       this.socket.on("clients-coordinates", resp => {
           this.setState({ coordenadas: resp })
           console.log(resp);
       });
   }
   
  */
  //Activar click en el marcador y mostrar con el info 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  //Quitar en infoWindow cuando clickqueas en el mapa
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: this.props.height, width: this.props.width }}>
        <Map google={this.props.google}
          initialCenter={{
            lat: 17.99,
            lng: -92.94
          }}


          style={{ width: '100%', height: '100%', position: 'relative' }}
          className={'map'}
          zoom={14}
          onClick={this.onMapClicked}

        >

          {/* Marcadores Verdes    */}
          <Marker
            onClick={this.onMarkerClick}

            name={'SOMA'}
            position={this.state.coordenadas['Verde']}
            icon={Marcador1} />
          <Marker
            onClick={this.onMarkerClick}
            name={'Av. 27 de Febrero '}

            position={this.state.coordenadas['Verde2']}
            icon={Marcador1} />


          {/* REpartido   */}

          <Marker
            icon={Repartidor}
            onClick={this.onMarkerClick}
            name={'jejej'}

            position={this.state.coordenadas['Azul']}

          />

          {/* Marcadores Amarillow    */}

          <Marker
            onClick={this.onMarkerClick}
            name={'The Castro'}
            position={this.state.coordenadas['Amarillo']}
            icon={Marcador3}
          />
          <Marker
            name={' Lake Street'}
            position={this.state.coordenadas['Amarillo2']}
            icon={Marcador3}
          />
          {/* Marcadores Rojos  */}
          <Marker
            onClick={this.onMarkerClick}
            name={' Laurel Heights'}
            position={this.state.coordenadas['Rojo']}
            icon={Marcador2}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={' PetrolHill'}
            position={this.state.coordenadas['Rojo1']}
            icon={Marcador2}
          />
          {/*marcador azul */}
          <Marker
            onClick={this.onMarkerClick}
            name={''}
            position={this.state.coordenadas['coordenadas2']}
            icon={Marcador4} />
          <Marker
            onClick={this.onMarkerClick}
            name={''}
            position={this.state.coordenadas['Azul1']}
            icon={Marcador4} />


          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('')
})(Mapa)