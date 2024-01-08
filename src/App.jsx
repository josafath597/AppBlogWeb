import { EntriesProvider } from './Context/EntriesProvider';
import { Header } from './components/Header/Header';
import Routes from './routes';

const App = () => (
    <EntriesProvider>
        <Header />
        <Routes />
    </EntriesProvider>
);

export default App;
