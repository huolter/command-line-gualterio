
export interface CommandOutput {
  type: 'text' | 'error' | 'success' | 'warning' | 'link';
  content: string;
  href?: string;
}

export interface CommandResponse {
  outputs: CommandOutput[];
}

// Walter's personal info
const personalInfo: CommandOutput[] = [
  { type: 'text', content: 'I am Walter' },
  { type: 'text', content: 'About me: my motto, let\'s calculate it. My superpower, I find everything interesting. Volatile polymath.' },
  { type: 'text', content: 'Type "links" to see how you can connect with me.' }
];

// Walter's personal links
const personalLinks: CommandOutput[] = [
  { type: 'link', content: 'X (Twitter)', href: 'https://x.com/walter_h_g_' },
  { type: 'link', content: 'LinkedIn', href: 'https://www.linkedin.com/in/walterhgp/' },
  { type: 'link', content: 'Deep Sight Consulting', href: 'https://deepsight.consulting/' },
  { type: 'text', content: 'Click on any link above to visit.' }
];

const helpMenu: CommandOutput[] = [
  { type: 'success', content: 'Available commands:' },
  { type: 'text', content: 'help - Show this menu' },
  { type: 'text', content: 'info - Display information about me' },
  { type: 'text', content: 'links - Show my social media and contact links' },
  { type: 'text', content: 'clear - Clear the terminal screen' },
  { type: 'text', content: 'about - Learn about this terminal' },
  { type: 'warning', content: 'Try typing a command and pressing Enter.' }
];

const aboutText: CommandOutput[] = [
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
