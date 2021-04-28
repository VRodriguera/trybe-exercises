import React from 'react';
import Image from './Image';

class App extends React.Component {
  render() {
    const data = {
      url: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
      fraseDeErro: 'Imagem quebrada!!!'
    }
  return (
  <div>
      <Image source={data.url} alternativeText={data.fraseDeErro}/>
  </div>
  )
  }
}

export default App;