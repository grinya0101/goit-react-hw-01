// import user from '../components/Profile/user.json'
import user from '../Profile/user.json'
import {Profile} from '../Profile/Profile'

console.log(user);

export const App = () => {
  return (
    <>
    <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      
    </>
  );
};
