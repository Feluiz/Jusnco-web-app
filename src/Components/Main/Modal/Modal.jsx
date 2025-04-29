import './Modal.css';
import ModalAttrList from './ModalAttrList';

const Modal = (props) => {
    const trigger = props.setOpen;
    const modalData = {...props.props};
    const listItems = {...modalData.list_items};

    return (
        <>
            <dialog className='modal-card'>
                <h3 className='modal-data-title'>{modalData.title}</h3>
                <img className='modal-img' src={modalData.targetImg} />
                <ModalAttrList dataList={listItems}/>
                <button type='button' className='close-btn' onClick={() => {trigger(false)}}> Cerrar </button>
            </dialog>
        </>
    )
};

export default Modal;