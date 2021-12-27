import { Statistics } from './components/statistics/Statistics.jsx';
// import user from './user.json';
import data from './data.json';

export const App = () => {
  return (
    <>
      {/* <Profile user={user} /> */}
      <Statistics stats={data} />
    </>
  );
};

export default App;

// import { PageTitle } from 'components/PageTitle/PageTitle';
// import { EventBoard } from 'components/EventBoard/EventBoard';
// import events from '../events.json';

// export const App = () => {
//   return (
//     <>
//       <PageTitle text="24th Core Worlds Coalition Conference" />
//       <EventBoard events={events} />
//     </>
//   );
// };

// export default App;
