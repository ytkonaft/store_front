import React, { useRef, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';

const Inner = styled.div`
  &:before,
  &:after {
    content: '';
    display: table;
  }
`;

const visibleStyle = { height: 'auto', opacity: 1, overflow: 'visible' };
const hiddenStyle = { height: 0, opacity: 0, overflow: 'hidden' };

function getElementHeight(ref) {
  return ref.current ? ref.current.getBoundingClientRect().height : 0;
}

const SlideContent = ({ isVisible, children, forceSlideIn }) => {
  const isVisibleOnMount = useRef(isVisible && !forceSlideIn);
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  const transitions = useTransition(isVisible, null, {
    config: { duration: 250 },
    enter: () => async (next, cancel) => {
      const height = getElementHeight(innerRef);

      cancel();

      await next({ height, opacity: 1, overflow: 'hidden' });
      await next(visibleStyle);
    },
    leave: () => async (next, cancel) => {
      const height = getElementHeight(containerRef);

      cancel();

      await next({ height, overflow: 'hidden' });
      await next(hiddenStyle);

      isVisibleOnMount.current = false;
    },
    from: isVisibleOnMount.current ? visibleStyle : hiddenStyle,
    unique: true,
  });

  return transitions.map(({ item: show, props: springProps, key }) => {
    if (show) {
      return (
        <animated.div ref={containerRef} key={key} style={springProps}>
          <Inner ref={innerRef}>{children}</Inner>
        </animated.div>
      );
    }

    return null;
  });
};

export default SlideContent;
