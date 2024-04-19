import { useRouter } from 'next/router';
import { NextPage } from 'next';
import '../../app/globals.css';


interface UserProfile {
  id: string;
  name: string
}

const UserProfile: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

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
