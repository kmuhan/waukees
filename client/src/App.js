import React from "react";
import "./App.css";
import Title from "./components/Title";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Router, Link } from "react-router-dom";

import { ReactComponent as MenuBurger } from "../src/img/MenuBurger.svg";
import { ReactComponent as LogoUser } from "../src/img/LogoUser.svg";

function App() {
  // const callApi = async () => {
  //   axios.get("/api").then((res) => {
  //     console.log(res.data);
  //   });
  // };

  // useEffect(() => {
  //   callApi();
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="fix">
          <div className="header">
            <MenuBurger />
            <LogoUser />
          </div>
          <div className="title">
            <Title />
          </div>
          <div className="banner">
            <Banner />
          </div>
        </div>
        <div className="images"></div>

        <Router>
          <Route path="/" element={<div>main</div>} />
          <Route path="/asd" element={<div>asd</div>} />
        </Router>

        <div className="footer">
          <div className="copyright">
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
