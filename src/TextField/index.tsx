import { HTMLAttributes } from 'react';
import './TextField.less';

interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  vairant?: 'primary' | 'outline' | 'fill';
}

const TextField = (props: TextFieldProps) => {
  const { label, vairant = 'primary', style, ...rest } = props;

  return (
    <div className={`hj-TextField-${vairant}-container`} style={style}>
      <input
        type='text'
        id='user_name'
        autoComplete='off'
        required
        style={style}
        {...rest}
      />
      {label && (
        <label>
          <span>{label}</span>
        </label>
      )}
    </div>
  );
};

export default TextField;
