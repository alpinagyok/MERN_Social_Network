import React from "react";

// this is a dummy component (no state or lifecycle methods) so we can make it functional
export default () => {
  return (
    <div>
      <footer className="bg-dark text-white mt-5 p-4 text-center">
        Copyright &copy; {new Date().getFullYear()} DevConnector
      </footer>
    </div>
  );
};
