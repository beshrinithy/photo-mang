import React from 'react';
import { Container, Typography, Button, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

const PhotoDetails = ({ photo, onBack }) => {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>{photo.title}</Typography>
            <Card sx={{ maxWidth: 600 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="400"
                        image={photo.url}
                        alt={photo.title}
                    />
                    <CardContent>
                        <Typography variant="body1">{photo.description}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Button onClick={onBack} variant="contained" color="primary" sx={{ mt: 2 }}>Back to Gallery</Button>
        </Container>
    );
};

export default PhotoDetails;
