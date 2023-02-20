import './App.css';
import CreatePage from './CreatePage';
import Header from './Header';
import Sidebar from './Sidebar';

function Create() {
  return (
    <div className="create-container">
      <Header/>
      <div className="create-page">
        <Sidebar/>
        <CreatePage/>

      </div>
      
    </div>
  );
}

export default Create;