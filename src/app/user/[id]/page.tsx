import { useSearchParams } from 'next/navigation';
import { NextPage } from 'next';

interface UserProfile {
  id: string;
  name: string
}

const UserProfile: NextPage = () => {
  const params = useSearchParams();
  const id = params.get('id');

  const userData: UserProfile = fetchUserData(id as string)

  return (
    <div>
      <h1>User Profile</h1>
      <p>ID: {userData.id}</p>
      <p>Name: {userData.name}</p>
    </div>
  );
}

function fetchUserData(id: string): UserProfile {
    //fetch data
    return {
        id: id as string,
        name: "Jon"
      };
}

export default UserProfile;
