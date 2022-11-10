import { View, Text } from 'react-native';
import React from 'react';

const RepositoryItem = ({
  fullName,
  description,
  language,
  forks,
  stars,
  reviews,
  rating,
}) => (
  <Text>
    {JSON.stringify(
      description,
      fullName,
      language,
      forks,
      stars,
      reviews,
      rating
    )}
  </Text>
);

export default RepositoryItem;
