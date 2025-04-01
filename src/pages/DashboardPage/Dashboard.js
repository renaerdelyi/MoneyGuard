import { DashboardContainer, DashboardStyled } from './Dashboard.styled';
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Dashboard/Main/Main';

const Dashboard = () => {
  return (
    <DashboardStyled>
      <Header />
      <DashboardContainer>
        <Main />
      </DashboardContainer>
    </DashboardStyled>
  );
};

export default Dashboard;
