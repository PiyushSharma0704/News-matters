import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  state = {
    progress: 0,
  };

  setProgress=(progress)=>{
    this.setState({ progress: progress });
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <LoadingBar color="#f11946" height={2} shadow="true" progress={this.state.progress} />
          <Routes>
            <Route
              exact
              path="/technology"
              element={
                <>
                  <News
                    setProgress={this.setProgress}
                    key="technology"
                    pageSize={12}
                    country="in"
                    category="technology"
                  />
                </>
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <>
                  <News
                    setProgress={this.setProgress}
                    key="sports"
                    pageSize={12}
                    country="in"
                    category="sports"
                  />
                </>
              }
            />
            <Route
              exact
              path="/science"
              element={
                <>
                  <News
                    setProgress={this.setProgress}
                    key="science"
                    pageSize={12}
                    country="in"
                    category="science"
                  />
                </>
              }
            />
            <Route
              exact
              path="/health"
              element={
                <>
                  <News
                    setProgress={this.setProgress}
                    key="health"
                    pageSize={12}
                    country="in"
                    category="health"
                  />
                </>
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <>
                  <News
                    setProgress={this.setProgress}
                    key="entertainment"
                    pageSize={12}
                    country="in"
                    category="entertainment"
                  />
                </>
              }
            />
            <Route
              exact
              path="/business"
              element={
                <>
                  <News
                    setProgress={this.setProgress}
                    key="business"
                    pageSize={12}
                    country="in"
                    category="business"
                  />
                </>
              }
            />
            <Route
              exact
              path="/about"
              element={
                <>
                  <About />
                </>
              }
            />
            <Route
              exact
              path="/"
              element={
                <>
                  <News
                    setProgress={this.setProgress}
                    key="general"
                    pageSize={12}
                    country="in"
                    category="general"
                  />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
