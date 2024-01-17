import './App.css';
import React, { Component } from 'react';
import { NavBar } from './components/NavBar';
import { News } from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  constructor() {
    super();
    this.state = {
      progress: 0,
      mode: "light"
    }
  }
  setProgress = (progress)=>{
    this.setState({
      progress: progress
    })
  }
  changeTheme = () => {
    if (this.state.mode === "light") {
      this.setState({
        mode: "dark"
      })
      document.body.style.backgroundColor = 'black';
    }
    else {
      this.setState({
        mode: "light"
      })
      document.body.style.backgroundColor = 'white';
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar mode={this.state.mode} changeTheme={this.changeTheme} />
          <LoadingBar
            height={2}
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <div className="container my-3">
            <Routes>
              <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="in" category="general" pageSize={6} mode={this.state.mode} changeTheme={this.changeTheme} />} />
              <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" country="in" category="business" pageSize={6} mode={this.state.mode} changeTheme={this.changeTheme} />} />
              <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" country="in" category="health" pageSize={6} mode={this.state.mode} changeTheme={this.changeTheme} />} />
              <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" country="in" category="science" pageSize={6} mode={this.state.mode} changeTheme={this.changeTheme} />} />
              <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country="in" category="sports" pageSize={6} mode={this.state.mode} changeTheme={this.changeTheme} />} />
              <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country="in" category="technology" pageSize={6} mode={this.state.mode} changeTheme={this.changeTheme} />} />
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" country="in" category="entertainment" pageSize={6} mode={this.state.mode} changeTheme={this.changeTheme} />} />
              <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="in" category="general" pageSize={6} mode={this.state.mode} changeTheme={this.changeTheme} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}


