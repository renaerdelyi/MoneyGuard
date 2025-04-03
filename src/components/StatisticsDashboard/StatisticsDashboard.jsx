import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTransSumThunk } from '../../redux/statistics/operations';
import Select, { components } from 'react-select';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { useMediaQuery } from 'react-responsive';
import styles from './StatisticsDashboard.module.css';

const StatisticsDashboard = () => {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ];

  const currentMonth = new Date().getMonth() + 1;
  const startingYear = 2020;
  new Date().getFullYear();
  const years = [];
  for (let year = new Date().getFullYear(); year >= startingYear; year--) {
    years.push({ value: year, label: `${year}` });
  }

  const dispatch = useDispatch();

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(years[0].value);

  const handleMonthChange = selectData => {
    setSelectedMonth(selectData.value);
    dispatch(
      fetchTransSumThunk({ month: selectData.value, year: selectedYear })
    );
  };

  const handleYearChange = selectData => {
    setSelectedYear(selectData.value);
    dispatch(
      fetchTransSumThunk({ month: selectedMonth, year: selectData.value })
    );
  };

  useEffect(() => {
    fetchTransSumThunk({ month: selectedMonth, year: selectedYear });
  }, [dispatch, selectedMonth, selectedYear]);

  const selectStyle = {
    container: styles => ({
      ...styles,
      fontFamily: "'Poppins-Regular', sans-serif",
      width: isTabletOrDesktop ? '50%' : '100%',
    }),
    control: styles => ({
      ...styles,
      backgroundColor: 'rgba(74, 86, 226, 0.1)',
      marginBottom: '-6px',
      outline: 'none',
      borderRadius: '8px',
      height: '50px',
      paddingRight: '13px',
      border: '1px solid rgba(255, 255, 255, 0.6)',
      boxShadow: 'none',
      cursor: 'pointer',

      '&:hover': {
        border: '1px solid rgba(255, 255, 255, 0.6)',
      },
    }),
    singleValue: styles => ({
      ...styles,
      color: '#FBFBFB',
      fontSize: '16px',
    }),
    placeholder: styles => ({
      ...styles,
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: '16px',
    }),
    menu: styles => ({
      ...styles,
      borderRadius: '8px',
      backgroundColor: 'white',
      background:
        'linear-gradient(0deg, rgba(83, 61, 186, 0.70) 0%, rgba(80, 48, 154, 0.70) 43.14%, rgba(106, 70, 165, 0.52) 73.27%, rgba(133, 93, 175, 0.13) 120.03%)',
      boxShadow: '0px 4px 60px 0px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(50px)',
      overflow: 'hidden',
      color: '#FBFBFB',
      fontFamily: "'Poppins-Regular', sans-serif",
      fontSize: '16px',
      fontWeight: '400',
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

  return (
    <div className={styles.dashboard}>
      <Select
        required
        options={months}
        components={{ DropdownIndicator, IndicatorSeparator: () => null }}
        placeholder="Select month"
        styles={selectStyle}
        isSearchable={false}
        onChange={handleMonthChange}
        defaultValue={months[selectedMonth - 1]}
      />
      <Select
        required
        options={years}
        components={{ DropdownIndicator, IndicatorSeparator: () => null }}
        placeholder="Select year"
        styles={selectStyle}
        isSearchable={false}
        onChange={handleYearChange}
        defaultValue={years.find(year => year.value === selectedYear)}
      />
    </div>
  );
};

export default StatisticsDashboard;
