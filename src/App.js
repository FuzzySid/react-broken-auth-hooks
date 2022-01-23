import './App.css';
import useDeviceId from './hooks/useDeviceId';
import useLocation from './hooks/useLocation';
import DisplayData from './components/DisplayData';
import useIdle from './hooks/useIdle';

function App() {

  const logout=()=>console.log('user logout');

  const {deviceId}=useDeviceId()
  const {locationData}=useLocation();
  const {isIdle}=useIdle({onIdle:logout,idleTime:0.1})  

  return (
    <div className="App">
      <header className="App-header">
          {/* <DisplayData 
            deviceId={deviceId} 
            locationData={locationData} 
          /> */}
          { isIdle ? 'User will be logged out' : 'User is not idle'}
      </header>
    </div>
  );
}

export default App;
