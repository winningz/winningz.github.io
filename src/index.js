import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

 
function FlexColumnDiv() {
  return (
    <div className="flex flex-col">
      <div className="w-6/12 border-2 border-black">First</div>
      <div className="w-6/12 border-2 border-black">Second</div>
      <div className="w-6/12 border-2 border-black">Third</div>
      <div className="w-6/12 border-2 border-black">Fourth</div>
      <div className="w-6/12 border-2 border-black">Five</div>
    </div>
  );
}
 
function FlexColumnDiv2() {
  return (
    <div className="flex flex-row justify-center">
      <div className="gap-4 py-10 px-5 border-2 border-black">First</div>
      <div className="m-5 p-5 border-2 border-black">Second</div>
      <div className="m-5 p-5 border-2 border-black">Third</div>
      <div className="m-5 p-5 border-2 border-black">Fourth</div>
      <div className="m-5 p-5 border-2 border-black">Five</div>
    </div>
  );
}
 
ReactDOM.render(
    <FlexColumnDiv2 />
  ,document.getElementById('root')
);