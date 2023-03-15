import PropTypes from 'prop-types';
import {Cart, Info, UserName, Tag, Location, Status, Label, Quantity} from './Profile.styled'

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Cart>
      <Info>
        <img src={avatar} alt={tag} className="avatar" />
        <UserName>{username}</UserName>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Info>

      <Status>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
      </Status>
    </Cart>
  );
}

Profile.propTypes = {
    username : PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number),
}