
import Header from './Header';
import RetrievePage from './RetrievePage';
import Sidebar from './Sidebar';

function Retrieve() {
  return (
    <div className="create-container">
      <Header/>
      <div className="create-page">
        <Sidebar/>
        <RetrievePage/>

      </div>
      
    </div>
  );
}

export default Retrieve;