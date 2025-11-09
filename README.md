# 🧠 Quiz Platform

A **simple, responsive quiz platform** built using **HTML, CSS, and JavaScript**, designed for interactivity and usability.  
Users can browse multiple quizzes, take them dynamically, and view personalized performance feedback after submission.

---

## 🚀 Features

- 🎯 **Multiple Quizzes:**  
  Displayed on the catalog (home) page with titles and start buttons.

- ⚡ **Dynamic Question Rendering:**  
  Quiz questions load automatically based on the quiz ID in the URL (`quiz.html?id=0`).

- ✅ **Interactive Questions:**  
  Each question uses radio buttons for single-choice answers.

- 🧾 **Automatic Scoring:**  
  Answers are checked upon submission and the score is calculated instantly.

- 🗂 **Results Page with Feedback:**  
  Redirects to `result.html` with the score and a personalized feedback message (e.g., “Excellent!”, “Keep practicing!”).

- 📱 **Responsive Design:**  
  Works smoothly across desktop, tablet, and mobile screens.

- 🎨 **Modern UI:**  
  Includes gradients, hover animations, and clean card layouts.

---

## 📁 Project Structure

quiz-platform/
│
├── index.html # Quiz catalog (home) page
├── quiz.html # Dynamic quiz page
├── result.html # Results page with performance feedback
│
├── app.js # Core logic: quiz data, rendering, scoring, and navigation
└── style.css # Styling for layout, buttons, and responsiveness

## 📈 Future Enhancements

Below are several exciting features planned for future versions of the Quiz Platform:

### 🧩 Timer-Based Quizzes
- Introduce a countdown timer for each quiz or question.  
- Automatically submit answers when time runs out.  
- Display remaining time visually for better engagement.

### 🌍 Save Scores Using LocalStorage
- Store user scores locally using the browser’s `localStorage`.  
- Allow users to revisit the site and see their past performance.  
- Maintain persistent data without requiring a backend.

### 🧠 Add Categories and Difficulty Levels
- Categorize quizzes (e.g., *Science*, *Technology*, *General Knowledge*).  
- Include difficulty options (*Easy*, *Medium*, *Hard*).  
- Enable filtering and selection based on category or difficulty.

### 📊 Include Progress Indicators and Leaderboards
- Add a progress bar that shows how far a user has gone through the quiz.  
- Introduce a leaderboard system showing top scores across all users.  
- Rank users by percentage or completion time for competitive learning.

### 🔉 Integrate Sound Effects for Correct/Incorrect Answers
- Play short sounds for right and wrong answers.  
- Add subtle audio cues for quiz start, submission, and results.  
- Allow users to mute/unmute sounds from settings or the quiz page.
