import { StyleSheet } from 'react-native';
import {
  Color,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    height: moderateScale(320),
    opacity: 0.7,
  },
  backgroundImageContainer: {
    height: moderateScale(320),
    backgroundColor: Color.darkBlue,
  },
  sectionContainer: {
    flexDirection: 'row',
    paddingVertical: verticalScale(10),
    marginLeft: moderateScale(10),
    alignItems: 'center',
    marginBottom: verticalScale(10),
    marginTop: verticalScale(10),
  },
  sectionText: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: Color.white,
    letterSpacing: 1,
  },
  trailerContainer: {
    marginHorizontal: moderateScale(20),
    alignItems: 'center',
  },
  trailerImage: {
    height: 150,
    width: 300,
    borderRadius: 10,
  },
  trailerTitle: {
    color: Color.white,
    fontSize: 22,
    fontWeight: '700',
  },
  trailerDescription: {
    color: Color.white,
    fontSize: 18,
    fontWeight: '500',
  },
  iconWhite: {
    tintColor: Color.white,
    opacity: 0.6,
  },
  menuIconContainer: {
    position: 'absolute',
    top: verticalScale(10),
    right: horizontalScale(10),
  },
  playIcon: {
    tintColor: Color.white,
    opacity: 0.8,
    height: moderateScale(50),
    width: moderateScale(50),
  },
  playIconContainer: {
    position: 'absolute',
    top: verticalScale(55),
    left: horizontalScale(130),
  },
});
export default styles;
