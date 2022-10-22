export const ContactItem = ({ nanoid, name, number, deleteContact }) => {
  return (
    <>
      <li key={nanoid}>
        <p>
          {name}: {number}
        </p>
        <button type="button" onClick={() => deleteContact(nanoid)}>
          Delete
        </button>
      </li>
    </>
  );
};
