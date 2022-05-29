import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';
import { OvelrayContextProvider } from './contexts/OverlayContext';
import { DragAndDropProvider } from './contexts/DragAndDropContext';

import './index.css';
import { ChangesProvider } from './contexts/ChangesContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ChangesProvider>
      <OvelrayContextProvider>
        <DragAndDropProvider>
          <App />
        </DragAndDropProvider>
      </OvelrayContextProvider>
    </ChangesProvider>
  </Provider>
);
