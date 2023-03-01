import React from 'react';
import { Title, InputBlock } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterAction } from 'redux/filter/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filterData.filter);

  const onFilterChange = event => {
    dispatch(setFilterAction(event.target.value));
  };

  return (
    <>
      <Title>Find contact by name</Title>
      <InputBlock
        type="text"
        name="filter"
        onChange={onFilterChange}
        value={value}
      />
    </>
  );
}
