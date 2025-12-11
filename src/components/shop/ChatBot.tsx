import { useEffect } from "react";

declare global {
  interface Window {
    createChat?: (options: {
      webhookUrl: string;
      initialMessages?: string[];
      i18n?: Record<string, Record<string, string>>;
    }) => void;
  }
}

const ChatBot = () => {
  useEffect(() => {
    // Load n8n chat styles
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(linkElement);

    // Load n8n chat script
    const scriptElement = document.createElement("script");
    scriptElement.type = "module";
    scriptElement.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      
      createChat({
        webhookUrl: 'https://n8n.coachshwetagupta.com/webhook/7e8ccaff-7542-41df-b116-1d4c478d67fa/chat',
        initialMessages: [
          'Hi there! 👋',
          'Welcome to ShopHub! How can I help you today?',
        ],
        i18n: {
          en: {
            title: 'ShopHub Assistant',
            subtitle: 'How can we help you today?',
            footer: '',
            getStarted: 'New Conversation',
            inputPlaceholder: 'Type your message...',
          },
        },
      });
    `;
    document.body.appendChild(scriptElement);

    // Cleanup
    return () => {
      const existingLink = document.querySelector(
        'link[href*="@n8n/chat/dist/style.css"]'
      );
      if (existingLink) {
        existingLink.remove();
      }
      scriptElement.remove();
    };
  }, []);

  return null;
};

export default ChatBot;
