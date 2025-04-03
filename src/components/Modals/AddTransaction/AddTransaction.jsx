import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredCategories } from '../../../redux/transactions/selectors';
import { components } from 'react-select';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import * as yup from 'yup';
import { date } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Header } from '../../Dashboard/Header/Header';
import {
  CloseBtn,
  CommentInputStyled,
  ErrorMessage,
  InputErrorWrap,
  StyledSelect,
  Backdrop,
  BtnAdd,
  BtnCancel,
  ButtonsWrap,
  CloseModalBtn,
  Gradient,
  Form,
  Input,
  Modal,
  Title,
  WrapSumCalendar,
} from './AddTransaction.styled';
import {
  Income,
  InputToggle,
  LabelToggle,
  Expense,
  SpanToggle,
  TransactionToggleWrap,
} from './ToggleSwitch.styled';
import { addTransactionThunk } from '../../../redux/transactions/operations';
import {
  CalendarContainer,
  CalendarIcon,
  DateWrapper,
} from './Calendar.styled';

export const INCOME_CODE = '063f1132-ba5d-42b4-951d-44011ca46262';

const schema = yup
  .object({
    isExpense: yup.boolean(),
    amount: yup
      .number()
      .typeError('Please, enter the sum')
      .required('Sum is required'),
    date: date().required('Date is required'),
    category: yup
      .string()
      .uuid('Incorrect format')
      .when('isExpense', {
        is: true,
        then: schema => schema.required('Category is required'),
      }),
  })
  .required();

