import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";

import Routes from "routes";

const App = () => {
  const error = useSelector((state) => state.common.error);
  const loading = useSelector((state) => state.common.loading);

  useEffect(() => {
    if (error !== null) console.log(error.message);
  }, [error]);

  return (
    <div className="app">
      <Routes />

      {/* TOAST */}
      <Loader
        className="loader"
        type="TailSpin"
        color="#007bff"
        height={100}
        width={100}
        visible={loading}
      />
      {loading && <div className="overlay"></div>}
    </div>
  );
};

export default App;
