const industries = ["Healthcare", "E-commerce", "Education", "Travel"];
const technologies = ["Artificial Intelligence", "Blockchain", "Internet of Things", "Virtual Reality"];
const audiences = ["Millennials", "Small Business Owners", "Fitness Enthusiasts", "Pet Lovers"];
const businessModels = ["Subscription-based", "Freemium", "Marketplace", "On-demand"];

function generateStartupIdea() {
  const input = document.getElementById("startup-idea-input").value;
  
  if (input === "") {
    alert("Please enter your startup idea!");
    return;
  }
  
  const randomIndustry = industries[Math.floor(Math.random() * industries.length)];
  const randomTechnology = technologies[Math.floor(Math.random() * technologies.length)];
  const randomAudience = audiences[Math.floor(Math.random() * audiences.length)];
  const randomBusinessModel = businessModels[Math.floor(Math.random() * businessModels.length)];

  const startupIdea = `Your startup idea: Create a ${randomIndustry} platform that utilizes ${randomTechnology} to target ${randomAudience} with a ${randomBusinessModel} business model.`;

  const chatMessages = document.getElementById("chat-messages");
  const newMessage = document.createElement("p");
  newMessage.textContent = startupIdea;
  chatMessages.appendChild(newMessage);
}

const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", generateStartupIdea);
