import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function WithAuthRedirect(Component, navigateTo) {
  const ProtectedComponent = props => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const isRefreshing = useSelector(state => state.auth.isRefreshing);

    return isLoggedIn && !isRefreshing ? (
      <Component {...props} />
    ) : (
      <Navigate to={navigateTo} />
    );
  };

  return ProtectedComponent;
}

export default WithAuthRedirect;
