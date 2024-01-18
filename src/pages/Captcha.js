import React from "react";
import "friendly-challenge/widget";

const Captcha = () => {
  return (
    <div className="captcha">
      <h1>Потвердите пожалуйста что вы не робот</h1>
      <div class="frc-captcha" data-sitekey="FCMSO2EKHKGB35CH"></div>
    </div>
  );
};

export default Captcha;
