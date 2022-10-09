import React from "react";
import { UilGithub, UilTwitter, UilDiscord } from "@iconscout/react-unicons";

const Header = () => {
  return (
    <div className="flex align-middle justify-between mt-6">
      <h1 className="text-darkMain text-4xl">Notes</h1>
      <div className="flex gap-3 rounded-md p-2 ">
        <a href="https://github.com/notjawad" target="_blank" rel="noreferrer">
          <UilGithub
            size="0.9em"
            className="text-darkMain text-4xl hover:scale-110 active:scale-90"
          />
        </a>
        <a
          href="https://twitter.com/cybermind123"
          target="_blank"
          rel="noreferrer"
        >
          <UilTwitter
            size="0.9em"
            className="text-darkMain text-4xl hover:scale-110 active:scale-90"
          />
        </a>
        <a
          href="https://discordapp.com/users/496186362886619138"
          target="_blank"
          rel="noreferrer"
        >
          <UilDiscord
            size="0.9em"
            className="text-darkMain text-4xl hover:scale-110 active:scale-90"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
