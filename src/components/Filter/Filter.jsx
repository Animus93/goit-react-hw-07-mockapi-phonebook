import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter)

  const test = data => {
    dispatch(filterContact(data.currentTarget.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        placeholder="name to serch"
        onChange={test}
        value={filter}
        name="filter"
      />
    </div>
  );
};
