import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React from 'react';
import sv, { VariantProps } from 'style-variants';

type ButtonVariantsProps = VariantProps<typeof button>;

type ButtonProps = TouchableOpacityProps &
  ButtonVariantsProps & {
    children: string;
  };

const button = sv({
  base: {
    borderWidth: 3,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  variants: {
    size: {
      small: {
        paddingVertical: 8,
        paddingHorizontal: 16,
      },
      medium: {
        paddingVertical: 12,
        paddingHorizontal: 24,
      },
      large: {
        paddingVertical: 16,
        paddingHorizontal: 32,
      },
    },
    variant: {
      primary: {
        backgroundColor: 'blue',
        borderColor: 'dodgerblue',
      },
      secondary: {
        backgroundColor: 'red',
        borderColor: 'lightpink',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
    disabled: false,
  },
});

const text = sv({
  base: {
    color: 'white',
    fontWeight: '500',
  },
});

const textStyles = text();

const Button = ({ style, children, disabled, size, variant }: ButtonProps) => {
  const buttonStyles = button({
    disabled,
    size,
    variant,
    style,
  });

  return (
    <TouchableOpacity
      style={buttonStyles}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
