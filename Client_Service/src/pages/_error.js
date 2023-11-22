import React from 'react';

function ErrorPage({ statusCode }) {
  return (
    <div>
      <p>Error: {statusCode}</p>
      {/* Render an appropriate error message or content */}
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
