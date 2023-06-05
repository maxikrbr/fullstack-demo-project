import { Dispatch, SetStateAction } from "react";
import { CreateContactData, schema } from "./validator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { Contact } from "../../pages/Dashboard";
import { Modal } from "../Modal";
import { StyledForm } from "../../styles/Form";

interface IAddProps {
  toggleModal: () => void;
  setContacts: Dispatch<SetStateAction<Contact[]>>;
}

export const AddContact = ({toggleModal,setContacts}: IAddProps) => {
  const { register, handleSubmit } = useForm<CreateContactData>({
    resolver: zodResolver(schema),
  });

  const createContact = async (data: CreateContactData) => {
    const response = await api.post<Contact>("/contacts", { ...data });
    setContacts((previousContacts) => [response.data, ...previousContacts]);

    toggleModal();
  };

  return (
    <Modal toggleModal={toggleModal}>
      <StyledForm onSubmit={handleSubmit(createContact)}>
        <h2>Adicionar novo contato</h2>
        <label htmlFor="name">Nome Completo</label>
        <input type="text" id="name" {...register("name")} />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="phone">Telefone</label>
        <input type="text" id="phone" {...register("phone")} />

        <button type="submit">Registrar contato</button>
      </StyledForm>
    </Modal>
  );
};
