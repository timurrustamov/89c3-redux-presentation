import * as React from 'react'
import { ReactChildren } from 'react';

export interface ComponentProps {
  backgroundcolor?: string,
  fontcolor?: string,
  steps?: number,
  clickable?: boolean
}

export default ((props: ComponentProps & { children?: any }) => (
  <div onClick={(e) => {
    if (props.clickable) {
      e.preventDefault()
      e.stopPropagation()
    }
  }}>{props.children}</div>
))