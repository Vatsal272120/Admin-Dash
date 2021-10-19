import styled from 'styled-components';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from 'react-router-dom';
import { productData } from '../Data';
import Chart from '../Components/Chart';

const Product = () => (
  <ProductContainer>
    <ProductTitleContainer>
      <ProductTitle>Product</ProductTitle>
      <Link to='/newproduct'>
        <ProductAddButton>Create</ProductAddButton>
      </Link>
    </ProductTitleContainer>
    <ProductTop>
      <ProductTopLeft>
        <Chart data={productData} dataKey='Sales' title='Sales Performance' />
      </ProductTopLeft>
      <ProductTopRight>
        <ProductInfoTop>
          <ProductInfoImage />
          <ProductName>Apple Airpods</ProductName>
        </ProductInfoTop>
        <ProductInfoBottom>
          <ProductInfoItem>
            <ProductInfoKey>id: </ProductInfoKey>
            <ProductInfoValue>123</ProductInfoValue>
          </ProductInfoItem>
          <ProductInfoItem>
            <ProductInfoKey>Sales:</ProductInfoKey>
            <ProductInfoValue>123</ProductInfoValue>
          </ProductInfoItem>
          <ProductInfoItem>
            <ProductInfoKey>Active:</ProductInfoKey>
            <ProductInfoValue>Yes</ProductInfoValue>
          </ProductInfoItem>
          <ProductInfoItem>
            <ProductInfoKey>In-stock</ProductInfoKey>
            <ProductInfoValue>No</ProductInfoValue>
          </ProductInfoItem>
        </ProductInfoBottom>
      </ProductTopRight>
    </ProductTop>

    <ProductBottom>
      <Form>
        <FormLeft>
          <Label>Product Name</Label>
          <Input type='text' placeholder='Apple AirPod' />
          <Label>In Stock</Label>
          <Select name='inStock' id='idStock'>
            <Option value='yes'>Yes</Option>
            <Option value='no'>No</Option>
          </Select>
          <Label>Active</Label>
          <Select name='inStock' id='idStock'>
            <Option value='yes'>Yes</Option>
            <Option value='no'>No</Option>
          </Select>
        </FormLeft>
        <FormRight>
          <ProductUpload>
            <ProductUploadImage />
            <Label for='file'>
              <PublishIcon />
            </Label>
            <Input type='file' id='file' style={{ display: 'none' }} />
          </ProductUpload>
          <ProductButton>Update</ProductButton>
        </FormRight>
      </Form>
    </ProductBottom>
  </ProductContainer>
);

export default Product;

const ProductContainer = styled.div`
  flex: 4;
  padding: 20px;
`;

const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductTitle = styled.h1``;

const ProductAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const ProductTop = styled.div`
  display: flex;
`;

const ProductTopLeft = styled.div`
  flex: 1;
`;

const ProductTopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
`;

const ProductInfoImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const ProductName = styled.span`
  font-weight: 600;
`;

const ProductInfoBottom = styled.div`
  margin-top: 10px;
`;

const ProductInfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const ProductInfoKey = styled.span``;

const ProductInfoValue = styled.span`
  font-weight: 300;
`;

const ProductBottom = styled.div`
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  color: gray;
`;

const Input = styled.input`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`;

const Select = styled.select`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Option = styled.option``;

const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductUpload = styled.div`
  display: flex;
  align-items: center;
`;

const ProductUploadImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;

const ProductButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
