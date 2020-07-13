import React from 'react';
import * as icons from './svg';

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[];

export type IconProps = {
  icon: IconType;
  color?: string;
  size?: string | number;
  className?: string;
  margin?: string;
};

const Icon = ({ icon, color, size, className, margin }: IconProps) => {
  const SVGIcon = icons[icon];
  return <SVGIcon style={{ fill: color || 'currentColor', width: size, height: 'auto', margin: margin }} className={className} />;
};

export default Icon;