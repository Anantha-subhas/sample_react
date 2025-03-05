import { useState, ReactNode } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger"; // set specific values within the color property
  onClick: () => void;
}

const App = ({ children, color, onClick }: Props) => {
  return (
    <>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

interface Props2 {
  children: ReactNode; // Change from 'child' to 'children'
  onClose?: () => void;
}

const Alert = ({ children, onClose }: Props2) => { // Change 'child' to 'children'
  return (
    <>
      <div className="alert alert-primary" role="alert">
        {children}
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
}

const Btn = () => {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
      )}
      <App color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </App>
    </>
  );
}

export default Btn;
