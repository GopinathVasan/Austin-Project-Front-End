import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../DashboardC/Header";
import LineChart from "../../DashboardC/LineChart";
import BarChart from "../../DashboardC/BarChart";
import StatBox from "../../DashboardC/StatBox";
import ProgressCircle from "../../DashboardC/ProgressCircle";
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [transactions, setTransactions] = useState([]);
  const [profitData, setProfitData] = useState({
    investedAmount: 0,
    reinvestedAmount: 0,
    revenueGenerated: 0,
    returns: 0,
    companyExpenses: 0
  });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/dashboard/overallprofits')
      .then(response => response.json())
      .then(data => {
        // Assuming there's only one entry returned by the backend
        setProfitData(data[0]);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/dashboard/investments')
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
  justify-content= "center"
  align-items="center"
  flexDirection={"row"}
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        
        {/* <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box> */}
    
        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                <i class="fa fa-inr"></i>45,229
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              textAlign={"left"}
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
               ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box> */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
      <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} colors={colors.grey[100]} p="15px">
        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
          Recent Transactions
        </Typography>
      </Box>
      {transactions.map((transaction, i) => (
        <Box key={`${transaction.profileId}-${i}`} display="flex" justifyContent="space-between" alignItems="center" textAlign="left" borderBottom={`4px solid ${colors.primary[500]}`} p="15px">
          <Box>
            <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
              {transaction.profileId}
            </Typography>
            <Typography color={colors.grey[100]}>
              {transaction.customerName}
            </Typography>
          </Box>
          <Box color={colors.grey[100]}>
            {transaction.investedDate}
          </Box>
          <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
          <i class="fa fa-inr"></i>{transaction.amount}
          </Box>
        </Box>
      ))}
    </Box>

        {/* ROW 3 */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
      <Typography variant="h4" fontWeight="600" padding={0}>
        Overall Profit
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" >
        <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "20px" }}>
        <i class="fa fa-inr"></i>{profitData.revenueGenerated} revenue generated
        </Typography>
        <Typography variant="h5" sx={{ mt: "20px" }}>Invested amount: <i class="fa fa-inr"></i>{profitData.investedAmount}</Typography>
        <Typography variant="h5" sx={{ mt: "20px" }}>Reinvested amount: <i class="fa fa-inr"></i>{profitData.reinvestedAmount}</Typography>
        <Typography variant="h5" sx={{ mt: "20px" }}>Returns: {profitData.returns}%</Typography>
        <Typography variant="h5" sx={{ mt: "20px" }}>Company expenses: <i class="fa fa-inr"></i>{profitData.companyExpenses}</Typography>
      </Box>
    </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="18000"
            subtitle="Company Expenses"
            progress="0.05"
            increase="-0.5%"
            icon={
              <CurrencyRupeeIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
