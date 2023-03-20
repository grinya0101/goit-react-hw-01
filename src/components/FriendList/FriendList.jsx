import PropTypes from 'prop-types';
import {Swit} from './FriendList.styled'

export const FriendList = ({frinds}) => {
  return (
    <ul class="friend-list">
      {frinds.map(({ avatar, name, isOnline, id }) => (
        <li key={id} class="item">
          <Swit isOnline={isOnline}>{isOnline}</Swit>
          <img class="avatar" src={avatar} alt="User avatar" width="48" />
          <p class="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};


FriendList.propTypes = {
  isOnline : PropTypes.string.isRequired,
 
}