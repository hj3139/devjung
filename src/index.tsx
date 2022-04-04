import ReactDOM from 'react-dom';

import Button from './Button';
import TextField from './TextField';

ReactDOM.render(
  <>
    <div style={{ width: 100 }}>
      <TextField label='name' vairant='outline' />
    </div>
  </>,
  document.getElementById('root')
);
