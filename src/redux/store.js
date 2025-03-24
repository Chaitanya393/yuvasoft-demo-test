import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import jobReducer from './features/jobSlice';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['jobs'] 
};


const persistedReducer = persistReducer(persistConfig, jobReducer);


export const store = configureStore({
    reducer: {
        jobs: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
            }
        })
});


export const persistor = persistStore(store); 