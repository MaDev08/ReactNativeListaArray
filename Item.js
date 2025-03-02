import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Item = ({ nome, preco, descricao }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.preco}>R$ {preco.toFixed(2)}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 16,
    color: '#666',
  },
  descricao: {
    fontSize: 14,
    color: '#999',
  },
});

export default Item;