import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import clinicSlice from "./slice/clinicSlice";
import  {persistReducer,persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     clinic:clinicSlice,
//     // products: productReducer,
//   },
// });


const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: 'ABCFEFTE23454FDDERDE',
      onError: function (error) {
        // Handle the error.
      },
    }),
  ],
};

const rootReducer = combineReducers({
  auth: authReducer,
  clinic:clinicSlice,
});

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  
  reducer : persistedReducer,
})

export const persistor = persistStore(store);