import * as React from 'react'
import { StepProps } from './Step';
import { ReactChildren } from 'react';

export default ((props: StepProps & { children?: any }) => (
  <div>{props.children}</div>
))