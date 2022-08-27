import { configureStore } from "@reduxjs/toolkit"

import { LaunchpadApi } from "../services/LaunchpadAPI"

export default configureStore({
    reducer: {
        [LaunchpadApi.reducerPath]: LaunchpadApi.reducer,
    },
});
