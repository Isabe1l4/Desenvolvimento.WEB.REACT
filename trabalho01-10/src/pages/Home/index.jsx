import React, { useState } from "react";
import Headerdott from "../../assets/headerdott.png";
import Gatinho from "../../assets/gatinho.jpg";

function Home() {
  return (
    <div className="app">
      <header className="app-header">
        <img
          src={Headerdott}
          alt="banner"
          className="profile-banner"
          style={{ width: '210%', height: '300px' }}
        />
        <div className="profile-info">
          <img
            src={Gatinho}
            alt="profile"
            className="profile-photo"
            style={{ width: '170px', height: '170px' }}
          />
          <div className="profile-details" style={{ display: "flex", alignItems: "flex-start" }}>
            <h2 className="name">bebella</h2>
            <p className="username">@isabellavendepao</p>
            <p className="bio">
              eu amo frontend! :P
            </p>
            <p className="bio2">
              Traduzir bio
            </p>
            <div className="stats">
              <p><strong>727</strong> Seguidores</p>
              <p><strong>405</strong> Seguindo</p>
            </div>
          </div>
          <button className="edit-profile-button">Editar Perfil</button>
        </div>
      </header>
    </div>
  );
}

export default Home;