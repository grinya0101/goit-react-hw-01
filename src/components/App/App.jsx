// import user from '../components/Profile/user.json'
import user from '../Profile/user.json';
import data from '../Statistics/data.json';
import frinds from '../FriendList/friends.json';
import transactions from '../TransactionHistory/transactions.json'
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { Conteiner } from './App.styled';
import { FriendList } from '../FriendList/FriendList';
import {TransactionHistory} from '../TransactionHistory/TransactionHistory'


export const App = () => {
  return (
    <Conteiner>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics data={data} />
      <FriendList frinds={frinds} />
      <TransactionHistory transactions={transactions}  />
    </Conteiner>
  );
};
