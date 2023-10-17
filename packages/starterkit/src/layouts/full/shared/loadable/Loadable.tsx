import React, { Suspense } from 'react';

// project imports
// import Spinner from '../../../../../pages/spinner/Spinner';

// ===========================|| LOADABLE - LAZY LOADING ||=========================== //

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense >
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
