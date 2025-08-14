import foto from './images/foto.jpg';
import '../styles/App.css';

function App() {
  return (
    <div className="App" style={{backgroundColor: 'rgb(224, 235, 235)', minHeight: '100vh'}}>
      <div className="w3-content w3-margin-top w3-responsive" style={{maxWidth: '1400px', position: 'relative', margin: '0 auto'}}>
        <div className="w3-right w3-margin-top w3-hide-small" style={{position: 'absolute', top: '-10px', right: '20px', zIndex: 1000}}>
          <p className="WebPage w3-small">
            <a href="#" style={{color: 'navy'}}>Versión en español</a>
          </p>
        </div>
        
        <div className="w3-row-padding">
          <div className="w3-third w3-container w3-margin-bottom">
            <div className="w3-text-grey w3-card w3-responsive" style={{backgroundColor: 'white'}}>
              <div className="w3-display-container w3-responsive">
                <img src={foto} className="w3-image center" alt="photo" style={{width: '100%'}} />
                <div className="w3-display-bottomleft w3-container w3-text-black w3-hide-small">
                  <h2 className="chava w3-medium">Salvador Martínez Espinosa</h2>
                </div>
                <div className="w3-hide-medium w3-hide-large w3-center w3-padding">
                  <h3 className="chava">Salvador Martínez Espinosa</h3>
                </div>
              </div>
              
              <div className="w3-container" style={{padding: '16px'}}>
                <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large" style={{color: 'green'}}></i>Software Developer</p>
                <p><i className="fa fa-home fa-fw w3-margin-right w3-large" style={{color: 'blue'}}></i>México, Mx.</p>
                <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large" style={{color: 'blue'}}></i>cchhava@nube.unadmexico.mx</p>
                <p><i className="fa fa-phone fa-fw w3-margin-right w3-large" style={{color: 'blue'}}></i>052 797-100-94-88</p>
                
                <hr style={{borderColor: 'rgb(84, 201, 228)'}} />
                
                <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right" style={{color: 'blue'}}></i>Skills</b></p>
                
                <div style={{marginBottom: '16px'}}>
                  <p>Java/J2EE</p>
                  <div style={{backgroundColor: 'lightblue', borderRadius: '16px', height: '20px'}}>
                    <div style={{backgroundColor: 'blue', borderRadius: '16px', width: '90%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>90%</div>
                  </div>
                </div>
                
                <div style={{marginBottom: '16px'}}>
                  <p>JavaScript</p>
                  <div style={{backgroundColor: 'lightblue', borderRadius: '16px', height: '20px'}}>
                    <div style={{backgroundColor: 'blue', borderRadius: '16px', width: '90%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>90%</div>
                  </div>
                </div>
                
                <div style={{marginBottom: '16px'}}>
                  <p>React</p>
                  <div style={{backgroundColor: 'lightblue', borderRadius: '16px', height: '20px'}}>
                    <div style={{backgroundColor: 'blue', borderRadius: '16px', width: '80%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>80%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w3-twothird w3-container">
            <div className="w3-container w3-card w3-margin-bottom w3-responsive" style={{backgroundColor: 'white', padding: '16px'}}>
              <h2 style={{color: 'indigo', padding: '16px'}}>
                <i className="fa fa-laptop fa-fw w3-margin-right w3-xxlarge" style={{color: 'blue'}}></i>
                Professional Highlights
              </h2>
              
              <div style={{padding: '16px'}}>
                <h5><b>(Maven/Java/Spring Boot/Spring Cloud AWS/JavaScript/TypeScript/Nodejs/React/Angular/Nextjs/Nestjs/PHP/Python)</b></h5>
                <p style={{textAlign: 'justify'}}>
                  As a software developer, I have been working for the past 7 years in application design, 
                  development, and maintenance. My background spans industries such as finance, government, 
                  retail, and hospitality, serving in both senior and full-stack roles.
                  As a Java Software Engineer, I have solid experience building Java-based applications 
                  and microservices, using the Spring Framework to build robust and scalable solutions.
                </p>
                
                <hr style={{borderColor: 'rgb(140, 209, 224)'}} />
                
                <h2 style={{color: 'indigo', padding: '16px'}}>
                  <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge" style={{color: 'blue'}}></i>
                  Work Experience
                </h2>
                
                <div style={{padding: '16px'}}>
                  <h5><b>Senior Developer (Java/Angular/Spring boot/Spring Cloud AWS)<br />Openpay México</b></h5>
                  <h6 style={{color: 'teal'}}><i className="fa fa-calendar fa-fw w3-margin-right"></i>May 2022 - Present</h6>
                  <p style={{textAlign: 'justify'}}>
                    As a software developer at Openpay, I have been responsible for creating and maintaining 
                    key infrastructure for managing financial transactions. My main responsibilities include 
                    microservices development, API management, and application modernization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
