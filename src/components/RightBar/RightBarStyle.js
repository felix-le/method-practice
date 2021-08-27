import { createUseStyles } from 'react-jss';

const rightBarStyle = createUseStyles({
  '@global': {},
  modalOverlay: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-end',
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    padding: '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: '9990',
    opacity: 1,
    animation: '$show .5s ease',
    overflowX: 'hidden',
    overflowY: 'auto',
  },

  // Modal
  modal: {
    width: '500px',
    backgroundColor: '#282C34',
    position: 'relative',
    padding: '1rem',
    maxWidth: '100%',
    transition: 'all 2s ease',
    right: '-600px',
    '@media (max-width: 576px)': {
      width: '100%',
    },

    '& p:last-of-type': {
      marginBottom: 0,
    },

    '&.showUp': {
      right: 0,
    },
  },

  // Fade in open animation
  '@keyframes show': {
    '0%': {
      display: 'none',
      opacity: 0,
    },
    '1%': {
      display: 'flex',
      opacity: 1,
    },
    '100%': {
      opacity: 1,
    },
  },

  // Close button
  closeButton: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    padding: 0,
    border: 0,
    cursor: 'pointer',
    outline: 0,
    fontSize: '20px',
    background: 'transparent',
    right: '10px',
  },
});
export default rightBarStyle;
