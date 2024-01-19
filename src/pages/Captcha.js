import React from "react";
import "friendly-challenge/widget";

const tg = window.Telegram.WebApp;

const Captcha = () => {
  const user = tg.initDataUnsafe?.user;
  return (
    <div className="captcha">
      <h4>Потвердите пожалуйста что вы не робот</h4>
      <button>Тест пока не работает</button>
      <span>{user}</span>
    </div>
  );
};

export default Captcha;
