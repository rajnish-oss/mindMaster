const que = [
  {
    id: 1,
    tag:"emotional regulation",
    question: "Did you feel emotionally stable and content today?",
    options: [
      { text: "Not at all", points: 1, color: "#FF4C4C" }, // red
      { text: "Slightly", points: 2, color: "#FF914D" },   // orange
      { text: "Moderately", points: 3, color: "#FFD93D" }, // yellow
      { text: "Mostly", points: 4, color: "#A8E6A1" },     // light green
      { text: "Fully", points: 5, color: "#4CAF50" }       // green
    ]
  },
  {
    id: 2,
    tag:"emotional regulation",
    question: "When something stressful happened today, how calmly did you handle it?",
    options: [
      { text: "I reacted poorly", points: 1, color: "#FF4C4C" },
      { text: "I struggled to stay calm", points: 2, color: "#FF914D" },
      { text: "I was neutral", points: 3, color: "#FFD93D" },
      { text: "I handled it well", points: 4, color: "#A8E6A1" },
      { text: "I responded with complete calm", points: 5, color: "#4CAF50" }
    ]
  },
  {
    id: 3,
    tag:"cognitive funtion",
    question: "How focused were you during your tasks today?",
    options: [
      { text: "Very distracted", points: 1, color: "#FF4C4C" },
      { text: "Often distracted", points: 2, color: "#FF914D" },
      { text: "Somewhat focused", points: 3, color: "#FFD93D" },
      { text: "Mostly focused", points: 4, color: "#A8E6A1" },
      { text: "Fully focused", points: 5, color: "#4CAF50" }
    ]
  },
  {
    id: 4,
    tag:"cognitive funtion",
    question: "Did you make decisions easily today (e.g., what to eat, what to prioritize)?",
    options: [
      { text: "Very difficult", points: 1, color: "#FF4C4C" },
      { text: "Somewhat hard", points: 2, color: "#FF914D" },
      { text: "Okay", points: 3, color: "#FFD93D" },
      { text: "Easy", points: 4, color: "#A8E6A1" },
      { text: "Effortless", points: 5, color: "#4CAF50" }
    ]
  },
  {
    id: 5,
    tag:"social matric",
    question: "Did you enjoy interacting with others today?",
    options: [
      { text: "Not at all", points: 1, color: "#FF4C4C" },
      { text: "A little", points: 2, color: "#FF914D" },
      { text: "Neutral", points: 3, color: "#FFD93D" },
      { text: "I enjoyed it", points: 4, color: "#A8E6A1" },
      { text: "I loved it", points: 5, color: "#4CAF50" }
    ]
  },
  {
    id: 6,
    tag:"social matric",
    question: "If you had any disagreement today, how calmly did you handle it?",
    optional: true,
    options: [
      { text: "Not calmly at all", points: 1, color: "#FF4C4C" },
      { text: "Somewhat reactive", points: 2, color: "#FF914D" },
      { text: "Neutral", points: 3, color: "#FFD93D" },
      { text: "Fairly calm", points: 4, color: "#A8E6A1" },
      { text: "Very calm and rational", points: 5, color: "#4CAF50" }
    ]
  },
  {
    id: 7,
    tag:"psychological flexibility",
    question: "Did you stay calm and flexible when plans or routines changed today?",
    options: [
      { text: "I felt upset", points: 1, color: "#FF4C4C" },
      { text: "I resisted change", points: 2, color: "#FF914D" },
      { text: "I tolerated it", points: 3, color: "#FFD93D" },
      { text: "I adapted well", points: 4, color: "#A8E6A1" },
      { text: "I embraced it fully", points: 5, color: "#4CAF50" }
    ]
  },
  {
    id: 8,
    tag:"psychological flexibility",
    question: "How satisfied do you feel with your day overall?",
    options: [
      { text: "Very dissatisfied", points: 1, color: "#FF4C4C" },
      { text: "Slightly dissatisfied", points: 2, color: "#FF914D" },
      { text: "Neutral", points: 3, color: "#FFD93D" },
      { text: "Satisfied", points: 4, color: "#A8E6A1" },
      { text: "Very satisfied", points: 5, color: "#4CAF50" }
    ]
  }
];


export default que