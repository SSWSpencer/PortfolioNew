import './App.css';
import HomePage from "./Components/HomePage/HomePage.js";
import Modal from "./Components/Modal/Modal.js";
import Nav from "./Components/Nav/Nav.js";
import About from "./Components/About/About.js";
import Skills from "./Components/Skills/Skills.js";
import Projects from "./Components/Projects/Projects.js";
import {connect} from "react-redux";

function App(props) {
  return (
    <div className="App">
      <Nav />
      <HomePage />
      <Modal conditional={props.data.showAbout} title="About">
          <About />
      </Modal>
      <Modal conditional={props.data.showSkills} title="Skills">
          <Skills />
      </Modal>
      <Modal conditional={props.data.showProjects} title="Projects">
          <Projects />
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {
      data: state
  }
}

export default connect(mapStateToProps, null)(App);