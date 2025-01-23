// Simple mapping of subject to some example summary & objectives
const subjectData = {
    "Mathematics": {
      title: "Mathematics",
      summary: "Mathematics is the study of numbers, structures, and change. It involves problem solving and abstract thinking.",
      objectives: [
        "Develop quantitative reasoning skills",
        "Learn algebra, geometry, and calculus concepts",
        "Use analytical thinking in various real-life applications"
      ]
    },
    "Physics": {
      title: "Physics",
      summary: "Physics explores the fundamental laws of nature, focusing on motion, energy, and forces.",
      objectives: [
        "Understand basic physical laws and principles",
        "Develop experimental and measurement skills",
        "Apply physics concepts to everyday phenomena"
      ]
    },
    "History": {
      title: "History",
      summary: "History examines past events, societies, and cultures to understand how they shape the world today.",
      objectives: [
        "Analyze historical sources and evidence",
        "Identify patterns and causes of historical events",
        "Connect past events to modern societal issues"
      ]
    },
    "Computer Science": {
      title: "Computer Science",
      summary: "Computer Science covers the theory of computation, programming techniques, and algorithmic problem solving.",
      objectives: [
        "Understand core programming principles",
        "Design and implement efficient algorithms",
        "Develop skills in data structures and software engineering"
      ]
    },
    "Literature": {
      title: "Literature",
      summary: "Literature is the study of written works, analyzing themes, characters, and narrative techniques.",
      objectives: [
        "Interpret literary texts in historical and cultural contexts",
        "Develop critical reading and writing skills",
        "Explore diverse genres and styles of writing"
      ]
    },
    "Music": {
      title: "Music",
      summary: "Music theory, composition, and performance form the core of the study of Music as an art form.",
      objectives: [
        "Understand musical notation and theory",
        "Develop performance and compositional skills",
        "Explore different genres and cultural traditions in music"
      ]
    }
  };
  
  // Get elements from the DOM
  const subjectButtons = document.querySelectorAll('.subject-button');
  const subjectTitle = document.getElementById('subject-title');
  const courseSummary = document.getElementById('course-summary');
  const learningObjectives = document.getElementById('learning-objectives');
  
  const chatWindow = document.getElementById('chat-window');
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');
  
  // When a subject button is clicked, update the middle pane with relevant data
  subjectButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const subjectKey = button.getAttribute('data-subject');
      const data = subjectData[subjectKey];
      
      if (data) {
        subjectTitle.textContent = data.title;
        courseSummary.textContent = data.summary;
        
        // Clear old objectives
        learningObjectives.innerHTML = '';
        data.objectives.forEach(obj => {
          const li = document.createElement('li');
          li.textContent = obj;
          learningObjectives.appendChild(li);
        });
      }
    });
  });
  
  // Handle chat messages
  sendBtn.addEventListener('click', () => {
    sendMessage();
  });
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;
    
    // Display user message
    appendMessage('user', text);
    userInput.value = '';
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiReply = getAIReply(text);
      appendMessage('ai', aiReply);
    }, 800);
  }
  
  // Dummy AI reply generator
  function getAIReply(userMessage) {
    // In a real app, you would call your LLM / AI API here.
    // For this demo, just echo back or provide a generic reply.
    return "I have processed your query: " + userMessage;
  }
  
  // Append message to chat window
  function appendMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    
    const messageText = document.createElement('p');
    messageText.textContent = text;
    
    messageDiv.appendChild(messageText);
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight; // scroll to bottom
  }
  