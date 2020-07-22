import React, { useState } from 'react';

import { ToggleContainer, ToggleCircle } from './ToggleButton.styles';

export interface IToggleButtonProp {
  selected: boolean;
}

const ToggleButton = () => {
  const [selected, setSelected] = useState(false);

  return (
    <ToggleContainer
      onClick={() => {
        setSelected(!selected);
      }}
      selected={selected}>
      <ToggleCircle selected={selected} />
    </ToggleContainer>
  );
};

export default ToggleButton;
