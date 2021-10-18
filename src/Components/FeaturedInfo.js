import styled from 'styled-components';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const FeaturedInfo = () => (
  <Featured>
    <FeaturedItem>
      <FeaturedTitle>Revenue</FeaturedTitle>
      <FeaturedMoneyContainer>
        <FeaturedMoney>$20115151</FeaturedMoney>
        <FeaturedMoneyRate>
          -11.4 <ArrowDownwardIcon className='featuredIcon negative' />
        </FeaturedMoneyRate>
      </FeaturedMoneyContainer>
      <FeaturedSub>Compared to last month</FeaturedSub>
    </FeaturedItem>
    <FeaturedItem>
      <FeaturedTitle>Sales</FeaturedTitle>
      <FeaturedMoneyContainer>
        <FeaturedMoney>$20115151</FeaturedMoney>
        <FeaturedMoneyRate>
          -11.4 <ArrowDownwardIcon className='featuredIcon negative' />
        </FeaturedMoneyRate>
      </FeaturedMoneyContainer>
      <FeaturedSub>Compared to last month</FeaturedSub>
    </FeaturedItem>
    <FeaturedItem>
      <FeaturedTitle>Cost</FeaturedTitle>
      <FeaturedMoneyContainer>
        <FeaturedMoney>$20115151</FeaturedMoney>
        <FeaturedMoneyRate>
          -11.4 <ArrowUpwardIcon className='featuredIcon' />{' '}
        </FeaturedMoneyRate>
      </FeaturedMoneyContainer>
      <FeaturedSub>Compared to last month</FeaturedSub>
    </FeaturedItem>
  </Featured>
);

export default FeaturedInfo;

const Featured = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FeaturedItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const FeaturedTitle = styled.span`
  font-size: 20px;
`;

const FeaturedMoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;

const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;

  .featuredIcon {
    font-size: 14px;
    margin-left: 5px;
    color: green;
  }

  .featuredIcon.negative {
    color: red;
  }
`;

const FeaturedSub = styled.span`
  font-size: 15px;
  color: gray;
`;
