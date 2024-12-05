import React, { useState } from "react";
import "../styles/settings.css";
export const Settings = () => {
  const [sound, setSound] = useState(false);
  const [connectWallet, setConnectWallet] = useState(false);
  const [connectNextus, setConnectNextus] = useState(false);

  return (
    <div className="home-main-box">
      <div>
        <div className="setting-head">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M19.5883 3.48235C19.4353 3.48235 19.2912 3.56829 19.2205 3.70969C19.1968 3.75544 17.3115 7.25118 9.44395 7.3701V3.89362C9.44395 3.73698 9.35479 3.59398 9.2144 3.52489C9.07421 3.45579 8.90713 3.47185 8.78226 3.56702L0.161661 10.1735C0.0600627 10.2514 0 10.372 0 10.4996C0 10.628 0.0600627 10.7485 0.161661 10.8266L8.78266 17.4328C8.90774 17.5282 9.07461 17.5443 9.2148 17.4755C9.3552 17.4069 9.44435 17.2633 9.44435 17.1071V13.4434C9.65243 13.4566 9.92352 13.4681 10.2434 13.4681C13.1771 13.4681 20 12.535 20 3.89449C20 3.70333 19.8686 3.53706 19.6823 3.49365C19.6509 3.48556 19.62 3.48235 19.5883 3.48235Z"
              fill="white"
            />
          </svg>
          <p>Settings</p>
        </div>
        <div className="setting-main-inside">
          <div className="user-setting">
            <div className="user-name">
              <div className="user-name-inside">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_13_2248)">
                      <path
                        d="M16 0.000976562C7.16437 0.000976562 0 7.16394 0 16.0003C0 24.8366 7.16367 31.9996 16 31.9996C24.837 31.9996 32 24.8366 32 16.0003C32 7.16394 24.837 0.000976562 16 0.000976562ZM16 4.78495C18.9237 4.78495 21.2928 7.1548 21.2928 10.0771C21.2928 13 18.9237 15.3692 16 15.3692C13.0777 15.3692 10.7086 13 10.7086 10.0771C10.7086 7.1548 13.0777 4.78495 16 4.78495ZM15.9965 27.8165C13.0806 27.8165 10.4099 26.7546 8.34999 24.9968C7.84819 24.5688 7.55864 23.9412 7.55864 23.2827C7.55864 20.319 9.9573 17.947 12.9217 17.947H19.0797C22.0448 17.947 24.4343 20.319 24.4343 23.2827C24.4343 23.9419 24.1462 24.5681 23.6437 24.9961C21.5845 26.7546 18.9131 27.8165 15.9965 27.8165Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_13_2248">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="john-level">
                  <p>John Mark</p>
                  <p>Level Name</p>
                </div>
              </div>
            </div>
            <div>
              <div className="settings-options">
                <div className="option-item">
                  <span>Language</span>
                  <span className="option-value">English</span>
                </div>
                <div className="option-item">
                  <span>Sound</span>
                  <div className="toggle">
                    <input
                      type="checkbox"
                      id="soundToggle"
                      checked={sound}
                      onChange={() => setSound(!sound)}
                    />
                    <label
                      htmlFor="soundToggle"
                      className="toggle-slider"
                    ></label>
                  </div>
                </div>
                <div className="option-item">
                  <span>Connect Wallet</span>
                  <div className="toggle">
                    <input
                      type="checkbox"
                      id="walletToggle"
                      checked={connectWallet}
                      onChange={() => setConnectWallet(!connectWallet)}
                    />
                    <label
                      htmlFor="walletToggle"
                      className="toggle-slider"
                    ></label>
                  </div>
                </div>
                <div className="option-item">
                  <span>Connect Nextus</span>
                  <div className="toggle">
                    <input
                      type="checkbox"
                      id="nextusToggle"
                      checked={connectNextus}
                      onChange={() => setConnectNextus(!connectNextus)}
                    />
                    <label
                      htmlFor="nextusToggle"
                      className="toggle-slider"
                    ></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hori-line">
          </div>
          <div className="setting-bottom-text">
            <p>Help</p>
            <p>Delete Account</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};
