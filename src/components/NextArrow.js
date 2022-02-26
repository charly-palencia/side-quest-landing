import React, {useRef} from 'react';
import PropType from 'prop-types';

function NextArrow(props) {
  const {onClick} = props;
  const intervalRef = useRef(null);

  const startCounter = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      onClick();
    }, 100);
  };

  const stopCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div
      className="h-full w-28 bg-gradient-to-l from-black z-40 absolute right-0 top-0 pointer-mouse"
      style={{content: ' '}}
      onMouseOver={startCounter}
      onMouseOut={stopCounter}
      onMouseLeave={stopCounter}
    />
  );
}

NextArrow.propTypes = {
  onClick: PropType.func(),
};

export default NextArrow;
