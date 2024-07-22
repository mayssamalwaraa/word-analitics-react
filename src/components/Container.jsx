import { useState } from "react";
import {
  MAX_FACEBOOK_CHARECTAR,
  MAX_INSTAGRAM_CHARECTAR,
} from "../lib/constant";
import Stats from "./Stats";
import Textarea from "./Textarea";

function Container() {
  const [text, setText] = useState("");
  const stats = {
    numberOfWord: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharectar: text.length,
    instagramCharecterLeft: MAX_INSTAGRAM_CHARECTAR - text.length,
    facebookCharecterLeft: MAX_FACEBOOK_CHARECTAR - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}

export default Container;
