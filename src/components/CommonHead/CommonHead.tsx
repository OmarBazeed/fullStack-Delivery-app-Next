import React from "react";

const CommonHead = ({ title, head }: { title: string; head: string }) => {
  return (
    <div className="text-center">
      <p className="text-accent">{title}</p>
      <h1 className="text-primary font-semibold">{head}</h1>
    </div>
  );
};

export default CommonHead;
