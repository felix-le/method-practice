import React from 'react';
import { createUseStyles } from 'react-jss';

const toolTips = createUseStyles({
  tooltip: {
    cursor: 'pointer',
    display: 'inline-block',
    position: 'relative',
    borderBottom: '1px dotted $blue',
    '& .tooltip__content': {
      backgroundColor: '#2196F3',
      borderRadius: '4px',
      bottom: '100%',
      color: 'white',
      left: '12%',
      marginLeft: '-50%',
      opacity: '0',
      padding: '0.5rem',
      position: 'absolute',
      textAlign: 'center',
      transition: 'opacity 0.5s',
      visibility: 'hidden',
      width: 'fit-content',
      zIndex: '1',
      fontSize: '0.8rem',
    },
    '& .tooltip__content::after': {
      borderWidth: '5px',
      borderStyle: 'solid',
      borderColor: '#2196F3 transparent transparent transparent',
      content: '""',
      left: '50%',
      marginLeft: '-5px',
      position: 'absolute',
      top: '100%',
    },

    '&:hover': {
      '& .tooltip__content': { opacity: '1', visibility: 'visible' },
    },
  },
  tooltipIcon: {
    marginLeft: '20px',
  },
});

const ToolTip = ({ info, children }) => {
  const classes = toolTips({});
  return (
    <div className={classes.tooltip}>
      <span className='tooltip__content'>{info}</span>
      {children}
    </div>
  );
};
export default ToolTip;
