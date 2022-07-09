import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/container/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
    const onAdd = () => {
        console.log('click');
    };
    return (
        <>
            <Navbar />
            <ItemListContainer saludo="Bienvenidos!" />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    );
}

export default App;
