import { EmailDateType } from './email';

export async function sendContactEmail(email: EmailDateType) {
  const response = await fetch('/api/email', {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || '서버 에러 발생');
  return data;
}
