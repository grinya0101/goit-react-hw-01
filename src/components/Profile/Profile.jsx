import PropTypes from 'prop-types';
import {Cart, Info, UserName, Tag, Location, Status, Label, Quantity, Avatar, ItemWrap} from './Profile.styled'

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Cart>
      <Info>
        <Avatar src={avatar} alt={tag} className="avatar" />
        <UserName>{username}</UserName>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Info>

      <Status>
        <ItemWrap>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </ItemWrap>
        <ItemWrap>
          <Label>Views</Label>
          <Quantity>{stats.likes}</Quantity>
        </ItemWrap>
        <ItemWrap>
          <Label>Likes</Label>
          <Quantity>{stats.views}</Quantity>
        </ItemWrap>
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