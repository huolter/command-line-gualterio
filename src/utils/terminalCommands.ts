
export interface CommandOutput {
  type: 'text' | 'error' | 'success' | 'warning' | 'link';
  content: string;
  href?: string;
}

export interface CommandResponse {
  outputs: CommandOutput[];
}

// Add your personal info and links here
const personalInfo = [
  { type: 'text', content: 'Hello, I am [Your Name].' },
  { type: 'text', content: 'I am a [Your Profession/Title].' },
  { type: 'text', content: 'I specialize in [Your Specialties].' },
  { type: 'text', content: 'Type "links" to see how you can connect with me.' }
];

const personalLinks = [
  { type: 'link', content: 'Portfolio', href: 'https://yourportfolio.com' },
  { type: 'link', content: 'GitHub', href: 'https://github.com/yourusername' },
  { type: 'link', content: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  { type: 'link', content: 'Twitter', href: 'https://twitter.com/yourusername' },
  { type: 'text', content: 'Click on any link above to visit.' }
];

const helpMenu = [
  { type: 'success', content: 'Available commands:' },
  { type: 'text', content: 'help - Show this menu' },
  { type: 'text', content: 'info - Display information about me' },
  { type: 'text', content: 'links - Show my social media and contact links' },
  { type: 'text', content: 'clear - Clear the terminal screen' },
  { type: 'text', content: 'about - Learn about this terminal' },
  { type: 'warning', content: 'Try typing a command and pressing Enter.' }
];

const aboutText = [
  { type: 'text', content: 'This interactive terminal was created using React and TypeScript.' },
  { type: 'text', content: 'It mimics a command-line interface with a set of predefined commands.' },
  { type: 'text', content: 'Feel free to explore and discover more about me through the available commands.' }
];

export const processCommand = (command: string): CommandResponse => {
  const cmd = command.trim().toLowerCase();
  
  switch (cmd) {
    case 'help':
      return { outputs: helpMenu };
    
    case 'info':
      return { outputs: personalInfo };
    
    case 'links':
      return { outputs: personalLinks };
    
    case 'about':
      return { outputs: aboutText };
    
    case 'clear':
      // The actual clearing logic is handled in the Terminal component
      return { outputs: [] };
    
    case '':
      return { outputs: [] };
    
    default:
      return { 
        outputs: [
          { type: 'error', content: `Command not found: ${command}` },
          { type: 'text', content: 'Type "help" to see available commands.' }
        ] 
      };
  }
};
