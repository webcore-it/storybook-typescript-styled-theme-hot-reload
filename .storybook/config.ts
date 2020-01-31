import {addDecorator, configure} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {withKnobs} from '@storybook/addon-knobs';
import "./storystyles.css"
import {withThemeProvider} from "./decorators";

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(withThemeProvider);

configure([
    require.context('../src', true, /\.stories\.tsx$/),
], module);
