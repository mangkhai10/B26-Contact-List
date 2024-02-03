export default function ContactRow({ contact, setSelectedContactId }) {
    return (
      <tr
        onClick={() => {
          setSelectedContactId(contact.id);
        }}
      >
        <td className="list">{contact.name}</td>
        <td className="list">{contact.email}</td>
        <td className="list">{contact.phone}</td>
      </tr>
    );
  }