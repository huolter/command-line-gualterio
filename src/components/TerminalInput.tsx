
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
      <div className="terminal-text relative">
        <input
          ref={inputRef}
          type="text"
          className="terminal-input w-full bg-transparent outline-none border-none text-terminal-text font-mono p-0 m-0"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="off"
          aria-label="Terminal input"
        />
        {/* Remove the separate cursor element since we'll rely on the native cursor */}
      </div>
    </div>
  );
};

export default TerminalInput;
