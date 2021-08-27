import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
const Popover = ({ children, show, handleShow, classes, idDom }) => {
  // portal modal-root element. always exist in index.html.
  // This el is used to append modal content in modal portal
  const portalEl = document.getElementById(idDom);
  const modal = useRef(null);
  const [isAnimation, setIsAnimation] = useState(false);
  /**
   * Handle event when user keyup
   * @params e Event object when keyup
   * @returns void
   */
  const handleEventKeyup = useCallback(
    (e) => {
      const keys = [27];
      if (keys.includes(e.keyCode) && show) {
        e.preventDefault();
        handleShow(false);
        window.removeEventListener('keyup', handleEventKeyup, false);
      }
    },
    [handleShow, show]
  );
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setIsAnimation(true);
      }, 100);
    } else {
      setIsAnimation(false);
    }
  }, [handleShow, show]);
  /**
   * Handle event when user click out of portal element
   * If target of click is not in modal portal element, hide current modal.
   * @params e Event object when click
   * @returns void
   */
  const handleClickOutside = useCallback(
    (e) => {
      if (modal && modal.current && !modal.current.contains(e.target) && show) {
        e.preventDefault();
        handleShow(false);
        window.removeEventListener('click', handleClickOutside, false);
      }
    },
    [handleShow, show]
  );

  useEffect(() => {
    window.addEventListener('keyup', handleEventKeyup, false);
    document.addEventListener('click', handleClickOutside, false);

    return () => {
      window.removeEventListener('keyup', handleEventKeyup, false);
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, [handleEventKeyup, handleClickOutside]);

  return show
    ? ReactDOM.createPortal(
        <div className={classes.modalOverlay}>
          <div
            className={`${classes.modal} ${isAnimation ? 'showUp' : ''}`}
            ref={modal}
          >
            <button
              type='button'
              className={classes.closeButton}
              onClick={() => handleShow(false)}
            >
              ×
            </button>
            {children}
          </div>
        </div>,
        portalEl
      )
    : ReactDOM.createPortal('', portalEl);
};

export default React.memo(Popover);
