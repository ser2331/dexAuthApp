import React from "react";
import { AuthPage } from "../../../../pages/AuthPage/AuthPage";

import s from "./App.module.scss";

export const App = () => {
    return (
        <div className={s.App}>
            <AuthPage />
        </div>
    );
};