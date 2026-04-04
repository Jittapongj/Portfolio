import { contactData } from '../data/contact';
import { ContactCard } from '../components/ui/card';
import '../styles/contact.scss';

const Contact = () => {
  return (
    <section id='contact' className="min-h-screen">
      <div className="container mx-auto">
        <div className="">
          <h1 className="mb-4">Get In Touch</h1>
          <p className="">Feel free to contact me via any of these channels.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {contactData.map((item) => (
            <ContactCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;