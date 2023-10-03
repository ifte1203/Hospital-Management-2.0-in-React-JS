import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import clinicSlice from "./slice/clinicSlice";
import locationSlice from "./slice/locationSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage/session";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: "ABCFEFTE23454FDDERDE",
      onError: function (error) {
        // Handle the error.
      },
    }),
  ],
};

const rootReducer = combineReducers({
  auth: authReducer,
  clinic: clinicSlice,
  location: locationSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializability check
    }),
});

export const persistor = persistStore(store);