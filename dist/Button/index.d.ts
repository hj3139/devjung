import { HTMLAttributes } from 'react';
import './Button.less';
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLDivElement> {
    type?: 'primary' | 'default';
    width?: string | number;
    height?: string | number;
}
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
