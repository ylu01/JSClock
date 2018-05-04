/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const secondHand = document.querySelector('.second-hand');
      const minuteHand = document.querySelector('.min-hand');
      const hourHand = document.querySelector('.hour-hand');
      function setDate(){
          const now = new Date();
          const seconds = now.getSeconds();
          const secondDegrees = ((seconds / 60) * 360) + 90;
          secondHand.style.transform = `rotate(${secondDegrees}deg)`;
          
          const minutes = now.getMinutes();
          const minuteDegrees = ((minutes / 60) * 360) + 90;
          minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
          
          const hours = now.getHours();
          const hourDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
          hourHand.style.transform = `rotate(${hourDegrees}deg)`;
          console.log(seconds);
      }
      setInterval(setDate, 1000);
