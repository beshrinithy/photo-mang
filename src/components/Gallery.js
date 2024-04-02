import React from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const Gallery = ({ photos, onPhotoClick }) => {
    return (
        <Grid container spacing={2} justifyContent="center">
            {photos.map((photo, index) => (
                <Grid item key={index}>
                    <Card onClick={() => onPhotoClick(photo)}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image={photo.url}
                                alt={photo.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {photo.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {photo.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Gallery;
