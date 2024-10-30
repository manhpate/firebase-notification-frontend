// src/App.js
import React, { useEffect } from 'react';
import { messaging, getToken, onMessage } from './firebase';

function App() {
  useEffect(() => {
    // Yêu cầu quyền nhận thông báo
    getToken(messaging, { vapidKey: 'YOUR_WEB_PUSH_CERTIFICATES_KEY_PAIR' })
      .then((currentToken) => {
        if (currentToken) {
          console.log('Token nhận thông báo:', currentToken);
          // Bạn có thể gửi token này lên backend để đăng ký thông báo
        } else {
          console.log('Không có token, yêu cầu quyền từ người dùng.');
        }
      })
      .catch((err) => {
        console.log('Lỗi khi lấy token:', err);
      });

    // Lắng nghe thông báo khi ứng dụng đang chạy
    onMessage(messaging, (payload) => {
      console.log('Thông báo nhận được:', payload);
      alert(`Thông báo mới: ${payload.notification.title} - ${payload.notification.body}`);
    });
  }, []);

  return <div className="App">Firebase Notification Frontend</div>;
}

export default App;
