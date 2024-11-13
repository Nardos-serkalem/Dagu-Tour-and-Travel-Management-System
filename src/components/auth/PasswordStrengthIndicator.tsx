import { useEffect, useState } from 'react';

interface PasswordStrengthIndicatorProps {
  password: string;
}

export default function PasswordStrengthIndicator({ password }: PasswordStrengthIndicatorProps) {
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    // Calculate password strength
    let score = 0;
    if (password.length > 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    setStrength(score);

    // Set feedback message
    if (score === 0) setFeedback('Very weak');
    else if (score === 1) setFeedback('Weak');
    else if (score === 2) setFeedback('Fair');
    else if (score === 3) setFeedback('Good');
    else if (score === 4) setFeedback('Strong');
    else setFeedback('Very strong');
  }, [password]);

  return (
    <div className="mt-1">
      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${
            strength === 0
              ? 'w-0'
              : strength === 1
              ? 'w-1/5 bg-red-500'
              : strength === 2
              ? 'w-2/5 bg-orange-500'
              : strength === 3
              ? 'w-3/5 bg-yellow-500'
              : strength === 4
              ? 'w-4/5 bg-lime-500'
              : 'w-full bg-green-500'
          }`}
        />
      </div>
      <p className="mt-1 text-sm text-gray-600">{feedback}</p>
    </div>
  );
}