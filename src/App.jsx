import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Cases from './component/Cases/Cases';
import Thanks from './component/Thanks';
import Company from './component/Company';
import Blogs from './component/Cases/Blogs/Blogs';
import Test from './component/Home/Test';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
        // console.log(timeLeft)
      } else {
        clearInterval(interval);
        setIsModalOpen(true)
      }
    }, 1000); // Интервал 1 секунда (1000 миллисекунд)

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);

  return (
    <Router>
      {/* Опросник/Тест */}
      {isModalOpen &&
        <Test
          onOpen={isModalOpen}
        />
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cases" element={<Cases />} />
        <Route path="/Thanks" element={<Thanks />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;