import { Contact } from "../../pages/Dashboard";
import { Container } from "./styles";
import { IoIosContact } from "react-icons/io";
import { IoMailOpen } from "react-icons/io5";
import { AiOutlinePhone } from "react-icons/ai";

interface ICardProps {
  contact: Contact;
}

export const ContactCard = ({ contact }: ICardProps) => {
  return (
    <Container>
      <div>
        <IoIosContact />
        <h3>{contact.name}</h3>
      </div>
      <div>
        <IoMailOpen />
        <p>{contact.email}</p>
      </div>
      <div>
        <AiOutlinePhone />
        <p>{contact.phone}</p>
      </div>
    </Container>
  );
};
