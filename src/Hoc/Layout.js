import styled from 'styled-components';
import PropTypes from 'prop-types';

const Layout = ({ children }) => <LayoutContainer>{children}</LayoutContainer>;

export default Layout;

const LayoutContainer = styled.div`
  width: 90vw;
  height: 200%;
  top: 0px;
  font-family: @import
    url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap');
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
