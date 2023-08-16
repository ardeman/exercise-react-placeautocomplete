import React, { useState } from "react";
import { Input, Button, AutoComplete, Space, Form } from "antd";
import { fetchMockAutocompleteSuggestions } from "../services/mockAutocompleteService";

const SearchBar = ({ onSearch }) => {
  const [form] = Form.useForm();
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState([]);

  const handleSearch = () => {
    onSearch(query);
    setQuery("");
  };

  const handleAutoComplete = async (value) => {
    setQuery(value);

    if (value) {
      const suggestions = await fetchMockAutocompleteSuggestions(value);
      setOptions(suggestions.map((item) => ({ value: item })));
    } else {
      setOptions([]);
    }
  };

  return (
    <Form form={form} onFinish={handleSearch}>
      <Space.Compact>
        <AutoComplete
          value={query}
          options={options}
          onSearch={handleAutoComplete}
          onSelect={(value) => {
            setQuery(value);
          }}
          placeholder="Search for a place..."
        >
          <Input />
        </AutoComplete>
        <Button type="primary" onClick={handleSearch}>
          Search
        </Button>
      </Space.Compact>
    </Form>
  );
};

export default SearchBar;
