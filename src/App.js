import './App.css';
import profile from "./img/profile.png";
import emailIcon from "./img/email.svg";
import linkedInIcon from "./img/linkedln.svg";
import twitterIcon from "./img/twitter.svg";
import instagramIcon from "./img/instagram.svg";
import gitHubIcon from "./img/github.svg";

function App() {
  return (
    <div className="App">
      <div className='container'>
        <img src= {profile} alt="" className='profile-pic'/>
        <div className="main-content">

          <h2 className="main-content__title">Kunal Arya</h2>
          <p className="main-content__subtitle">Frontend Developer</p>
          <p className="main-content__website">aryakunal.com</p>

          <div className="contact-links">
            <a href="mailto:kunalaryad@gmail.com" className="btn-primary btn-primary--email">
              <img src= {emailIcon} alt="Email Icon" className="email-icon"/> <p>Email</p>
            </a>
            <a href="https://www.linkedin.com/in/kunal-arya-b5674418b/" className="btn-primary btn-primary--linkedIn" target="_blank" rel="noreferrer">
              <img src = {linkedInIcon} alt="LinkedIn Icon" className="linkedIn-icon"/> 
              <p>LinkedIn</p>
            </a>
          </div>

          <h3 className="subheading">About</h3>
          <p className="sub--para">
            I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
          </p>
          <h3 className="subheading">Interests</h3>
          <p className="sub--para">
            Reader. Internet fanatic. Entrepreneur. Travel geek.
          </p>
        </div>
        <div className="social-links">
          
          <a className="social-link" href="https://twitter.com/KunalAryaa" target="_blank" rel="noreferrer">
          <img src= {twitterIcon} alt="Twitter Icon" />
          </a>
          
          <a className="social-link" href="https://www.instagram.com/kunal_arya_/" target="_blank" rel="noreferrer">
            <img src= {instagramIcon} alt="Instagram Icon" />
          </a>

          <a className="social-link" href="https://github.com/kunal-arya" target="_blank" rel="noreferrer">
            <img src= {gitHubIcon} alt="GITHUB Icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
