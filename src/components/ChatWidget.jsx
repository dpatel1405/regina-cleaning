import { useState } from 'react';

function ChatWidget() {

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: 'Hi there! 👋 Welcome to Regina Elite Cleaning. How can we help you today?'
    }
  ]);
  const [input, setInput] = useState('');

  function toggleChat() {
    setIsOpen(!isOpen);
  }

  function handleSend() {
    if (input.trim() === '') return;

    const userMessage = { from: 'user', text: input };

    setMessages([...messages, userMessage]);
    setInput('');

    setTimeout(() => {
      const botReply = getBotReply(input);
      setMessages((prev) => [...prev, { from: 'bot', text: botReply }]);
    }, 800);
  }

  function getBotReply(message) {
    const msg = message.toLowerCase();

    if (msg.includes('price') || msg.includes('cost') || msg.includes('how much')) {
      return 'Our pricing starts at $120 for residential cleaning, $195 for deep cleaning, and $250 for move-in/move-out. Use our quote calculator on the page for an instant estimate!';
    }
    if (msg.includes('book') || msg.includes('schedule') || msg.includes('appointment')) {
      return 'Great! You can book by filling out our contact form on this page, or call us directly at (306) 555-0198. We confirm bookings within a few hours!';
    }
    if (msg.includes('area') || msg.includes('location') || msg.includes('serve')) {
      return 'We serve all of Regina including Downtown, Harbour Landing, Lakeview, Whitmore Park, and more. Give us a call if you are unsure about your area!';
    }
    if (msg.includes('supply') || msg.includes('supplies') || msg.includes('product')) {
      return 'Yes! We bring all of our own eco-friendly cleaning products and equipment. You do not need to provide anything at all.';
    }
    if (msg.includes('cancel') || msg.includes('reschedule')) {
      return 'No problem! We just ask for 24 hours notice to cancel or reschedule. Call us at (306) 555-0198 and we will sort it out for you.';
    }
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return 'Hello! 😊 How can we help you today? Feel free to ask about our pricing, services, or how to book a clean!';
    }

    return 'Thanks for your message! For quick help call us at (306) 555-0198 or fill out the contact form on this page and we will get back to you shortly!';
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSend();
    }
  }

  return (
    <div>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden">

          {/* Chat Header */}
          <div className="bg-green-700 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-700 font-bold text-sm">
                R
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Regina Elite Cleaning</p>
                <p className="text-green-200 text-xs">Typically replies in minutes</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-green-200 text-xl font-bold"
            >
              ✕
            </button>
          </div>

          {/* Chat Messages */}
          <div className="px-4 py-4 h-64 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.from === 'user'
                      ? 'bg-green-700 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-700 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="border-t border-gray-100 px-4 py-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-600"
            />
            <button
              onClick={handleSend}
              className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            >
              Send
            </button>
          </div>

        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-700 hover:bg-green-800 text-white rounded-full shadow-lg flex items-center justify-center text-2xl z-50 transition-all"
      >
        {isOpen ? '✕' : '💬'}
      </button>

    </div>
  );
}

export default ChatWidget;