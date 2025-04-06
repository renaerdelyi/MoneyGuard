import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  CardLine,
  CardLineButtonDelete,
  CardLineButtonEdit,
  CardLineP,
  CardLinePSum,
  CardLineTitle,
} from './TransactionCardItem.styled';
import { LuPencil } from 'react-icons/lu';
import { deleteTransactionThunk } from '../../redux/transactions/operations';
import { selectCategories } from '../../redux/transactions/selectors';
import { refreshUser } from '../../redux/Operations/operations';


const TransactionCardItem = ({ data, handleModal, setData }) => {
  const dispatch = useDispatch();
  const { id, transactionDate, type, categoryId, comment, amount } = data;

  const categories = useSelector(selectCategories);

  const handleDelete = (transactionId, amount) => {
    dispatch(deleteTransactionThunk(transactionId))
      .unwrap()
      .then(() => {
        dispatch(changeBalanceValue(amount));
      });
  };

  const changeBalanceValue = amount => {
    dispatch(refreshUser()); // Actualizează balance-ul
  };

  function formatNumber(number) {
    return Math.abs(number)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$& ');
  }

  function handleEditClick() {
    setData(data);
    handleModal(true);
  }

  const sumColor = type === 'EXPENSE' ? '#FF868D' : '#FFB627';

  return (
    <Card>
      <CardLine $plus={amount >= 0}>
        <CardLineTitle>Date</CardLineTitle>
        <CardLineP>{transactionDate}</CardLineP>
      </CardLine>
      <CardLine $plus={amount >= 0}>
        <CardLineTitle>Type</CardLineTitle>
        <CardLineP>{type === 'EXPENSE' ? '-' : '+'}</CardLineP>
      </CardLine>
      <CardLine $plus={amount >= 0}>
        <CardLineTitle>Category</CardLineTitle>
        <CardLineP>
          {categories?.find(c => c?.value === categoryId)?.label || 'No category'}
        </CardLineP>
      </CardLine>
      <CardLine $plus={amount >= 0}>
        <CardLineTitle>Comment</CardLineTitle>
        <CardLineP>{comment}</CardLineP>
      </CardLine>
      <CardLine $plus={amount >= 0}>
        <CardLineTitle>Sum</CardLineTitle>
        <CardLinePSum $plus={amount >= 0} style={{ color: sumColor }}>
          {formatNumber(Number(amount))}
        </CardLinePSum>
      </CardLine>
      <CardLine $plus={amount >= 0}>
        <CardLineButtonDelete onClick={() => handleDelete(id, amount)}>
          Delete
        </CardLineButtonDelete>
        <CardLineButtonEdit type="button" onClick={handleEditClick}>
          <LuPencil style={{ fontSize: '13px', marginRight: '5px' }} />
          Edit
        </CardLineButtonEdit>
      </CardLine>
    </Card>
  );
};

export default TransactionCardItem;
