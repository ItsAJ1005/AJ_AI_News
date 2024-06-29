import React from 'react';
import { Grid, Grow, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import NewsCard from '../NewsCard/NewsCard.js';

const infoCards = [
  { color: '#00200f', title: 'Latest News', text: 'Give me the latest news' },
  { color: ' #808000', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];

const Container = styled(Grid)({
  padding: '0 5%',
  width: '100%',
  margin: 0,
});

const InfoCard = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
});

const Card = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '45vh',
  padding: '10%',
  borderRadius: 10,
  color: 'white',
});

const NewsCards = ({ articles, activeArticle }) => {
  if (!articles.length) {
    return (
      <Grow in>
        <Container container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <InfoCard item xs={12} sm={6} md={4} lg={3} key={infoCard.title}>
              <Card style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
              </Card>
            </InfoCard>
          ))}
        </Container>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Container container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }} key={i}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Container>
    </Grow>
  );
};

export default NewsCards;
