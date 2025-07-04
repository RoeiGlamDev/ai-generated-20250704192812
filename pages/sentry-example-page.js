// pages/sentry-example-page.js
import * as Sentry from '@sentry/react';

function SentryExamplePage() {
  const throwError = () => {
    throw new Error('Something went wrong');
  };

  const captureException = () => {
    Sentry.captureException(new Error('Something went wrong'));
  };

  const captureMessage = () => {
    Sentry.captureMessage('Something went wrong');
  };

  return (
    <div>
      <h1>Sentry Example Page</h1>
      <button onClick={throwError}>Throw Error</button>
      <button onClick={captureException}>Capture Exception</button>
      <button onClick={captureMessage}>Capture Message</button>
    </div>
  );
}

export default SentryExamplePage;