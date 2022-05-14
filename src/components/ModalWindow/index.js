import classNames from 'classnames';
import PropTypes from 'prop-types';
import {useRef} from 'react';
import './style/style.scss';

const ModalWindow = ({className, visible, onClose, title, children, footer}) => {
  const modalDialogRef = useRef(null);
  const classes = classNames('modal', className);

  const onCloseHandler = () => {
    modalDialogRef && modalDialogRef.current.classList.add('modal-dialog-out');
    setTimeout(() => onClose(), 500);
  };

  if (!visible) return null;

  return (
    <div className={classes} onClick={onCloseHandler}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()} ref={modalDialogRef}>
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
          <button className="modal-close" onClick={onCloseHandler}>&times;</button>
        </div>
          <div className="modal-body">
            <div className="modal-content">
              {children}
            </div>
          </div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  className: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.element,
  footer: PropTypes.element
};

export default ModalWindow;