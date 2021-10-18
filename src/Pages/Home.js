import styled from 'styled-components';
import { userData } from '../Data';
import Chart from '../Components/Chart';
import FeaturedInfo from '../Components/FeaturedInfo';
import WidgetLg from '../Components/WidgetLg';
import WidgetSm from '../Components/WidgetSm';

const Home = () => (
  <HomeContainer>
    <FeaturedInfo />
    <Chart data={userData} title='User Analytics' grid dataKey='Active User' />
    <Widget>
      <WidgetLg />
      <WidgetSm />
    </Widget>
  </HomeContainer>
);

export default Home;

const HomeContainer = styled.div`
  flex: 4;
`;

const Widget = styled.div`
  display: flex;
  margin: 20px;
`;
