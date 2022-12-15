import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import { Stack } from '@mui/system';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <li>
      <p>
        <Stack direction="row" alignItems="center" spacing={1}>
          {contact.name}: {contact.number}
          <IconButton
            aria-label="delete"
            size="small"
            variant="contained"
            type="button"
            onClick={() => onDelete(contact.id)}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </p>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
