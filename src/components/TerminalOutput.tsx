
import React from 'react';
import { CommandOutput } from '@/utils/terminalCommands';

interface TerminalOutputProps {
  outputs: CommandOutput[];
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ outputs }) => {
  return (
    <div className="terminal-output animate-fade-up">
      {outputs.map((output, index) => {
        switch (output.type) {
          case 'error':
            return (
              <div key={index} className="terminal-line">
                <span className="terminal-error">{output.content}</span>
              </div>
            );
          case 'success':
            return (
              <div key={index} className="terminal-line">
                <span className="terminal-success">{output.content}</span>
              </div>
            );
          case 'warning':
            return (
              <div key={index} className="terminal-line">
                <span className="terminal-warning">{output.content}</span>
              </div>
            );
          case 'link':
            return (
              <div key={index} className="terminal-line">
                <a 
                  href={output.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="terminal-link"
                >
                  {output.content}
                </a>
              </div>
            );
          default:
            return (
              <div key={index} className="terminal-line">
                <span>{output.content}</span>
              </div>
            );
        }
      })}
    </div>
  );
};

export default TerminalOutput;
