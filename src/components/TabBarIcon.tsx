// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import { type ComponentProps } from 'react';
import { type ColorValue } from 'react-native';

type TabBarIconProps = Omit<ComponentProps<typeof Ionicons>, 'color'> & {
  color?: ColorValue;
};

export function TabBarIcon({ style, color, ...rest }: TabBarIconProps) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} color={color as string} {...rest} />;
}
