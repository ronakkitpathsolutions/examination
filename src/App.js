import React, { Suspense } from 'react';
import Routing from './router';
import Loader from './common/Loader';

const App = () => {
  return (
    <Suspense fallback={<Loader text="Loading..." />} >
      <Routing/>
    </Suspense>
  );
}

export default App;
