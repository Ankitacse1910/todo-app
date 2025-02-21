import React from 'react';
import type { CustomButtonProps } from '~/types/todo';

const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  disabled,
  className,
  children,
  onClick,
  key
}) => {
  return (
    <button key={key} type={type} disabled={disabled} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
