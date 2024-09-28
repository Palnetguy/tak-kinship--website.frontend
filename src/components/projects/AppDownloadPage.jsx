// AppDownloadPage.js

import React, { useEffect, useState } from "react";
import "../../css/AddDownloadPage.css";
import configDownloads from "../config-download";
import axios from "axios";
import configHeaders from "../config-headers";

// const appVersions = [
//   {
//     version: "1.0.0",
//     downloadLink: "1vF3T41ylKuOWzbNng_kEMqEMJ7QmDb85",
//     releaseDate: "2024-03-01",
//     description: "Initial release",
//   },
//   {
//     version: "1.1.0",
//     downloadLink: "1vF3T41ylKuOWzbNng_kEMqEMJ7QmDb85",
//     releaseDate: "2024-03-10",
//     description: "Bug fixes and improvements",
//   },
//   // Add more versions as needed
// ];

const AppDownloadPage = ({ projectId, type }) => {
  const [appVersions, setAppVersions] = useState([]);
  const api = `https://takkinship-backend.up.railway.app/api/project/${projectId}/${
    type == "Desktop" ? "desktop-applications" : "mobile-applications"
  }/`;

  console.log(api);
  useEffect(() => {
    const handleProjectDownloads = async () => {
      try {
        const response = await axios.get(
          // `https://takkinship-backend.up.railway.app/api/project/${projectId}/${
          //   type == "Desktop" ? "desktop-applications" : "mobile-applications"
          // }/`,

          // "https://takkinship-backend.up.railway.app/api/project/${projectId}/desktop-applications/",
          `https://takkinship-backend.up.railway.app/api/project/${projectId}/mobile-applications/`,
          {
            headers: configHeaders,
          }
        );
        console.log("data");
        console.log(response.data);
        console.log("done", response.data);
        console.log("done....");
        setAppVersions(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleProjectDownloads();
  }, [type]);
  const [selectedVersion, setSelectedVersion] = useState(null);

  const handleVersionSelect = (version) => {
    setSelectedVersion(version);
    // initiateDownload(version.downloadLink);/
  };

  const initiateDownload = (downloadLink) => {
    window.location.href = downloadLink;
  };

  return (
    <div className="app-download-page">
      <h1 className="pretitle">App Download </h1>

      <div className="version-list">
        <h1 className="title">Available Versions</h1>
        <ul>
          {appVersions.map((appVersion) => (
            <li
              key={appVersion.version}
              onClick={() => handleVersionSelect(appVersion)}
              className={selectedVersion === appVersion ? "selected" : ""}
            >
              {appVersion.version}
            </li>
          ))}
        </ul>
      </div>

      {selectedVersion && (
        <div
          className="download-section box camIn"
          key={selectedVersion.version}
        >
          <h2>Version {selectedVersion.version}</h2>
          <p>{selectedVersion.description}</p>
          <p>Released on: {selectedVersion.date_released}</p>
          <button
            className="download-button"
            onClick={() => initiateDownload(selectedVersion.apk)}
          >
            Download
          </button>
        </div>
      )}
    </div>
  );
};

export default AppDownloadPage;
