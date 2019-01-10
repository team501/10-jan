import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Example = (props) => {
  return (
    <div>
      <ProgressBar>
      	<ProgressBar  bsStyle="success" now={33} key={1} />
      	<ProgressBar  bsStyle="warning" now={33} key={2} />
      	<ProgressBar  bsStyle="danger" now={34} key={3} />
      </ProgressBar>
    </div>
  );
};

export default Example;