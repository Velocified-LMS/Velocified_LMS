// LearningPaths.js

import React from 'react';

function LearningPaths({ paths }) {
  return (
    <div>
      <h1>Learning Paths</h1>
      <ul>
        {paths.map((path) => (
          <li key={path.id}>{path.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default LearningPaths;
