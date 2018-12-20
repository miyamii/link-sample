import React from 'react';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <React.Fragment>
      <Link to="/to">/toに遷移します</Link><br />
      <a href="/lp/sample">/lp/sample(通常htmlページ)に遷移します</a>
    </React.Fragment>
  );
}

export default Index;