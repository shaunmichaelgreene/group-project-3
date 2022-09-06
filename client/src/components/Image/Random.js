import React, { useEffect, useState } from 'react';

let Panda = require("../Image/Photos/pexels-laura-the-explaura-3608263.jpg")
let Cat =  require("../Image/Photos/Cat.jpg");
let Dog1 =  require("../Image/Photos/Dog1.jpg");
let Dog2 =  require("../Image/Photos/Dog2.jpg");
let Fish1 =  require("../Image/Photos/Fish1.jpg");
let Fish2 =  require("../Image/Photos/Fish2.jpg");
let Horse1 =  require("../Image/Photos/Horse1.jpg");
let Horse2 =  require("../Image/Photos/Horse2.jpg");


const GenerateImage = () => {

  function changeImage() {
      var BackgroundImg = [
      Cat,
      Dog1,
      Dog2,
      Fish1,
      Fish2,
      Horse1,
      Horse2,
      Panda
      ];
      var i = Math.floor((Math.random() * BackgroundImg.length));
      document.body.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
  }
  window.setInterval(changeImage, 15000);
}
   
 

export default GenerateImage;


