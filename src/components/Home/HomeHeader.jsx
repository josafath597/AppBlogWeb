import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import useEntriesContext from '../../hooks/useEntriesContext';

const HomeHeader = () => {
    const [filter, setFilter] = useState('title');
    const [searchParameter, setSearchParameter] = useState('');
    const { nextPage, prevPage, page, isLoading, entries, fetchClients, setOpen, setEntries } = useEntriesContext();

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    const handleSearch = () => {
        if (!searchParameter) {
            return;
        }
        const newEntries = entries.filter((entry) => entry[filter].toLowerCase().includes(searchParameter.toLowerCase()));
        setEntries(newEntries);
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: 1, flexDirection: { xs: 'column', md: 'row' } }}>
            <Box
                sx={{
                    display: 'flex',
                    gap: 1,
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'stretch' }
                }}
            >
                <FormControl fullWidth sx={{ minWidth: '15rem' }}>
                    <TextField
                        id="outlined-controlled"
                        label="Buscar"
                        value={searchParameter}
                        disabled={isLoading}
                        onChange={(event) => {
                            setSearchParameter(event.target.value);
                        }}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filter}
                        label="filter"
                        onChange={handleChange}
                        disabled={isLoading}
                    >
                        <MenuItem value="title">Titulo</MenuItem>
                        <MenuItem value="content">Contenido</MenuItem>
                        <MenuItem value="author">Autor</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" sx={{ minWidth: '6rem' }} onClick={() => handleSearch()} disabled={isLoading}>
                    <Typography>Buscar</Typography>
                </Button>
                <Button variant="contained" color="primary" sx={{ minWidth: '8rem' }} onClick={() => setOpen(true)} disabled={isLoading}>
                    <Typography>Nueva Entrada</Typography>
                </Button>
                <Button variant="contained" color="primary" sx={{ minWidth: '9rem' }} onClick={() => fetchClients()} disabled={isLoading}>
                    <Typography>Restablecer</Typography>
                </Button>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, marginTop: { xs: 2, md: 0 } }}>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ minWidth: '6rem' }}
                    onClick={() => prevPage()}
                    disabled={page < 2 || isLoading}
                >
                    <Typography>Anterior</Typography>
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ minWidth: '9rem' }}
                    onClick={() => nextPage()}
                    disabled={entries.length < 70 || isLoading}
                >
                    <Typography>Siguiente</Typography>
                </Button>
            </Box>
        </Box>
    );
};

export default HomeHeader;
