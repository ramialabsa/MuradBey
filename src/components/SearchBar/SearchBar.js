import * as React from 'react';
import {Searchbar} from 'react-native-paper';
import AllColors from '../../Constants/AllColors';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{
        backgroundColor: AllColors.primary,
        width: 300,
        borderRadius: 100,
      }}
    />
  );
};

export default MyComponent;
