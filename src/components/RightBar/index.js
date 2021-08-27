import Popover from '../Popover';
import rightBarStyle from './RightBarStyle';
const RightBar = ({ isOpen, setIsOpen, idDom }) => {
  const classes = rightBarStyle({});
  return (
    <Popover
      show={isOpen}
      handleShow={setIsOpen}
      idDom={idDom}
      classes={classes}
    >
      <h1>Hello</h1>
    </Popover>
  );
};

export default RightBar;
