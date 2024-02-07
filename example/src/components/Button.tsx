import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React from 'react';
import sv, { VariantProps } from 'style-variants';

type ButtonVariantsProps = VariantProps<typeof button>;

type ButtonProps = ButtonVariantsProps &
  TouchableOpacityProps & {
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
      true: {},
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
    disabled: false,
  },
  compoundVariants: [
    {
      variant: 'secondary',
      disabled: true,
      style: {
        backgroundColor: 'darkred',
      },
    },
    {
      variant: 'primary',
      disabled: true,
      style: {
        backgroundColor: 'darkblue',
      },
    },
  ],
});

const text = sv({
  base: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
});

const textStyles = text();

const Button = ({
  style,
  children,
  disabled,
  size,
  variant,
  ...props
}: ButtonProps) => {
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
      {...props}
    >
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
