import { StyleSheet } from 'react-native';
import {
  Color,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.darkBlue,
    height: verticalScale(70),
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconImage: {
    height: moderateScale(25),
    width: moderateScale(25),
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    height: moderateScale(65),
    width: moderateScale(65),
  },
  menuIconContainer: {
    position: 'absolute',
    left: horizontalScale(10),
  },
  searchIconContainer: {
    position: 'absolute',
    right: horizontalScale(10),
  },
  userIconContainer: {
    position: 'absolute',
    right: horizontalScale(45),
  },
  iconWhite: {
    tintColor: Color.white,
  },
  iconLightBlue: {
    tintColor: Color.lightBlue,
  },
});

export default styles;
