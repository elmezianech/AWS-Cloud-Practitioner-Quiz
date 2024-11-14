# aws-cloud-practitioner-quiz

Welcome to the **AWS Cloud Practitioner Quiz** — the ultimate interactive quiz app designed to test your knowledge of AWS Cloud services and help you prepare for the AWS Cloud Practitioner certification! With **169 questions**, this quiz is a comprehensive tool that covers all essential AWS concepts in a fun, engaging way.

Built using **React** for the frontend and **AWS Amplify** for the backend and authentication, this app offers a secure and modern experience. Whether you're looking to challenge yourself or track your progress, this app makes studying AWS an exciting and interactive process!

## 🌟 Features
- **169 Engaging Questions**: Test your knowledge with questions covering all AWS Cloud Practitioner domains.
- **User Authentication**: Secure login using **AWS Cognito** via **AWS Amplify** for a personalized experience.
- **Results and Feedback**: View a detailed summary of correct and incorrect answers, and track areas for improvement.
- **Continuous Integration/Continuous Deployment (CI/CD)**: Seamless deployment using **GitHub Actions**, automatically updating the app with every change.
- **Modern, Responsive UI**: Designed to work seamlessly on desktop devices.

## 💻 Tech Stack
- **React** - For building the user interface
- **AWS Amplify** - For seamless integration with AWS services and deployment
- **AWS Cognito** - For secure authentication
- **GitHub Actions** - For CI/CD integration and automatic deployments
- **CSS** - Styling to ensure a modern and clean user experience
![1_fL-1IOssLrYISKuj5m7aHg](https://github.com/user-attachments/assets/c7cf9403-cf52-4b04-bc17-61ebd22c5822)

## 🚀 Getting Started

### Prerequisites
Before you get started, make sure you have:
- **Node.js** installed
- An **AWS Account**
- The **Amplify CLI** installed:  
  ```bash
  npm install -g @aws-amplify/cli

## 🚀 Installation Steps

### 1. Clone the repository
First, clone the repository to your local machine:
```bash
git clone https://github.com/yourusername/aws-cloud-practitioner-quiz-mastermind.git
cd aws-cloud-practitioner-quiz-mastermind
```

### 2. Install dependencies
Install the required dependencies for the project:
```bash
npm install
```

### 3. Set up AWS Amplify
If you haven't already configured AWS Amplify on your local machine, you can do so by following these steps:
```bash
amplify configure
amplify init
amplify add auth
amplify push
```

### 4. Run the application locally
After setting up AWS Amplify and pushing the configurations, you can start the application:
```bash
npm start
```

This will launch the app in your browser, and you'll be able to start answering quiz questions and track your progress!

### 📄 Using quizData.js for Questions
If you prefer not to run the app but want to use the questions directly, simply open the quizData.js file. It contains all 169 questions along with the correct answers for each. You can:

- Use it as a reference for studying.
- Modify or add new questions.
- Integrate it into your own project.
