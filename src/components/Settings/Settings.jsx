import React from "react";

import CloseSettingsIconDark from "../../assets/close-settings-icon-dark-theme.png";
import CloseSettingsIconLight from "../../assets/close-settings-icon-light-theme.png";

import Dataset from "./Dataset/Dataset";

function Settings(props) {
  const datasets = [
    <Dataset id="1" setLabels={props.setLabels} setValues={props.setValues} />,
  ];

  function addDataset() {
    datasets.push(
      <Dataset
        id={datasets.length + 1}
        setLabels={props.setLabels}
        setValues={props.setValues}
      />
    );
  }
  return (
    <div className={`chart-settings__${props.open ? "open" : "hidden"}`}>
      <div className="settings-content">
        {props.theme ? (
          <img
            src={CloseSettingsIconDark}
            alt="close settings icon"
            className="settings-close-button"
            onClick={props.changeSettingsOpen}
          />
        ) : (
          <img
            src={CloseSettingsIconLight}
            alt="close settings icon"
            className="settings-close-button"
            onClick={props.changeSettingsOpen}
          />
        )}
        {datasets}
        <button className="add-dataset-button" onClick={addDataset}>
          +
        </button>
      </div>
    </div>
  );
}

export default Settings;
