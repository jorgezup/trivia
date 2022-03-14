import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  width: 180px;
  height: 59px;
  background-image: url('https://stopots.com/images/sprite_menor.png');
  background-repeat: no-repeat;
  background-position: 0 -308px;
  font-size: 17px;
  margin: 5px 0;
  color: var(--blue-tertiary);
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  transition: .2s transform ease-in-out;

  & svg {
    color: white;
  }

  & strong {
    width: 115px;
  }

  &:hover:enabled {
    transform: scale(1.05); 
    background-position: -181px -308px;
  }

  &:disabled {
    background-position: -356px 0;

    & svg {
      color: var(--icon-disabled);
    }
  }
`;

export default StyledButton;
