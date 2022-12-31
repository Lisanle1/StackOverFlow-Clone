import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./css/index.css";
import Main from "./Main";
import axios from "axios";
import API_URL from "../../api/Api";

function Index() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => { 
    async function getQuestion() {
      await axios.get(`${API_URL}/question`).then((res) => {
        setQuestions(res.data.reverse());
      });
    }
    getQuestion();
  }, []);
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <Main questions={questions} />
      </div>
    </div>
  );
}

export default Index;
