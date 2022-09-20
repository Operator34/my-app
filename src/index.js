import React from "react";
import {createRoot} from "react-dom/client"; //библиотека, которая позволяет работать с деревом элементов в браузере 
import "bootstrap/dist/css/bootstrap.css";//библиотека которая позволяет с помощью названия классов добавлять стили к компонентам
import App from "./app";

const container = document.getElementById("root")
const Root = createRoot(container)

Root.render(<App/>)