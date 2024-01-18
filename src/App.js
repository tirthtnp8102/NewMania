import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News  from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
  

const App = () => {
  let apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");
  
  const setProg = (progress)=>{
    setProgress(progress);
  }
  const changeTheme = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  }

    return (
      <div>
        <BrowserRouter>
          <NavBar mode={mode} changeTheme={changeTheme} />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <div className="container my-3">
            <Routes>
              <Route exact path="/" element={<News setProg={setProg} apk={apiKey} key="general" country="in" category="general" pageSize={6} mode={mode} changeTheme={changeTheme} />} />
              <Route exact path="/business" element={<News setProg={setProg} apk={apiKey} key="business" country="in" category="business" pageSize={6} mode={mode} changeTheme={changeTheme} />} />
              <Route exact path="/health" element={<News setProg={setProg} apk={apiKey} key="health" country="in" category="health" pageSize={6} mode={mode} changeTheme={changeTheme} />} />
              <Route exact path="/science" element={<News setProg={setProg} apk={apiKey} key="science" country="in" category="science" pageSize={6} mode={mode} changeTheme={changeTheme} />} />
              <Route exact path="/sports" element={<News setProg={setProg} apk={apiKey} key="sports" country="in" category="sports" pageSize={6} mode={mode} changeTheme={changeTheme} />} />
              <Route exact path="/technology" element={<News setProg={setProg} apk={apiKey} key="technology" country="in" category="technology" pageSize={6} mode={mode} changeTheme={changeTheme} />} />
              <Route exact path="/entertainment" element={<News setProg={setProg} apk={apiKey} key="entertainment" country="in" category="entertainment" pageSize={6} mode={mode} changeTheme={changeTheme} />} />
              <Route exact path="/general" element={<News setProg={setProg} apk={apiKey} key="general" country="in" category="general" pageSize={6} mode={mode} changeTheme={changeTheme} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    )
  
}

export default App;


