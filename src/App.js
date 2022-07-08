import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/container/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
    return (
        <>
            <Navbar />
            <ItemListContainer saludo="Bienvenidos!" />
            <ItemCount stock={5} initial={1} />
        </>
    );
}

export default App;
