import React, { useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

const Item = React.memo(({ item }) => (
  <View style={styles.item}>
    <Text>{item}</Text>
  </View>
));

const FlatListSolution = () => {
  const renderItem = ({ item }) => {
    return <Item item={item} key={item} />
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      getItemLayout={(data, index) => ({ length: 44, offset: 44 * index, index })}
      removeClippedSubviews={true}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default FlatListSolution;