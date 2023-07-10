import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [problemStatement, setProblemStatement] = useState('');
  const [proposedStatement, setProposedStatement] = useState('');
  const [existingAlternatives, setExistingAlternatives] = useState('');
  const [uniqueValue, setUniqueValue] = useState('');
  const [webmatrices, setWebMatrices] = useState('');
  const [earlyAdaptors, setEarlyAdaptors] = useState('');
  const [marketingSegment, setMarketingSegment] = useState('');
  const [costMatrix, setCostMatrix] = useState('');
  const [revenueMatrix, setRevenueMatrix] = useState('');
  const FormBusinessPlan = () => {
    return (
      <div className="row">
        <form className="row">
          <div class="form-group col">
            <label for="problemStatement">Problem Statement</label>
            <input
              type="text"
              class="form-control"
              id="problemStatement"
              value={problemStatement}
              onChange={(e) => setProblemStatement(e.target.value)}
              aria-describedby="problemStatement"
              placeholder="Enter Problem Statement"
            />
          </div>
          <div class="form-group col">
            <label for="proposedStatement">Proposed Solution</label>
            <input
              type="text"
              class="form-control"
              id="proposedStatement"
              value={proposedStatement}
              onChange={(e) => setProposedStatement(e.target.value)}
              placeholder="Proposed Solution"
            />
          </div>
          <div class="form-group col">
            <label for="existingAlternatives">Existing Alternatives</label>
            <input
              type="text"
              class="form-control"
              id="existingAlternatives"
              value={existingAlternatives}
              onChange={(e) => setExistingAlternatives(e.target.value)}
              placeholder="Existing Alternatives"
            />
          </div>

          <div class="form-group col">
            <label for="uniqueValue">Unique Value Proposition</label>
            <input
              type="text"
              class="form-control"
              id="uniqueValue"
              value={uniqueValue}
              onChange={(e) => setUniqueValue(e.target.value)}
              placeholder="Unique Value Proposition"
            />
          </div>
          <div class="form-group col">
            <label for="webmatrices">Web Matrices/Analysis</label>
            <input
              type="text"
              class="form-control"
              id="webmatrices"
              onChange={(e) => setWebMatrices(e.target.value)}
              value={webmatrices}
              placeholder="Web Matrices"
            />
          </div>
          <div class="form-group col">
            <label for="earlyAdaptors">Early Adaptors</label>
            <input
              type="text"
              class="form-control"
              id="earlyAdaptors"
              value={earlyAdaptors}
              onChange={(e) => setEarlyAdaptors(e.target.value)}
              placeholder="Early Adaptors"
            />
          </div>
          <div class="form-group col">
            <label for="marketingSegment">Marketing Segment</label>
            <input
              type="text"
              class="form-control"
              id="marketingSegment"
              onChange={(e) => setMarketingSegment(e.target.value)}
              value={marketingSegment}
              placeholder="Marketing Segment"
            />
          </div>

          <div class="form-group col">
            <label for="costMatrix">Cost Matrix</label>
            <input
              type="text"
              class="form-control"
              id="costMatrix"
              onChange={(e) => setCostMatrix(e.target.value)}
              value={costMatrix}
              placeholder="Cost Matrix"
            />
          </div>
          <div class="form-group col">
            <label for="revenueMatrix">Revenue Matrix</label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setRevenueMatrix(e.target.value)}
              id="revenueMatrix"
              placeholder="Revenue Matrix"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  };
  const Preview = () => {
    return (
      <div className="row">
        <div className="col">{problemStatement}</div>
        <div className="col">
          <div class="row">
            <div class="row">{proposedStatement}</div>
            <div class="row">{existingAlternatives}</div>
          </div>
        </div>
        <div className="col">{uniqueValue}</div>
        <div className="col">
          <div className="row">{earlyAdaptors}</div>
          <div className="row">{webmatrices}</div>
        </div>
        <div className="col">{marketingSegment}</div>
      </div>
    );
  };
  return (
    <div>
      <h1>Business Plan template</h1>
      <FormBusinessPlan />
      <Preview />
    </div>
  );
}
