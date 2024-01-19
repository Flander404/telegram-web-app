import React from "react";
import "friendly-challenge/widget";

const tg = window.Telegram.WebApp

const Captcha = () => {
  return (
    <div className="captcha">
      <h1>Потвердите пожалуйста что вы не робот</h1>
      <button>Click test</button>
      <span>
        {tg.initDataUnsafe?.user?.username}
      </span>
    </div>
  );
};

export default Captcha;
