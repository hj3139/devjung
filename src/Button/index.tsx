import { HTMLAttributes } from 'react';
import './Button.less';

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLDivElement> {
  type?: 'primary' | 'default';
  width?: string | number;
  height?: string | number;
}

const Button = (props: ButtonProps) => {
  const {
    type = 'default',
    width = 100,
    height = 50,
    children,
    style,
    ...rest
  } = props;

  return (
    <div
      className={`hj-${type}-button-wrapper`}
      style={{ width: width, height: height, ...style }}
    >
      <button
        className='button'
        style={{ width: width, height: height, ...style }}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
