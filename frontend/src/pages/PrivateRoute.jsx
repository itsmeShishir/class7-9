import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ allowedRoles }) => {
 
  const role = localStorage.getItem('role');

  if (allowedRoles.includes(role)) {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default PrivateRoute;
