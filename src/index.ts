import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type StringToBoolean<T> = T extends 'true' | 'false' ? boolean : T;

export type Style = ViewStyle | TextStyle | ImageStyle;

export type VariantProps<Component extends (...args: any) => any> =
  Parameters<Component>[0];

type VariantShape = Record<string, Record<string, Style>>;

type VariantSchema<V extends VariantShape> = {
  [Variant in keyof V]?: StringToBoolean<keyof V[Variant]> | undefined;
};

export type Config<V extends VariantShape = VariantShape> = {
  base?: Style;
  variants?: V;
  defaultVariants?: VariantSchema<V>;
};

type Props<V> = V extends VariantShape
  ? VariantSchema<V> & {
      style?: Style;
    }
  : never;

export const sv =
  <V extends VariantShape = VariantShape>({
    base,
    defaultVariants,
    variants,
  }: Config<V>) =>
  (_options?: Props<V>) => {
    const styles: Style = {};

    const options = _options || ({} as Props<V>);

    if (base) {
      Object.assign(styles, base);
    }

    if (defaultVariants) {
      Object.keys(defaultVariants).forEach((key) => {
        if (!options.hasOwnProperty(key) || options[key] === undefined) {
          Object.assign(options, {
            [key]: defaultVariants[key],
          });
        }
      });
    }

    Object.entries(options || {}).forEach(([category, variantSelected]) => {
      if (variants?.hasOwnProperty(category)) {
        const categoryVariants = variants[category];

        if (categoryVariants?.hasOwnProperty(String(variantSelected))) {
          Object.assign(styles, categoryVariants[String(variantSelected)]);
        }
      }
    });

    if (options.hasOwnProperty('style')) {
      Object.assign(styles, options.style);
    }

    return styles;
  };

export default sv;
