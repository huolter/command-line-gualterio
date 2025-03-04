
import React, { useState, useRef, useEffect } from 'react';
import TerminalInput from './TerminalInput';
import TerminalOutput from './TerminalOutput';
import { processCommand, CommandOutput } from '@/utils/terminalCommands';

interface TerminalHistoryItem {
  command: string;
  outputs: CommandOutput[];
}

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<TerminalHistoryItem[]>([]);
  const [clearInput, setClearInput] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when terminal is clicked
  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    const terminal = terminalRef.current;
    if (terminal) {
      terminal.addEventListener('click', handleClick);
    }

    return () => {
      if (terminal) {
        terminal.removeEventListener('click', handleClick);
      }
    };
  }, []);

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleCommand = (command: string) => {
    // Process the command
    const response = processCommand(command);
    
    if (command.trim().toLowerCase() === 'clear') {
      // Clear the terminal
      setHistory([]);
    } else {
      // Add the command and its output to history
      setHistory(prev => [
        ...prev,
        { command, outputs: response.outputs }
      ]);
    }
    
    // Signal to clear the input
    setClearInput(true);
    // Reset the clear input flag after a short delay
    setTimeout(() => setClearInput(false), 10);
  };

  return (
    <div 
      className="terminal-window" 
      ref={terminalRef}
      aria-live="polite"
    >
      {/* Render history of commands and their outputs */}
      {history.map((item, index) => (
        <div key={index} className="mb-4">
          {/* Only show the prompt and command if there was a command */}
          {item.command && (
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-text">{item.command}</span>
            </div>
          )}
          {/* Render the output for this history item */}
          <TerminalOutput outputs={item.outputs} />
        </div>
      ))}
      
      {/* Current input line */}
      <TerminalInput 
        prompt="$" 
        onCommand={handleCommand} 
        inputRef={inputRef}
        clearInput={clearInput}
      />
    </div>
  );
};

export default Terminal;
