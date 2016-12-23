import React from 'react';

export const MainLayout = ({navbar, content, footer}) => (
  <div>
      {navbar}
      <div className="container">
        {content}
      </div>
      {footer}
  </div>
);

<template name="MainLayout">
  <div>
      {{> navbar}
      <div className="container">
       {{> yield}}
      </div>
      {{> footer}}
  </div>
</template>