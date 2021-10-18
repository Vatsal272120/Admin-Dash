/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

const Chart = ({ title, data, dataKey, grid }) => (
  <Charts>
    <CharTitle>{title}</CharTitle>
    <ResponsiveContainer width='100%' aspect={4 / 1}>
      <LineChart data={data}>
        <XAxis dataKey='name' stroke='#5550bd' />
        <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
        <Tooltip />
        {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
      </LineChart>
    </ResponsiveContainer>
  </Charts>
);

export default Chart;

Chart.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  grid: PropTypes.node.isRequired,
  dataKey: PropTypes.string.isRequired,
};

const Charts = styled.div`
  margin: 20px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const CharTitle = styled.h3`
  margin-bottom: 20px;
`;
