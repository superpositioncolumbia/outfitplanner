// App.js is the root component and all we're doing is nesting this custom title
// component inside that and that is found inside the comps folder standing for
// components

import React from 'react';
import Title from './comps/Title';

function App() {
  return (
    <div className="App">
      <Title/>
    </div>
  );
}

export default App;
