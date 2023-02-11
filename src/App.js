import "./App.css";
import moment from 'moment';

function App() {
  let enddate = moment("2023-04-01").format('YYYY-MM-DD');
  let today = moment().format('YYYY-MM-DD');

  let daysleft = moment(enddate).diff(moment(today), 'days');

  return (
      <div className="App">
        <div className="title" style={{ padding: "50px" }}>
          Countdown huis ❤️
        </div>

        <div className="number"> {daysleft}</div>
       
        <div className="label">dagen</div>
      </div>
  );
}

export default App;
