import { Text, type ButtonProps, StyleSheet, Button } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { Link } from 'expo-router';
import React from 'react';
import { ThemedText } from './ThemedText';

export type ThemedButtonProps = ButtonProps & {
  lightColor?: string;
  darkColor?: string;
  isLink?: boolean;
  href: string;
  title: string;
  type?: 'default' | 'secondary' | 'outline';
};

export function ThemedButton({
  lightColor,
  darkColor,
  isLink,
  href,
  title,
  type = 'default',
  ...rest
}: ThemedButtonProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <>
      {isLink ? (
        <Link href={href}>
          <ThemedText type="link">{title || 'Link Button'}</ThemedText>
        </Link>
      ) : (
        <Button
          title={title}
          color={color}
          {...rest}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  secondary: {
    backgroundColor: 'orange'
  },
  outline: {
    backgroundColor: 'none',
    borderColor: 'green',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
