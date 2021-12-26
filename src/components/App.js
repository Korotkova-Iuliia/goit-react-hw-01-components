import { Profile } from 'components/Profile/Profile';
import user from '../ user.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
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
