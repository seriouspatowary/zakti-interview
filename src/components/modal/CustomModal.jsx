import { MdClose } from 'react-icons/md';

const CustomModal = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="modal bg-white rounded shadow-lg p-10 mt-20 mb-5">
        {children}
      </div>
    </div>
  );
};

export const ModalSm = ({ isOpen, children, closeModal, title }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <CustomModal isOpen={isOpen}>
      <div className="w-72">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-semibold">{title}</div>
          <div className="cursor-pointer" onClick={closeModal}>
            <MdClose size={26} />
          </div>
        </div>
        {children}
      </div>
    </CustomModal>
  );
};

export const ModalMd = ({ isOpen, children, closeModal, title }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <CustomModal isOpen={isOpen}>
      <div className="w-96">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-semibold">{title}</div>
          <div className="cursor-pointer" onClick={closeModal}>
            <MdClose size={26} />
          </div>
        </div>
        {children}
      </div>
    </CustomModal>
  );
};

export const ModalLg = ({ isOpen, children, closeModal, title }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <CustomModal isOpen={isOpen}>
      <div className="w-5/6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-semibold">{title}</div>
          <div className="cursor-pointer" onClick={closeModal}>
            <MdClose size={26} />
          </div>
        </div>
        {children}
      </div>
    </CustomModal>
  );
};

export const ModalMobile = ({ isOpen, children, closeModal, title }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <CustomModal isOpen={isOpen}>
      <div className="w-full">
        <div className="flex flex-col justify-between items-center m-4 mb-8">
          <div className="text-2xl font-semibold">{title}</div>
          <div className="cursor-pointer" onClick={closeModal}>
            <MdClose size={26} />
          </div>
        </div>
        {children}
      </div>
    </CustomModal>
  );
};

export default CustomModal;
