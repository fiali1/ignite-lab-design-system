import { useState } from "react";
import { Heading } from "./components/Heading/Heading";
import { Text } from "./components/Text/Text";
import { TextInput } from "./components/TextInput/TextInput";

import { Envelope, Lock } from "phosphor-react";
import Logo from "./Logo";

import "./styles/global.css";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { Button } from "./components/Button/Button";
import { SignIn } from "./pages/SignIn";

function App() {
  const [count, setCount] = useState(0);

  return <SignIn />;
}

export default App;
