import React from "react";
import "friendly-challenge/widget";

const tg = window.Telegram.WebApp;

const Captcha = () => {
  const user = tg.initDataUnsafe?.user;
  const getUserProfilePicture = () => {
    if (user?.photo) {
      const photoObj = user.photo.big || user.photo.small || user.photo.medium;
      if (photoObj) {
        return photoObj.photo_url;
      }
    }
    // URL запасного изображения или укажите путь к своему изображению-заполнителю
    return "путь/к/изображению-заполнителю.png";
  };
  return (
    <div className="captcha">
      <h4>Потвердите пожалуйста что вы не робот</h4>
      <button>Тест пока не работает</button>
      <span>{user}</span>
    </div>
  );
};

export default Captcha;
