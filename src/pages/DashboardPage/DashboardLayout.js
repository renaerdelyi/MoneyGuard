import React from 'react';
import { Outlet } from 'react-router-dom';

import { DashboardContainer, DashboardStyled } from './Dashboard.styled';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Main } from '../../components/Dashboard/Main/Main';

const DashboardLayout = () => {
  return (
    <DashboardStyled>
      <Header />
      <DashboardContainer>
        <Sidebar />
        <Main />
        <Outlet />
      </DashboardContainer>
    </DashboardStyled>
  );
};

export default DashboardLayout;
