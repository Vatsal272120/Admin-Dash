import styled from 'styled-components';

const NewUser = () => (
  <NewUserContainer>
    <h1 className='newUserTitle'>New User</h1>
    <Form>
      <Item>
        <Label>Username</Label>
        <Input type='text' placeholder='john' />
      </Item>
      <Item>
        <Label>Full Name</Label>
        <Input type='text' placeholder='john' />
      </Item>
      <Item>
        <Label>Email</Label>
        <Input type='text' placeholder='john' />
      </Item>

      <Item>
        <Label>Password</Label>
        <Input type='text' placeholder='john' />
      </Item>

      <Item>
        <Label>Phone</Label>
        <Input type='text' placeholder='john' />
      </Item>

      <Item>
        <Label>Address</Label>
        <Input type='text' placeholder='john' />
      </Item>

      <Item>
        <Label>Gender</Label>
        <Gender>
          <GenderInput type='radio' name='gender' id='male' value='male' />
          <GenderLabel for='male'>Male</GenderLabel>
          <Input type='radio' name='gender' id='female' value='female' />
          <GenderLabel for='female'>Female</GenderLabel>
          <Input type='radio' name='gender' id='other' value='other' />
          <GenderLabel for='other'>Other</GenderLabel>
        </Gender>
      </Item>

      <Item>
        <Label>Active</Label>
        <Select name='active' id='active'>
          <Option value='yes'>Yes</Option>
          <Option value='no'>No</Option>
        </Select>
      </Item>
      <Button>Create</Button>
    </Form>
  </NewUserContainer>
);

export default NewUser;

const NewUserContainer = styled.div`
  padding: 20px;
  flex: 4;
`;

const Form = styled.form`
  margin-top: 10px;
`;

const Item = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  align-items: center;
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

const Gender = styled.div``;

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

const GenderInput = styled.label`
  margin-top: 15px;
`;

const GenderLabel = styled.label`
  margin: 10px;
  font-size: 18px;
  color: #555;
`;
