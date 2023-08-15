import React from 'react';
import { List } from 'antd';

const SearchHistory = ({ history }) => {
  return (
    <div>
      <h2>Search History</h2>
      <List
        dataSource={history}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

export default SearchHistory;
