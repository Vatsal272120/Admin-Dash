import styled from 'styled-components';

const NewProduct = () => (
  <NewProductContainer>
    <ProductTitle>New Product</ProductTitle>
    <ProductForm>
      <Productitems>
        <Label>Image</Label>
        <Input type='file' id='file' />
      </Productitems>

      <Productitems>
        <Label>Name</Label>
        <Input type='text' placeholder='Apple Airpods' />
      </Productitems>

      <Productitems>
        <Label>Stock</Label>
        <Input type='text' placeholder='123' />
      </Productitems>

      <Productitems>
        <Label>Active</Label>
        <Select name='active' id='active'>
          <Option value='yes'>Yes</Option>
          <Option value='no'>No</Option>
        </Select>
      </Productitems>
      <Button>Create</Button>
    </ProductForm>
  </NewProductContainer>
);

export default NewProduct;

const NewProductContainer = styled.div`
  padding: 20px;
  flex: 4;
`;

const ProductTitle = styled.h1``;

const ProductForm = styled.form`
  margin-top: 10px;
`;

const Productitems = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  color: gray;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 10px;
`;

const Select = styled.select`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 10px;
`;

const Option = styled.option``;

const Button = styled.button`
  margin-top: 10px;
  padding: 7px 10px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
