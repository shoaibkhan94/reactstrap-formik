import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import {storiesOf} from '@storybook/react';
import InputStory from "./InputStory";
import SelectStory from "./SelectStory";
import RadioStory from "./RadioStory";

//storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

storiesOf('Formik with Reactstrap', module)
    .add('Input', () => <InputStory/>)
    .add('Select', () => <SelectStory/>)
    .add('Radio', () => <RadioStory/>);
