import React, {useState, useEffect, useRef} from 'react';
import {Image, View, StyleSheet} from 'react-native';

const images = [
  require('./img/logo-angular.png'),
  require('./img/logo-ember.png'),
  require('./img/logo-node.png'),
  require('./img/logo-python.png'),
  require('./img/logo-react-native.png'),
  require('./img/logo-react.png'),
  require('./img/logo-ruby-on-rails.png'),
  require('./img/logo-vue.png'),
];

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const FSLTechFilter = props => {
  const [currentImg, setCurrentImg] = useState(0);

  const alive = useRef(true);
  useEffect(() => {
    for (let index = 0; index < 50; index++) {
      setTimeout(() => {
        alive.current && setCurrentImg(randomInteger(0, images.length - 1));
      }, 100 * index);
    }
    return () => {
      alive.current = false;
    };
  }, []);
  return (
    <View style={styles.filter(props)}>
      <Image source={images[currentImg]} />
    </View>
  );
};

export default FSLTechFilter;

const styles = StyleSheet.create({
  filter: function({width, height, x, y, yawAngle, rollAngle}) {
    return {
      position: 'absolute',
      top: y - height,
      left: x,
      width,
      height,
      transform: [{rotateX: `${yawAngle}deg`}, {rotateY: `${-rollAngle}deg`}],
    };
  },
});
