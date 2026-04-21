import './main.css';




import * as React from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';


export function RecipeReviewCard({ image, alt, description }) {


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={alt}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}




const pageImages = {
  kitchen: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
  fishes: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
  drinks: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
  desserts: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
  salads: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
  humburger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
};

function Main({ pageName }) {
  const category = pageName ? pageName.split(' ')[0].toLowerCase() : '';
  const bgClass = category ? `${category}-bg` : '';
  const cardImage = pageImages[category] || 'https://via.placeholder.com/345x194';
  const cardDescription = `Check out our amazing selection of ${category}! Freshly made and delicious.`;

  return (
    <main className={bgClass}>
      <div className="Title">
        <h1>{pageName}</h1>
        <div className='cards'>
          <RecipeReviewCard image={cardImage} alt={pageName} description={cardDescription} />


          <RecipeReviewCard image={cardImage} alt={pageName} description={cardDescription} />

          <RecipeReviewCard image={cardImage} alt={pageName} description={cardDescription} />

          <RecipeReviewCard image={cardImage} alt={pageName} description={cardDescription} />

          <RecipeReviewCard image={cardImage} alt={pageName} description={cardDescription} />

          <RecipeReviewCard image={cardImage} alt={pageName} description={cardDescription} />

          <RecipeReviewCard image={cardImage} alt={pageName} description={cardDescription} />

          <RecipeReviewCard image={cardImage} alt={pageName} description={cardDescription} />

        </div>
      </div>
    </main>
  );
}

export default Main;



      