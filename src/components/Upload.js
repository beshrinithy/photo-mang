// noinspection ES6UnusedImports

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, AppBar, Toolbar, Card, CardContent, CardMedia, Box } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

const Upload = ({ onUpload }) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile({
            file: selectedFile,
            name: selectedFile.name // Extracting and storing the file name
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file.file); // Accessing the file from the file object
        formData.append('title', title);
        formData.append('description', description);
        onUpload(formData);
        setFile(null);
        setTitle('');
        setDescription('');
    };

    return (
        <>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Photo Management App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom align="center">Upload Photo</Typography>
                <Grid container justifyContent="center">
                    <Card sx={{ maxWidth: 400 }}>
                        <CardContent>
                            <input
                                style={{ display: 'none' }}
                                id="upload-photo"
                                type="file"
                                onChange={handleFileChange}
                            />
                            <label htmlFor="upload-photo">
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 200,
                                        width: '100%',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <PhotoCamera sx={{ fontSize: '4rem' }} />
                                </Box>
                            </label>
                            <Typography variant="body1" align="center" gutterBottom>
                                {file ? file.name : 'Select a Photo'}
                            </Typography>
                            <TextField
                                label="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                fullWidth
                                multiline
                                rows={4}
                                margin="normal"
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                onClick={handleSubmit}
                                disabled={!file}
                                fullWidth
                            >
                                Upload
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Container>
        </>
    );
};

export default Upload;
