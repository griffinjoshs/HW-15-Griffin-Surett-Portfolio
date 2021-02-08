import React from 'react';
import '../Button/Button.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const STYLES = ['btn--primary', 'btn--outline', 'btn--test', 'btn--form'];

const SIZES = ['btn--medium', 'btn--large', 'btn--small', 'btn--card'];

const ButtonComp = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonLink,
  href
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={buttonLink} className='btn-mobile'>
      <Button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        href = {href}
      >
        {children}
      </Button>
    </Link>
  );
};

export default ButtonComp