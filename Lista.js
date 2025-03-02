import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Item from './Item';
import { dados } from './Dados';

const Lista = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Lista;