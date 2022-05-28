import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';
import { OvelrayContextProvider } from './contexts/OverlayContext';

import './index.css';
import { DragAndDropProvider } from './contexts/DragAndDropContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <OvelrayContextProvider>
      <DragAndDropProvider>
        <App />
      </DragAndDropProvider>
    </OvelrayContextProvider>
  </Provider>
);
