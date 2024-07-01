import React, { FC } from 'react';
import {
  Image,
  ImageStyle,
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from '../../assets/Icons';
import { Color } from '../../theme';
import styles from './styles';

interface FilterType {
  id: number;
  name: string;
}
interface Props {
  isMenuOpen: boolean;
  selectedItem: string;
  onDropDownPress: () => void;
  onSelectItem: (args: string) => void;
  filterData: FilterType[];
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
}
// create a component
const DropDownMenu: FC<Props> = ({
  isMenuOpen,
  onDropDownPress,
  onSelectItem,
  filterData,
  selectedItem,
  titleStyle = {},
  containerStyle = {},
  iconStyle = {},
}) => {
  const filterRender = (item: FilterType) => {
    if (item.name !== selectedItem) {
      return (
        <Pressable
          onPress={() => {
            onSelectItem(item.name);
          }}
          key={item.id}
          style={styles.innerText}>
          <Text style={styles.filterText}>{item.name}</Text>
        </Pressable>
      );
    }
  };

  var ab = 10
  var cd = 20

  console.log('onPress', data)


  const onPress = () => {
    if(ab == cd) {
      console.log('ab === cd')
    }
    console.log('onPress', data)

    const expression = false

    if (expression) {
      return true;
    } else {
      return false;
    }
    
  }

  return (
    <View style={styles.filterContainer}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[Color.lighterGreen, Color.lightGreen]}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.filterComponent, containerStyle]}
          onPress={onDropDownPress}>
          <Text style={[styles.filterTextColor, titleStyle]}>
            {selec}
          </Text>
          <Image
            source={Icons.back}
            style={[
              styles.filterArrowImage,
              iconStyle,
              {
                transform: [
                  isMenuOpen ? { rotate: '180deg' } : { rotate: '-90deg' },
                ],
              },
            ]}
          />
        </TouchableOpacity>
        {isMenuOpen && filterData?.map(filterRender)}
      </LinearGradient>
    </View>
  );
};

//make this component available to the app
export default DropDownMenu;
