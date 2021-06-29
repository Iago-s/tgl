import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../styles/colors';

const RouteIcon = () => {
  return (
    <View style={styles.iconTabRound}>
      <Ionicons name="add" size={hp('5%')} color="#FFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  iconTabRound: {
    width: hp('9%'),
    height: hp('9%'),
    borderWidth: 3,
    borderColor: colors.white_ice,
    borderRadius: 60,
    marginBottom: hp('5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 4,

    backgroundColor: colors.green_avocado,
  },
});

export default RouteIcon;
