const chatlog = document.getElementById('chatlog');

// Function to send messages
function sendMessage() {
  const inputField = document.getElementById('userInput');
  const userInput = inputField.value.trim();
  if (!userInput) return;

  appendMessage('user', userInput);
  inputField.value = '';

  appendMessage('bot', "🤖 Please wait...");

  setTimeout(() => {
    chatlog.removeChild(chatlog.lastChild);

    const response = getBotResponse(userInput);
    appendMessage('bot', response);
  }, 1500);
}

// Function to append messages
function appendMessage(sender, message) {
  const div = document.createElement('div');
  div.className = 'message ' + sender;
  div.innerHTML = message
    .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>')
    .replace(/\n/g, "<br>");
  chatlog.appendChild(div);
  chatlog.scrollTop = chatlog.scrollHeight;
}

// Function to handle quick replies
function handleQuickReply(value) {
  document.getElementById('userInput').value = value;
  sendMessage();
}

// Function to get bot's response
function getBotResponse(input) {
  input = input.toLowerCase();

  if (input === '1') {
    return "🔧 Our Services include:\n\n" +
           "🏗 Construction\n" +
           "🏢 Property Management\n" +
           "💻 Billing Software & Hardware\n" +
           "🦺 Safety Equipment\n" +
           "🌐 Web Design & Application\n" +
           "📱 Android & iOS Development";
  } else if (input === '2') {
    return "📋 Our plans are customized. Please contact us via Email or WhatsApp for details.";
  } else if (input === '3') {
    return "📍 Our Location:\n🏠 PSID Technologies, Bengaluru, Karnataka\n\n" +
           "🗺 <a href='https://www.google.com/maps/place/Bengaluru,+Karnataka' target='_blank'>Open Location in Maps</a>";
  }

  return "🤖 I'm here to help! Please choose an option:\n\n" +
         "1️⃣ View Our Services\n" +
         "2️⃣ View Our Plans\n" +
         "3️⃣ Contact Us / Find Our Location";
}

// Initial greeting message
window.onload = function() {
  appendMessage('bot', "👋 Hello! Welcome to Property Services!");
  appendMessage('bot', "Please choose an option:\n\n" +
                       "1️⃣ View Our Services\n" +
                       "2️⃣ View Our Plans\n" +
                       "3️⃣ Contact Us / Find Our Location");
};
