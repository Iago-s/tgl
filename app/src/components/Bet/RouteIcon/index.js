import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../../../styles/colors';

import icon from '../../../assets/icon.png';

const RouteIcon = () => {
  return (
    <View style={styles.iconTabRound}>
      <Image source={icon} style={{ width: hp('5%'), height: hp('5%') }} />
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
