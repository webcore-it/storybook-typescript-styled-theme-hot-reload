import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { MyButton } from './MyButton';

const handleClickOnButton = () => {
  alert('handleClickOnButton');
};

storiesOf('Atoms/Button', module).add(
  'MyButton',
  () => (
    <MyButton text={text('text', 'Click me')} onClick={handleClickOnButton} />
  ),
  {
    info: {
      inline: true,
      text: 'A button to click',
    },
  },
);
