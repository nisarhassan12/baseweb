/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-REACT-ICON
// DO NOT EDIT THIS FILE DIRECTLY, SEE README.md
import * as React from 'react';
import {useStyletron} from '../styles/index.js';
import {mergeOverride, toObjectOverride} from '../helpers/overrides.js';

import Icon from './icon.js';
import omitDollarPrefixedKeys from './omit-dollar-prefixed-keys.js';
import type {IconPropsT, StyledComponentArgsT} from './types.js';

function ArrowUp(props: IconPropsT, ref) {
  const [, theme] = useStyletron();
  const {overrides = {}, ...restProps} = props;
  const SvgOverride = mergeOverride<StyledComponentArgsT>(
    // Icons from theme really targets the SVG override in the underlying Icon component, but
    // have props typed with IconPropsT. Provided the missing props inline below here.
    // $FlowFixMe
    {
      component:
        theme.icons && theme.icons.ArrowUp ? theme.icons.ArrowUp : null,
      props: {
        title: 'Arrow Up',
        viewBox: '0 0 24 24',
        ...omitDollarPrefixedKeys(restProps),
      },
    },
    overrides && overrides.Svg ? toObjectOverride(overrides.Svg) : {},
  );
  return (
    <Icon
      title="Arrow Up"
      viewBox="0 0 24 24"
      ref={ref}
      overrides={{Svg: SvgOverride}}
      {...restProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2929 6.29289C11.6834 5.90237 12.3166 5.90237 12.7071 6.29289L16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071C16.3166 12.0976 15.6834 12.0976 15.2929 11.7071L13 9.41421V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V9.41421L8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929L11.2929 6.29289Z"
      />
    </Icon>
  );
}

export default React.forwardRef<IconPropsT, mixed>(ArrowUp);
