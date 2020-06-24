import React, { FC } from 'react';

export interface HeadingProps {
  titleText?: string;
  leadText?: string;
}

export const Heading: FC<HeadingProps> = ({ titleText, leadText }) => (
  <>
    <h1>{titleText}</h1>
    {leadText && <p>{leadText}</p>}
  </>
);
