import { Container, Grid } from '@mui/material';
import { HomeHeader, ListEntries, ModalAddEntry } from '../../components/Home';

const Home = () => (
    <>
        <Container>
            <Grid container marginTop={2}>
                <Grid item sx={{ width: '100%' }}>
                    <HomeHeader />
                </Grid>
                <Grid item marginTop={2} sx={{ width: '100%' }}>
                    <ListEntries />
                </Grid>
            </Grid>
        </Container>
        <ModalAddEntry />
    </>
);

Home.propTypes = {};

export default Home;
