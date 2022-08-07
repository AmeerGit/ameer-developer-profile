
import './App.css';
import Image from '../src/images/mali3.jpg';


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul className='navcontainer'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Blogs</a></li>
            <li><a href='#'>About me</a></li>
          </ul>
        </nav>
        </header>
        <section >
          <div className='card'>
              <div className='profileImage'>
              <img src={Image} width='300' height='300' alt='profile'/>
            </div>
            <div className='cardrightcontainer'>
              <h1>
                Mohamed Ameer
              </h1>
              <h3 className='header2'>
                Senior Front-end developer
              </h3>
           <p> I have 10+ years of experience in building professional websites and front-end applications. I have worked in many giant companies.</p>
            </div>
          </div>
        </section>
        <section className='section2'>
         <div>
          <h1>About me</h1>
          <p>I grew up in Pondicherry ,which is a union territory in India.I got my first job from MNC during my college campus hiring.</p>
          <p>I have worked with many customer facing accounts like IKEA ,Volvo cars etc and worked on various domains such as banking , Retail and Airlines.</p>
          <p>I have travelled to Sweden ,Denmark and Poland etc.</p>
          <p>I am currently living in Sweden.</p>
         </div>
         <div>
          <h1>My Passion</h1>
         </div>
        </section>
        <footer>
          <p>©2022 by Ameer</p>
        </footer>
    </div>
  );
}

export default App;
