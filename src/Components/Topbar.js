/* eslint-disable max-len */
import styled from 'styled-components';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const Topbar = () => (
  <TopbarContainer>
    <TopbarWrapper>
      <TopbarLeft>
        <Logo>Admin</Logo>
      </TopbarLeft>
      <TopbarRight>
        <Icons>
          <NotificationsNoneIcon />
          <IconBadge>2</IconBadge>
        </Icons>
        <Icons>
          <LanguageIcon />
          <IconBadge>2</IconBadge>
        </Icons>
        <Icons>
          <SettingsIcon />
          <IconBadge>2</IconBadge>
        </Icons>

        <Avatar src='https://lh3.googleusercontent.com/ogw/ADea4I4els6k9Aq25MzZoNxYoVSpBS4_Ydr9i00oraOvBQ=s32-c-mo' />
      </TopbarRight>
    </TopbarWrapper>
  </TopbarContainer>
);

export default Topbar;

const TopbarContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const TopbarWrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopbarLeft = styled.div``;

const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
`;

const TopbarRight = styled.div`
  display: flex;
  align-items: center;
`;

const Icons = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;

const IconBadge = styled.span`
  width: 15px;
  height: 15px;
  position: absolute;
  top: -5px;
  right: 0px;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
