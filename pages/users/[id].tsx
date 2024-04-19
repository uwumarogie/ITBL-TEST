import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { fetchUserData, User } from '@/utils/fetchUserData'
 
export default function Page() {
  const router = useRouter()
  const { id } = router.query;
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id && typeof id === 'string') {
      const userId = parseInt(id, 10); // Convert id to an integer
      fetchUserData(userId)
        .then(data => setUser(data))
        .catch( error => console.error(error))
        .finally( () => setLoading(false))
    }
  }, [id]);

  if (loading)
    return <div>Loading..</div>
  if (!user)
    return <p>User with Id {id} not found</p>
  
  return <div>
    <h1>Your User Profile</h1>
    <p>ID: {user.id}</p>
    <p>Name: {user.name}</p>
    <p>email: {user.email}</p>
  </div>
}