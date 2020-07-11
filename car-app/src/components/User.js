import React, { useRef, useState } from "react";
import styled from "styled-components";

const UserContainer = styled.div`
  width: 35vw;
  margin: 0 auto;
  padding-top: 2rem;
  height: 90vh;
  background-color: var(--front-color);
  outline: 5px solid var(--brown-title-color);
  box-shadow: 0 0 5px var(--brown-title-color);

  .photo__container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .photo__user-photo {
    display: block;
    border-radius: 50%;
    width: 20rem;
    border: 1px solid black;
    position: relative;
    transition: opacity 0.3s ease-in;
    height: 20rem;
    object-fit: cover;
  }
  .photo__user-name:first-child {
    margin-top: 10rem;
  }
  .photo__user-name {
    font-size: 2.8rem;
    margin-bottom: 10rem;
    text-align: center;
  }
  .photo__photos {
    position: relative;
    transition: opacity 0.3s ease-in;
  }
  .photo__photos::before {
    content: "\f030";
    font-family: FontAwesome;
    position: absolute;
    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    z-index: 10;
    opacity: 0;
    transition: all 0.4s ease-in-out;
  }
  .photo__photos:hover.photo__photos::before {
    content: "\f030";
    font-family: FontAwesome;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    font-size: 3rem;
    z-index: 10;
    opacity: 1;
    pointer-events: none;
  }

  .photo__user-photo:hover {
    opacity: 0.3;
    cursor: pointer;
  }

  .file-reader {
    display: none;
  }

  .photo__user-data {
    display: inline-block;
    font-size: 1.7rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  .photo__pen-correct {
    margin-left: 2rem;
    font-size: 2rem;
  }
`;

export default function User() {
  const user = localStorage.getItem("username");
  const email = localStorage.getItem("emailUser");
  const [AddressValue, setAddressValue] = useState(
    localStorage.getItem("address") || "city"
  );

  const imageRef = useRef(null);

  function handlePhotoChange(e) {
    e.preventDefault();
    const input = e.target.files;
    const reader = new FileReader();
    reader.onload = function () {
      const dataURL = reader.result;
      const replacePhoto = imageRef.current;
      replacePhoto.src = dataURL;
      localStorage.setItem("photoUser", dataURL);
    };

    reader.readAsDataURL(input[0]);
  }

  function handleAddAdress(e) {
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem("address", e.target.textContent);
      console.log(e.target.textContent);
      e.target.blur();
      setAddressValue(localStorage.getItem("address"));
    }
  }

  return (
    <div className="user__container">
      <UserContainer>
        <div className="photo__container">
          <label htmlFor="imageUser">
            <div className="photo__photos">
              <img
                src={
                  localStorage.getItem("photoUser")
                    ? localStorage.getItem("photoUser")
                    : "http://www.pngmart.com/files/10/User-Account-Person-PNG-File.png"
                }
                className="photo__user-photo"
                ref={imageRef}
                alt="avatar"
              />
            </div>
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="file-reader"
            id="imageUser"
          />
        </div>

        <div className="photo__user-information">
          <div className="photo__user-information-left">
            <h1 className="photo__user-name">
              Username: <span className="photo__user-data">{user}</span>{" "}
            </h1>
            <h1 className="photo__user-name">
              Email: <span className="photo__user-data">{email}</span>{" "}
            </h1>
            <h1 className="photo__user-name">
              Your address:{" "}
              <span
                contentEditable="true"
                onKeyPress={handleAddAdress}
                className="photo__user-data"
                suppressContentEditableWarning={true}
              >
                {AddressValue}
                <i className="fas fa-pen pen-correct"></i>
              </span>
            </h1>
          </div>
        </div>
      </UserContainer>
      <div className="triangle"></div>
    </div>
  );
}
