import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  const { title } = props.album;
  return (
    <Card>
      <CardSection>
        <Text>{title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
