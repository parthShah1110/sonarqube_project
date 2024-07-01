import { StyleSheet } from 'react-native';
import { Color, horizontalScale, moderateScale } from '../../theme';

const styles = StyleSheet.create({
  filterContainer: {
    backgroundColor: Color.lightGreen,
    width: moderateScale(120),
    top: moderateScale(15),
    position: 'absolute',
    right: horizontalScale(40),
    borderRadius: moderateScale(15),
    alignItems: 'center',
    zIndex: 1,
    borderColor: Color.darkBlue,
    borderWidth: 1,
    overflow: 'hidden',
  },
  filterComponent: {
    backgroundColor: Color.darkBlue,
    flexDirection: 'row',
    width: moderateScale(120),
    borderRadius: moderateScale(15),
    paddingVertical: moderateScale(5),
    paddingLeft: horizontalScale(15),
    zIndex: 1,
    alignItems: 'center',
  },
  filterTextColor: {
    color: Color.lightGreen,
    fontSize: moderateScale(15),
    fontWeight: 'bold',
  },
  filterText: {
    color: Color.darkBlue,
    fontSize: moderateScale(15),
    fontWeight: 'bold',
  },
  filterArrowImage: {
    tintColor: Color.lightGreen,
    height: moderateScale(15),
    width: moderateScale(15),
    position: 'absolute',
    right: horizontalScale(10),
  },
  innerText: {
    width: moderateScale(120),
    paddingLeft: horizontalScale(15),
    paddingVertical: moderateScale(5),
  },
});
export default styles;
