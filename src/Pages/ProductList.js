/* eslint-disable react/jsx-fragments */
import { useState } from 'react';
import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from '../Data';

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { feild: 'id', headerName: 'ID', width: 90 },
    {
      feild: 'Product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => (
        <ProductListItem>
          <ProductListImage src={params.row.img} alt='' />
          {params.row.name}
        </ProductListItem>
      ),
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <>
          <Link to={`/product/${params.row.id}`}>
            <ProductListEdit className='productListEdit'>Edit</ProductListEdit>
          </Link>
          <DeleteOutlineIcon
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      ),
    },
  ];
  return (
    <ProductListContainer>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </ProductListContainer>
  );
};

export default ProductList;

const ProductListContainer = styled.div`
  flex: 4;
`;

const ProductListItem = styled.div`
  display: flex;
  align-items: center;
`;

const ProductListImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const ProductListEdit = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;
