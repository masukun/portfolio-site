import React from 'react';
import ReactDOM from "react-dom";
import { Header, TopWrapper, AboutWrapper, SkillWrapper, WorkWrapper, ContactWrapper, Footer} from './components/index';
import "./assets/styles/index.css";
import "./assets/styles/style.css";

const App = () => {
  return (
    <>
      <Header></Header>
      <TopWrapper></TopWrapper>
      <AboutWrapper></AboutWrapper>
      <SkillWrapper></SkillWrapper>
      <WorkWrapper></WorkWrapper>
      <ContactWrapper></ContactWrapper>
      <Footer></Footer>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
