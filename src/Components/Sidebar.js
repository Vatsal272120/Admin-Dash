import { useState } from 'react';
import styled from 'styled-components';

import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@mui/icons-material';

import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [active] = useState(true);

  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarMenu>
          {' '}
          <SidebarMenuTitle>Dashboard</SidebarMenuTitle>
          <SidebarList>
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
              <SidebarListItem active={active}>
                <LineStyle />
                Home
              </SidebarListItem>
            </Link>

            <SidebarListItem>
              <Timeline style={{ marginRight: '5px', fontSize: '20px' }} />
              Analytics
            </SidebarListItem>

            <SidebarListItem>
              <TrendingUp style={{ marginRight: '5px', fontSize: '20px' }} />
              Sales
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          {' '}
          <SidebarMenuTitle>Quick Menu</SidebarMenuTitle>
          <SidebarList>
            <Link
              to='/users'
              style={{ textDecoration: 'none', color: 'inherit' }}>
              <SidebarListItem>
                <PermIdentity
                  style={{ marginRight: '5px', fontSize: '20px' }}
                />
                Users
              </SidebarListItem>
            </Link>

            <SidebarListItem>
              <Storefront style={{ marginRight: '5px', fontSize: '20px' }} />
              Products
            </SidebarListItem>
            <SidebarListItem>
              <AttachMoney style={{ marginRight: '5px', fontSize: '20px' }} />
              Transactions
            </SidebarListItem>
            <SidebarListItem>
              <BarChart style={{ marginRight: '5px', fontSize: '20px' }} />
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          {' '}
          <SidebarMenuTitle>Notifications</SidebarMenuTitle>
          <SidebarList>
            <SidebarListItem>
              <MailOutline style={{ marginRight: '5px', fontSize: '20px' }} />
              Mail
            </SidebarListItem>
            <SidebarListItem>
              <DynamicFeed style={{ marginRight: '5px', fontSize: '20px' }} />
              Feedback
            </SidebarListItem>
            <SidebarListItem>
              <ChatBubbleOutline
                style={{ marginRight: '5px', fontSize: '20px' }}
              />
              Messages
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          {' '}
          <SidebarMenuTitle>Staff</SidebarMenuTitle>
          <SidebarList>
            <SidebarListItem>
              <WorkOutline style={{ marginRight: '5px', fontSize: '20px' }} />
              Manage
            </SidebarListItem>
            <SidebarListItem>
              <Timeline style={{ marginRight: '5px', fontSize: '20px' }} />
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <Report style={{ marginRight: '5px', fontSize: '20px' }} />
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;

const SidebarWrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;

const SidebarMenuTitle = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;
`;

const SidebarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;

  &:active {
    background-color: rgb(240, 240, 255);
  }
  &:hover {
    background-color: rgb(240, 240, 255);
  }
`;
