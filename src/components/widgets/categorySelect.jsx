import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppColors from '../../theme/colors';
import {getRequest} from '../../service/verb';
import {CATEGORIES_URL} from '../../service/urls';

const CategorySelect = ({onSelect}) => {
  // All categories
  const [categories, setCategories] = useState([]);
  // Only 1 Category
  const [category, setCategory] = useState([]);

  // GET ALL CATEGORIES
  const getCategories = () => {
    getRequest(CATEGORIES_URL)
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Select only 1 category
  const selectCategory = category => {
    setCategory(category);
    onSelect(category);
  };

  // USING WITH GETCATEGORIES FUNCTION
  useEffect(() => {
    getCategories();
  }, []);

  // RENDER ITEM
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => selectCategory(item)}
        style={
          category == item ? styles.inactiveCategory : styles.activeCategory
        }>
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
  },
  activeCategory: {
    marginRight: 8,
    padding: 10,
    backgroundColor: AppColors.SOFTGRAY,
    borderRadius: 100,
  },
  inactiveCategory: {
    marginRight: 8,
    padding: 10,
    backgroundColor: AppColors.PRIMARY,
    borderRadius: 100,
  },
  text: {
    fontWeight: 300,
  },
});

export default CategorySelect;
