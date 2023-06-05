import { ContactList, Container, StyledHeader } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ContactCard } from "../../components/ContactCard";
import { AddContact } from "../../components/AddContact";
import { HiOutlineUserAdd } from "react-icons/hi";
import { TbDoorExit } from "react-icons/tb";
import { useAuth } from "../../hooks/useAuth";

export interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export const Dashboard = () => {
  const { logout, user } = useAuth();
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await api.get<IContact[]>("contacts");
      setContacts(response.data);
    })();
  }, []);

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <>
      <StyledHeader>
        <section>
          <div>
            <h2>CG</h2>
          </div>
          <div className="headerButtons">
            <button type="button" onClick={toggleModal}>
              <HiOutlineUserAdd />
            </button>
            <button type="button" onClick={logout}>
              <TbDoorExit />
            </button>
          </div>
        </section>
      </StyledHeader>
      <Container>
        {isOpenModal && (
          <AddContact
            toggleModal={toggleModal}
            setContacts={setContacts}
          />
        )}
        <main>
          <section>
            <h2>Contatos</h2>
            <ContactList>
              {contacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
              ))}
            </ContactList>
          </section>
        </main>
      </Container>
    </>
  );
};
