import React, {useContext, useEffect} from 'react'
import UserContext from '../userContext'
import { Navigate } from 'react-router-dom';

const Logout = () => {
  const {setUser, unsetUser} = useContext(UserContext);

  unsetUser();

  useEffect(() => {
    setUser({
      id: null
    })
  }, [])

  return (
    <Navigate to={'/login/mlca'} />
  )
}

export default Logout