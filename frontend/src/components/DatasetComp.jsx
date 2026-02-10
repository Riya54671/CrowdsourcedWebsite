import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function DatasetComp({ userName }) {
  const [datasets, setDatasets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (userName) {
      axios.get(`http://localhost:8080/api/dataset/byUser/${userName}`)
        .then(response => {
          setDatasets(response.data);
        })
        .catch(error => {
          console.error('Error fetching datasets:', error);
        });
    }
  }, [userName]);

  const handleCardClick = (datasetId) => {
    navigate(`/DatasetPreview/${datasetId}`);
  };

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {datasets.map((dataset) => (
        <div
          key={dataset.datasetId}
          onClick={() => handleCardClick(dataset.datasetId)}
          className="cursor-pointer w-[450px] h-[300px] bg-white rounded-2xl shadow-md p-4 flex flex-col gap-2"
        >
          <div className="h-[200px] overflow-hidden rounded-2xl">
            <img
              src={dataset.imageUrl || "https://opengraph.githubassets.com/f46c056dfde35fc95b342ef3f44b4f935baef889e8956b89a844b248b1339dda/ReiCHU31/CT-pneumonia-dataset"}
              alt="Dataset"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-xl font-semibold">{dataset.datasetName}</div>
          <div className="text-sm text-gray-600">
            Uploaded by {dataset.user.userName}
          </div>
        </div>
      ))}
    </div>
  );
}