import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import * as Animatable from 'react-native-animatable';
import Icon from './TabBarIcon';
import { PRIMARY } from '../../constants/LAYOUT_CONST';

const animate1 = { 0: { scale: 0.8 }, 1: { scale: 1.0 } };
const animate2 = { 0: { scale: 1.0 }, 1: { scale: 0.8 } };

const circle1 = { 0: { scale: 0 }, 1: { scale: 1 } };
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View ref={viewRef} duration={100} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            style={{
              ...StyleSheet.absoluteFillObject,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
              backgroundColor: focused ? PRIMARY.main : '#fff',
            }}
          />
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? '#fff' : PRIMARY.main}
          />
        </View>
        <Animatable.Text ref={textRef} style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },

  btn: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: PRIMARY.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // fontFamily: 'medium',
    fontSize: 10,
    textAlign: 'center',
    color: PRIMARY.main,
  },
});

export default TabButton;
