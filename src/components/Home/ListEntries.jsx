/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import useEntriesContext from '../../hooks/useEntriesContext';

const TruncateText = ({ text, maxLength }) => {
    if (text.length > maxLength) {
        return `${text.substring(0, maxLength)}...`;
    }
    return text;
};

const ListEntries = () => {
    const { entries } = useEntriesContext();
    const showContent = (entry) => {
        Swal.fire({
            html: `<p style="font-size: 1.5em; margin: 5px 0">${entry.title}</p><p style="font-size: 1em;">${entry.author}</p><p style="font-size: 0.8em; margin: 5px 0">${entry.content}</p>`,
            confirmButtonText: 'Cerrar'
        });
    };
    return (
        <Grid container spacing={1}>
            {entries.map((entry) => (
                <Grid item key={entry.id} xs={12} md={4} lg={3}>
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            maxWidth: '17.188rem',
                            height: '225px'
                        }}
                    >
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {entry.author}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {TruncateText({ text: entry.title, maxLength: 25 })}
                            </Typography>
                            <Typography variant="body2">{TruncateText({ text: entry.content, maxLength: 70 })}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => showContent(entry)}>
                                Leer Más
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

ListEntries.propTypes = {};

export default ListEntries;
