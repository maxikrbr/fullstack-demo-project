import { Modal } from "../Modal";
import { useNavigate } from "react-router-dom";

interface IErrorProps {
  toggleModal: () => void;
}

export const ErrorPopUp = ({ toggleModal }: IErrorProps) => {
  const navigate = useNavigate();

  const handleCloseAndRedirect = () => {
    toggleModal();
    navigate("/");
  };

  return (
    <Modal toggleModal={toggleModal} blockClosing>
      Você não está autenticado
      <button onClick={handleCloseAndRedirect}>Ir para o Login</button>
    </Modal>
  );
};
