import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ModalOverLay from './component/ModalOverLay';

import './App.css';
import EmptyLayout from './Layouts/EmptyLayout';
import { publicRouters } from './routes/routes';
import Toast from './component/Toast';
function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          {publicRouters.map((route, index) => {
            const Page = route.component;
            let Layout = EmptyLayout;

            if (route.layout) {
              Layout = route.layout;
            } else {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page {...route.props} />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
        <ModalOverLay />
        <Toast />
      </div>
    </Router>
  );
}

export default App;
