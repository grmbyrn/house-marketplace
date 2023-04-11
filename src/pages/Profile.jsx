import {getAuth} from 'firebase/auth'
import { useEffect, useState } from 'react'

const Profile = () => {
  const [user, setUser] = useState(null)

  const auth = getAuth()
  useEffect(() => {
    console.log(auth.currentUser)
  }, [])

  return user ? <h1>{user.displayName}</h1> : 'Not Logged In'
}
export default Profile