import React from 'react';
//import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
// import Image from './composition/Image';
// import Messages from './Messages';
// import TheDate from './state/TheDate';
// import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Tabs from './state/Tabs';
import Accordian from './state/Accordian';


const firstTooltip = (
  <Tooltip color='hotpink' message='Tooltip message'>ipsum</Tooltip>
);

const secondTooltip = (
  <Tooltip color='#126BCC' message='Another tooltip message'>officiis</Tooltip>
);

// function App() {
//   return (
//     <main className='App'>
//       <Split className='left' flexBasis={2}>
//         This is the content for the LEFT split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
//         {/* Make another tooltip directly inside the app */}
//         <Tooltip message='One more tooltip message'>
//           Necessitatibus?
//         </Tooltip>
//         <Image />
//       </Split>
//       <Split className='right'>
//         This is the content for the RIGHT split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam {secondTooltip} fuga. Aliquid quo possimus id soluta aspernatur.
//       </Split>
//       <Split className='other' flexBasis={2}>
//         Content for other split with image.
//         <Image description='Text provided in the App file overriding the default.' arbAttrib='Foobar' />
//         Can we place an Image component as a child to the Tooltip component? Let's
//         <Tooltip message='Attempting something silly'> try!</Tooltip>
//       </Split>
//     </main>
//   );
// }

// function App() {
//   return (
//     <div className='App'>
//       <h1>YOUR APPLICATION NAME!</h1>
//       <div>Hello!</div>
//       <Messages name='Messages' unread={0} />
//       <Messages name='Notifictions' unread={10} />
//       <TheDate />
//       <Counter count={123} step={5}/>
//     </div>
//   );
// }

// Module 15 - Checkpoint 9: Drills
// function App() {
//   return (
//     <div>
//       <HelloWorld />
//       <Bomb />
//       <RouletteGun bulletInChamber={2}/>     
//     </div>
//   )
// }

// Module 15 - Checkpoint 10: Event Handlers and Conditional Rendering
const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

function App() {

  return(
    <div>
      <h2>Tabs Component</h2>
      <Tabs tabs={tabsProp}/>
      <h2>Accordian Component</h2>
      <Accordian sections={sections} />
    </div>
  )
}

export default App;
