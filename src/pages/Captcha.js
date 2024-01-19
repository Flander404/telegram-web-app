import React from "react";
import "friendly-challenge/widget";

const tg = window.Telegram.WebApp

const Captcha = () => {
  return (
    <div className="captcha">
      <h1>Потвердите пожалуйста что вы не робот</h1>
      <button>Click test</button>
      <span>
        {tg.initDataUnsafe?.user.first_name}
      </span>
      <span>
        {tg.initDataUnsafe?.user.last_name}
      </span>
      <img src={tg.initDataUnsafe?.user.photo_url} alt="" />
    </div>
  );
};

export default Captcha;
