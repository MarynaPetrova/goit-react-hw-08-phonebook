import { useDispatch } from 'react-redux';
import { refreshUserThunk } from 'redux/user/userThunk';
import { useEffect } from 'react';
import Navigation from 'components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from 'components/Public/PublicRoute';
import SignUp from 'pages/SignUp';
import Login from 'pages/Login';
import { PrivateRoute } from 'components/Private/PrivateRoute';
import Contacts from 'pages/Contacts';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
