// import Logo from './Logo';
import TitleLogo from './images/titlelogo.svg';
import './Welcome.css';

function Welcome() {
  return (
    <section className="Welcome">
      <img src={TitleLogo} alt="Gentlemen's Crib" className="TitleLogo"/>
      <div id="on_info">
        <h1>WELCOME TO THE CRIB</h1>
        <p>Here you’ll  find all the tools and information that would help you look good</p>
      </div>

      <button id="button1" onClick={WelcomeSwitch1}>Next</button>
      <button id="button2" onClick={WelcomeSwitch2}>Next</button>
      <a href="./pages/Sign.jsx"><button id="button3">Next</button></a>

      <div id="progress">
        <div className='one'></div>
        <div className='two'></div>
        <div className='three'></div>
      </div>
    </section>
  );
}

function WelcomeSwitch1() {
  const Welcome = document.querySelector(".Welcome");
  const one = document.querySelector(".one");
  const two = document.querySelector(".two");
  const three = document.querySelector(".three");
  const para = document.querySelector("p");
  const button1 = document.querySelector("#button1");
  const button2 = document.querySelector("#button2");

  Welcome.style.background = "url('./images/index.png')";
  one.style.width = "10px";
  two.style.width = "30px";
  one.style.background = "#c4c4c4";
  two.style.background = "#B6671D";
  three.style.width = "10px";
  button1.style.display = "none";
  button2.style.display = "block";
  para.innerHTML = "A community that forges the socio-construct that is fashion, facilitate global cross-border fashion integration ";
}

function WelcomeSwitch2() {
  const one = document.querySelector(".one");
  const two = document.querySelector(".two");
  const three = document.querySelector(".three");
  const para = document.querySelector("p");
  const button2 = document.querySelector("#button2");
  const button3 = document.querySelector("#button3");
  
  button2.style.display = "none";
  button3.style.display = "block";
  one.style.width = "10px";
  two.style.width = "10px";
  three.style.width = "30px";
  two.style.background = "#c4c4c4";
  three.style.background = "#3B9CC6";
  para.innerHTML = "In all have fun while doing it";
}

export default Welcome;
