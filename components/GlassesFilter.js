import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const GlassesFilter = ({
  rightEyePosition,
  leftEyePosition,
  yawAngle,
  rollAngle,
}) => {
  return (
    <View>
      <Image
        source={require('./img/glasses.png')}
        style={styles.glasses({
          rightEyePosition,
          leftEyePosition,
          yawAngle,
          rollAngle,
        })}
      />
    </View>
  );
};

export default GlassesFilter;

const styles = StyleSheet.create({
  glasses: ({rightEyePosition, leftEyePosition, yawAngle, rollAngle}) => {
    const width = Math.abs(leftEyePosition.x - rightEyePosition.x) + 150;
    return {
      position: 'absolute',
      top: rightEyePosition.y - 100,
      left: rightEyePosition.x - 100,
      resizeMode: 'contain',
      width,
      transform: [{rotateX: `${yawAngle}deg`}, {rotateY: `${-rollAngle}deg`}],
    };
  },
});
