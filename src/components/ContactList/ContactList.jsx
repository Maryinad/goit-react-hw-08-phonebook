import { ContactItem } from './ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/phoneBook/phoneBookOperations';
import { Loader } from 'components/Loader/Loader';
import {
  selectError,
  selectFilteredContact,
  selectIsLoadingPhonebook,
} from 'redux/selectors';

export function ContactList() {
  const isLoading = useSelector(selectIsLoadingPhonebook);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectFilteredContact);
  console.log('filteredContacts', filteredContacts);

  return (
    <>
      {isLoading && <Loader />}
      {error !== null && <p>Ooops... something went wrong</p>}
      <ul>
        {filteredContacts.length > 0 &&
          filteredContacts.map(({ id, name, number }) => (
            <>
              <ContactItem id={id} key={id} name={name} number={number} />
              {/* <button onClick={() => onDeleteBtn(id)}>Delete</button> */}
            </>
          ))}
      </ul>
    </>
  );
}
