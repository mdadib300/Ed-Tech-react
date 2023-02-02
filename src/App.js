import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import Courses from './components/Courses/Courses';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <div>
      <NavigationBar />
      <Banner />
      <Courses />
    </div>
  );
}

export default App;
