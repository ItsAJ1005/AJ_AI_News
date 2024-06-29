import React from 'react';
import { styled } from '@mui/material/styles';
import { Card, Container } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '45vh',
  padding: '10%',
  borderRadius: 10,
  color: 'white',
}));

const InfoCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
});

const StyledContainer = styled(Container)({
  padding: '0 5%',
  width: '100%',
  margin: 0,
});

