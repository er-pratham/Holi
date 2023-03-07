import React from 'react';
import './App.css';
import imglocation from './res/1.png'
function App() {
  return (
    <div className="App">
     <h1>Happy <span style={{color:"red"}}>H</span><span style={{color:"red"}}>O</span><span style={{color:"red"}}>L</span><span style={{color:"red"}}>I</span> 2023</h1>
     <h3><span style={{color:"red"}}>होलिका</span> दहन की हार्दिक शुभकामनाएं</h3>
     <div className="mainContent">
      <div className="image">
        <img src={imglocation} alt="Error" />
        </div>
      <div className="content">
        <h3>Bright colors, water balloons, lavish gujiyas and melodious songs' are the ingredients of perfect Holi. Wish you a very happy and wonderful Holi.</h3>
        <p>Holi is the time which ushers the welcoming of the spring season and ends the winter blues. Historically, it holds a lot of importance. From folklores to songs, you can find a lot of mentions of this festival. Many believe that the festival marks the celebration of good over evil. Holika Dahan, held a day before Holi resonates with the fact that evil cannot hold for a long time.
Largely celebrated in the northern part of the country, the festival of colours and love falls a day after the full moon. While a pious Holika bonfire is lit a day before the actual celebration, people come together to celebrate the victory of good over evil and splash colours of happiness around each other. No matter how you wish to celebrate, the feelings are all the same. Some splash around water pichkaaris, some use balloons, some use natural gulaal and flowers.</p>
<h3 style={{marginTop:"20px"}}>From - Saxena's Group</h3>
      </div>
     </div>
     <div className="footer">
      <p>©️ All rights are reserved by <a href="https://www.linkedin.com/in/prathamsaxena/" rel='noreferrer' target="_blank">Pratham Saxena</a></p>
     </div>
    </div>
  );
}

export default App;
