import React from "react";
import "friendly-challenge/widget";

const tg = window.Telegram.WebApp;

const Captcha = () => {
  // Use state to handle asynchronous data fetching
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    // Fetch user data asynchronously
    const fetchUserData = async () => {
      try {
        const userData = await tg.getUser(); // Assuming there's a function to get user data
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    // Call the fetchUserData function
    fetchUserData();
  }, []); // Empty dependency array ensures that this effect runs only once

  // Display loading or handle case when user is not available
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="captcha">
      <h1>Подтвердите, пожалуйста, что вы не робот</h1>
      <img src={user.photo_url} alt="Аватар пользователя" />
      <button>Тест клика</button>
      <span>{user.first_name}</span>
      <span>{user.username}</span>
    </div>
  );
};

export default Captcha;
