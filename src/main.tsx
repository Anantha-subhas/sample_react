import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Btn from './App.tsx'
import Lists from './list.tsx'
import MyComponent from "./Button.tsx";
import ListComponent from './LlistComponent.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < Btn />
    <Lists />
    <MyComponent />
    <ListComponent></ListComponent>
  </StrictMode>,
)
