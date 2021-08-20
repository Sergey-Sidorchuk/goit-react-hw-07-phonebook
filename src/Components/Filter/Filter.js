import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/actions';
import styles from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();

    const onChange = event => dispatch(filterContact(event.target.value));


return (

    <label className={styles.label}>Find contacts by name
        <input className={styles.input} type="text"  onChange={onChange} />
    </label>

)
};

export default Filter;

