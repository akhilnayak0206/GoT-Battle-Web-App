import React, { Fragment, useState, useEffect } from 'react';
import { Card, List, AutoComplete } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
];

const SearchPage = () => {
  const [dataSource, setDataSource] = useState(data);
  const [value, setValue] = useState('');

  const onChange = changeValue => {
    setValue(changeValue);
    console.log('change', value, changeValue);
  };

  const onSearch = searchValue => {
    console.log('search', searchValue);
  };

  const onSelect = selectValue => {
    console.log('onSelect', selectValue);
  };

  console.log('return', value);
  return (
    <Fragment>
      <section className='searchPageContainer'>
        <Card style={{ width: '100%' }}>
          <AutoComplete
            dataSource={data}
            style={{ width: '100%' }}
            onSelect={onSelect}
            onSearch={onSearch}
            onChange={onChange}
            placeholder='Search location'
          />
        </Card>
        <List
          size='large'
          header={<div>Locations of all the battles</div>}
          bordered
          dataSource={data}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </section>
    </Fragment>
  );
};

export default SearchPage;
