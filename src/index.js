import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/news" element={<App
          Tab={"News"}
        />}>
        </Route>
        <Route path="/alpha" element={<App
          Tab={"Alpha"}
        />}>
        </Route>
        <Route path="/about" element={<App
          Tab={"About"}
        />}>
        </Route>
        <Route path="/wallofhonor" element={<App
          Tab={"Wall of Honor"}
        />}>
        </Route>
        <Route path="/mint" element={<App
          Tab={"Mint"}
        />}>
        </Route>
        <Route path="/collection"
          element={<App
            Tab={"Collection"}
          />}>
        </Route>
        <Route path="/battle"
          element={<App
            Tab={"Battle"}
          />}>
        </Route>
        <Route path="/"
          element={<App
            Tab={"Battle"}
          />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
