import { View, Text } from 'react-native';
import React from 'react';

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
}) => (
  <View style={{ marginBottom: 15 }}>
    <Text>Full name: {fullName}</Text>
    <Text>Description: {description}</Text>
    <Text>Language: {language}</Text>
    <Text>Forks: {forksCount}</Text>
    <Text>Stars: {stargazersCount}</Text>
    <Text>Rating: {ratingAverage}</Text>
    <Text>Reviews: {reviewCount}</Text>
  </View>
);

export default RepositoryItem;
