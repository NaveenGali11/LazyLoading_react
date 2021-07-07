import React, { lazy, Suspense } from 'react';
import './App.css';
import { Spinner } from 'react-bootstrap';
import Component2 from './components/Component2';
// import Component1 from './components/Component1';

const Component1 = lazy(() => import('./components/Component1'));

function App() {
  return (
    <div className="App">
      <Component2 />
      <Suspense fallback={<Spinner animation="grow" />}>
        <Component1 />
      </Suspense>
    </div>
  );
}

export default App;
