import { StyleSheet } from 'react-native';
import { Color, moderateScale } from '../../theme';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'grey',
    borderRadius: moderateScale(5),
    overflow: 'hidden',
    shadowColor: Color.black,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default styles;
