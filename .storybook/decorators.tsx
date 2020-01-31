import React from 'react';
import { radios } from '@storybook/addon-knobs';
import { themes } from '../themes/theming';
import { ThemeProvider } from 'styled-components';

type AvailableThemes = 'first' | 'second';

export const withThemeProvider = (StoryFn: any) => {
  const label = 'Theme';
  const options = {
    first: 'first',
    second: 'second',
  };
  const defaultTheme = options.first;
  const selectedTheme = radios(label, options, defaultTheme);

  return (
      <ThemeProvider theme={themes[selectedTheme as AvailableThemes]}>
        <StoryFn />
      </ThemeProvider>
  );
};
