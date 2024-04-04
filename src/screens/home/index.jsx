import {View, FlatList} from 'react-native';
import React from 'react';
import widgets from '../../widgets';
import screenStyle from '../../styles/screenStyle';

const Home = () => {
  const renderItem = ({item}) => {
    return <View>{item.isShow && item.component}</View>;
  };
  return (
    <View>
      <FlatList
        style={screenStyle.container}
        data={widgets}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
