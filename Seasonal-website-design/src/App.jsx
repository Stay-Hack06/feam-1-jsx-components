import './App.css'
import Card from '../Components/Card'

import winterImage from '../../Images/winter.jpg'
import springImage from '../../Images/spring.jpg'
import summerImage from '../../Images/summer.jpg'
import fallImage from '../../Images/fall.jpg'

function App() {

  return (
    <>
    <header>
    <h1>Welcome to my seasonal website!</h1>
    </header>
    <section className="Card">
      <Card img={winterImage} name="Winter time"/>
      <Card img={springImage} name="Spring time"/>
      <Card img={summerImage} name="Summer time"/>
      <Card img={fallImage} name="Fall time"/>
    </section>
    {/* <div className="photoDiv">
    <div>
      <img 
        src={winterImage}
        alt="Winter"
      ></img>
      <p>Wintertime</p>
    </div>
    <div>
    <img 
        src={springImage}
        alt="Spring"
      ></img>
      <p>Springtime</p>
    </div>
    <div>
    <img 
        src={summerImage}
        alt="Summer"
      ></img>
      <p>Summertime</p>
    </div>
    <div>
    <img 
        src={fallImage}
        alt="Fall"
      ></img>
      <p>Fall time</p>
    </div>
    </div> */}
    <div className="textContainer">
    <h2>Some of my favorite seasonal activities are:</h2>
      <ul>
        <li>Building snowpeople in the winter.</li>
        <li>Hiking in the spring wildflowers.</li>
        <li>Surfing in the summer sun.</li>
        <li>Playing in the fall leaves.</li>
      </ul>
    </div>
    </>
  )
}

export default App
