import React from 'react';

const HeadComponents = [<script key="arrowkeysnavigation" src="/js/arrow-keys-navigation.js" defer/>];

const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents);
};

export { onRenderBody };