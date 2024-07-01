//import liraries
import React, { FC } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Icons from '../../assets/Icons';
import Images from '../../assets/Images';
import styles from './styles';

interface Props {
  isMenuIcon: boolean;
  isSearchIcon: boolean;
  isUsersIcon: boolean;
  onBackPress: () => void;
}
// create a component
const CustomHeader: FC<Partial<Props>> = ({
  isMenuIcon = false,
}) => {
  return (
    <View style={styles.container}>
      {/* menu and back icon */}
      <TouchableOpacity
        style={styles.menuIconContainer}
        activeOpacity={0.6}
        onPress={onBackPress}>
        <Image
          source={isMenuIcon ? Icons.menu : Icons.back}
          resizeMode="center"
          style={[styles.iconImage, styles.iconWhite]}
        />
      </TouchableOpacity>
      {/* MovieDb Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={Images.logo}
          resizeMode="center"
          style={styles.logoImage}
        />
      </View>
      {/* users Icon  */}
      {isUsersIcon && (
        <CustomIcon
          imageStyle={styles.iconWhite}
          source={Icons.users}
          containerStyle={styles.userIconContainer}
        />
      )}
      {/* search Icon */}
      {isSearchIcon && (
        <CustomIcon
          imageStyle={styles.iconLightBlue}
          source={Icons.search}
          containerStyle={styles.searchIconContainer}
        />
      )}
    </View>
  );
};

//make this component available to the app
export default CustomHeader;
