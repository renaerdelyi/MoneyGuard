import React from 'react';
import sprite from '../../assets/icons/sprite.svg';

const Icon = ({ name, className = '', size = 24 }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      <use href={`${sprite}#${name}`} />
    </svg>
  );
};

export default Icon;
