import PropTypes from 'prop-types';
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

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  nanoid: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
