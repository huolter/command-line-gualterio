
import React, { useState, useRef, useEffect } from 'react';

interface TerminalInputProps {
  prompt: string;
  onCommand: (command: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  clearInput: boolean;
}

const TerminalInput: React.FC<TerminalInputProps> = ({ 
  prompt, 
  onCommand, 
  inputRef,
  clearInput 
}) => {
  const [inputValue, setInputValue] = useState('');
  
  useEffect(() => {
    if (clearInput) {
      setInputValue('');
    }
  }, [clearInput]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onCommand(inputValue);
    }
  };

  return (
    <div className="terminal-line">
      <span className="terminal-prompt">{prompt}</span>
      <div className="terminal-text flex items-center">
        <input
          ref={inputRef}
          type="text"
          className="terminal-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="off"
          aria-label="Terminal input"
        />
        <span className="terminal-cursor"></span>
      </div>
    </div>
  );
};

export default TerminalInput;
