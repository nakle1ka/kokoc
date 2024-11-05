import { Contacts } from "@/modules/contacts/Contacts";
import { Title } from "@/components/title/title";
import { Container } from "@/components/container/container";

const ContactsPage = () => {
  return (
    <Container>
      <Title text="Контакты" />

      <Contacts />
    </Container>
  );
};

export default ContactsPage;
