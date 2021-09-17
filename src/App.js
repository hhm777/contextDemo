import {ConfigProvider} from "antd";
import zhCN from 'antd/lib/locale/zh_CN';
import Router from "@/router/router";
import {Provider} from "react-redux";
import store, { persistor }from "@/store/store"
import { PersistGate } from 'redux-persist/lib/integration/react';
import '@/App.scss';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
