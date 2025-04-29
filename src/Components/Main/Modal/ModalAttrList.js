import './ModalAttrList.css';

const ModalAttrList = (data) => {
    const itemsList = {...data.dataList};
    return(
        <ul>
            <li className='attr-item'>{itemsList.list_1}</li>
            <li className='attr-item'>{itemsList.list_2}</li>
            <li className='attr-item'>{itemsList.list_3}</li>
            <li className='attr-item'>{itemsList.list_4}</li>
        </ul>
    )
    
};

export default ModalAttrList;