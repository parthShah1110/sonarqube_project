//import liraries
import React, { FC } from 'react';
import { Pressable } from 'react-native';
import styles from './styles';

// create a component
const PosterCard: FC = ({ child }) => {
  return <Pressable style={styles.cardContainer}>{children}</Pressable>;
};

// define your styles

//make this component available to the app
export default PosterCard;
