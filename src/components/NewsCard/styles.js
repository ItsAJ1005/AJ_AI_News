import { styled } from '@mui/material/styles';

const Media = styled('div')({
  height: 250,
});

const Border = styled('div')({
  border: 'solid',
});

const FullHeightCard = styled('div')({
  height: '100%',
});

const Card = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderBottom: '10px solid white',
});

const ActiveCard = styled(Card)({
  borderBottom: '10px solid #22289a',
});

const GridContainer = styled('div')({
  display: 'flex',
});

const Details = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
});

const Title = styled('div')({
  padding: '0 16px',
});

const CardActions = styled('div')({
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
});

export {
  Media,
  Border,
  FullHeightCard,
  Card,
  ActiveCard,
  GridContainer,
  Details,
  Title,
  CardActions
};
