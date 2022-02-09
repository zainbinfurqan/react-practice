import logo from './logo.svg';
import './App.css';
import BatchUpdate from './features/batchUpdate';
import Suspense_feature from './features/suspense';
import Browse from './pages/browse';
import Table from './components/table';
import TipsTricks from './features/tips&tricks';
import Dump from './features/dump';

function App() {

  const tableData = [
    { id: 1, name: 'Zain Ahmed', title: 'title', price: 23 },
    { id: 2, name: 'Zain Ahmed', title: 'title', price: 23 },
    { id: 3, name: 'Zain Ahmed', title: 'title', price: 23 },
    { id: 4, name: 'Zain Ahmed', title: 'title', price: 23 },
    { id: 5, name: 'Zain Ahmed', title: 'title', price: 23 },
  ]

  return (
    <div className="App">
      {/* <Browse /> */}
      {/* <Table headers={['id', 'name', 'title', 'price']} tableData={tableData} /> */}
      {/* <TipsTricks /> */}
      <Dump />
    </div>
  );
}

export default App;
