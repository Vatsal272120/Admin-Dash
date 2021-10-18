import styled from 'styled-components';
import PropTypes from 'prop-types';

const Layout = ({ children }) => <LayoutContainer>{children}</LayoutContainer>;

export default Layout;

const LayoutContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
