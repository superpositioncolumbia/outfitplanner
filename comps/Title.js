// Title.js is all the content we see on the screen. Just a div with the class
// name of title then we have an h1 that says "FireWebApp" which is on the top
// left of our page. We have an h2 "Your Closet" and a paragraph tag under
// that.

import React from 'react';

const Title = () => {
  return (
    <div className="title">
      <h1>FireWebApp</h1>
      <h2>Your Closet</h2>
      <p>Your very own Cher’s automated dress-up gadget!</p>
    </div>
  )
}

export default Title;