export const AddTransaction = ({ closeModal }) => {
  const [isMinus, setIsMinus] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const transactionCategories = useSelector(selectFilteredCategories);
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [closeModal]);

  const onCancelButton = () => {
    closeModal();
  };

  const transformDate = function getFormattedDate() {
    const year = startDate.getFullYear();
    const month = String(startDate.getMonth() + 1).padStart(2, '0');
    const day = String(startDate.getDate()).padStart(2, '0');
    const transformedDate = `${year}-${month}-${day}`;
    return transformedDate;
  };

  function onSubmit(formData) {
    const transaction = {};
    transaction.comment = formData.comment;
    const amountValue = Number(formData.amount).toFixed(2);
    transaction.amount =
      formData.isExpense && amountValue > 0 ? -amountValue : amountValue;
    transaction.type = formData.isExpense ? 'EXPENSE' : 'INCOME';
    transaction.categoryId = formData.isExpense
      ? formData.category
      : INCOME_CODE;
    transaction.transactionDate = transformDate(startDate);
    dispatch(addTransactionThunk(transaction)).unwrap();
    closeModal();
  }

  const selectStyle = {
    control: styles => ({
      ...styles,
      backgroundColor: 'transparent',
      marginTop: '40px',
      border: 'none',
      borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
      outline: 'none',
      borderRadius: '0',
      boxShadow: 'none',
      cursor: 'pointer',
      paddingRight: isTabletOrDesktop ? '4px' : '10px',

      '&:hover': {
        border: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
      },
    }),
    singleValue: styles => ({
      ...styles,
      color: '#FBFBFB',
      fontSize: '18px',
      paddingLeft: isTabletOrDesktop ? '0' : '10px',
    }),
    placeholder: styles => ({
      ...styles,
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: '18px',
      paddingLeft: isTabletOrDesktop ? '0' : '10px',
    }),
    menu: styles => ({
      ...styles,
      borderRadius: '8px',
      backgroundColor: 'transparent',
      boxShadow: '0px 4px 60px 0px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(50px)',
      overflow: 'hidden',
      color: '#FBFBFB',
      fontFamily: "'Poppins-Regular', sans-serif",
      fontSize: '16px',
      fontWeight: '400',

      '&::before': {
        background:
          'linear-gradient(0deg, rgba(83, 61, 186, 0.70) 0%, rgba(80, 48, 154, 0.70) 43.14%, rgba(106, 70, 165, 0.52) 73.27%, rgba(133, 93, 175, 0.13) 120.03%)',
        content: '""',
        filter: 'blur(50px)',
        position: 'absolute',
        inset: '0%',
        zIndex: '-1',
      },
    }),
    option: (styles, { isFocused, isSelected }) => {
      if (isFocused) {
        return {
          ...styles,
          background: '#FFFFFF1A',
          color: '#FF868D',
        };
      } else if (isSelected) {
        return {
          ...styles,
          background: 'transparent',
        };
      } else {
        return {
          ...styles,
        };
      }
    },
    menuList: base => ({
      ...base,
      '&::-webkit-scrollbar': {
        width: '6px',
      },
      '&::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#BFB4DD',
        borderRadius: '12px',
      },
    }),
  };

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? (
          <SlArrowUp size={18} label="Arrow up" color={'var(--white)'} />
        ) : (
          <SlArrowDown size={18} label="Arrow down" color={'var(--white)'} />
        )}
      </components.DropdownIndicator>
    );
  };

  function handleDateChange(dateChange) {
    setValue('date', dateChange, {
      shouldDirty: true,
    });
    setStartDate(dateChange);
  }

  return (
    <Backdrop onClick={onBackdropClick}>
      {!isTabletOrDesktop && <Header />}
      <Modal>
        <Gradient />
        <CloseModalBtn type="button" onClick={() => closeModal()}>
          <CloseBtn />
        </CloseModalBtn>
        <Title>Add transaction</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TransactionToggleWrap>
            <Income $active={!isMinus}>Income</Income>
            <LabelToggle>
              <InputToggle
                type="checkbox"
                defaultChecked={true}
                {...register('isExpense')}
                onChange={() => setIsMinus(!isMinus)}
              />
              <SpanToggle />
            </LabelToggle>
            <Expense $active={isMinus}>Expense</Expense>
          </TransactionToggleWrap>

          {isMinus && (
            <Controller
              name="category"
              control={control}
              rules={{ required: true }}
              render={({ field, value }) => (
                <InputErrorWrap>
                  <StyledSelect
                    id="category"
                    options={transactionCategories}
                    components={{
                      DropdownIndicator,
                      IndicatorSeparator: () => null,
                    }}
                    placeholder="Select a category"
                    styles={selectStyle}
                    isSearchable={false}
                    value={transactionCategories.find(
                      category => category.value === value
                    )}
                    onChange={option => field.onChange(option.value)}
                  />{' '}
                  {errors.category && (
                    <ErrorMessage>{errors.category.message}</ErrorMessage>
                  )}
                </InputErrorWrap>
              )}
            />
          )}

          <WrapSumCalendar>
            <InputErrorWrap>
              <Input
                type="text"
                name="amount"
                placeholder="0.00"
                {...register('amount')}
                autoComplete="off"
              />
              {errors.amount && (
                <ErrorMessage>{errors.amount.message}</ErrorMessage>
              )}
            </InputErrorWrap>
            <InputErrorWrap>
              <DateWrapper>
                <Controller
                  name="date"
                  control={control}
                  defaultValue={startDate}
                  color="var(--white-60)"
                  render={() => (
                    <CalendarContainer>
                      <ReactDatePicker
                        selected={startDate}
                        onChange={handleDateChange}
                        dateFormat="dd.MM.yyyy"
                        maxDate={new Date()}
                      />
                    </CalendarContainer>
                  )}
                />
                <CalendarIcon />
              </DateWrapper>
              {errors.date && (
                <ErrorMessage>{errors.date.message}</ErrorMessage>
              )}
            </InputErrorWrap>
          </WrapSumCalendar>

          <CommentInputStyled
            type="text"
            placeholder="Comment"
            autoComplete="off"
            {...register('comment')}
          />
          <ButtonsWrap>
            <BtnAdd type="submit">Add</BtnAdd>
            <BtnCancel type="button" onClick={onCancelButton}>
              Cancel
            </BtnCancel>
          </ButtonsWrap>
        </Form>
      </Modal>
    </Backdrop>
  );
};
