import './App.css';
import Todo from './components/Todo/Todo';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import { twMerge } from 'tailwind-merge';

function App() {
  const body = document.body
  const value = {
    appendTo: body,
    inputStyle: 'filled',
    zIndex: {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100,  // tooltip
      toast: 1200     // toast
    },
    hideOverlaysOnDocumentScrolling: true,
    autoZIndex: true,
    unstyled: true,
    pt: Tailwind,
    ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge }
  };

  return (
    <div className="App">
      <PrimeReactProvider value={value}>
        <Todo />
      </PrimeReactProvider>
    </div>
  );
}

export default App;
