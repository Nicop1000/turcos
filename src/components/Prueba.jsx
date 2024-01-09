import { useState } from "react";
import { MagicCard } from "react-magic-motion";
import "react-magic-motion/card.css";
 
function CloseFullscreenSvg() {
  return (
    <>
      <rect
        x="1"
        y="16"
        width="14"
        height="15"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M26 5L18 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 13H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 13V9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  );
}
 
function OpenFullscreenSvg() {
  return (
    <>
      <rect
        x="1"
        y="8"
        width="21"
        height="23"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 24L15 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15 16H11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15 16V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  );
}
 
export default function ExpandableCard(props) {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  const toggleCardExpansion = () => {
    setIsCardExpanded(!isCardExpanded);
  };

  const openImage = () => {
    setIsCardExpanded(true);
  };

  return (
    <MagicCard
      isCardExpanded={isCardExpanded}
      onBackgroundFadeClick={() => setIsCardExpanded(false)}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div
        style={{
          width: isCardExpanded ? "20rem" : "5rem",
          height: "fit-content",
          gap: "",
          display: "",
          flexDirection: "",
          padding: "",
          color: isCardExpanded ? "white" : "currentColor",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              fontWeight: 600,
              fontSize: "1.4em",
            }}
          >
           
          </h3>

          <button
            style={{ position: "absolute", right: 0, zIndex: 9999 }}
            onClick={toggleCardExpansion}
          >
            <svg
              key="exclude"
              width="32"
              height="32"
              viewBox="0 0 0 0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isCardExpanded ? (
                <CloseFullscreenSvg />
              ) : (
                <OpenFullscreenSvg />
              )}
            </svg>
          </button>
        </div>
        <div style={{ overflowY: "auto" }}>
          <img
            style={{
              width: isCardExpanded ? "24rem" : "5rem",
              height: "auto",
              cursor: "pointer", // Agrega un cursor de puntero para indicar que la imagen es clickeable
            }}
            alt="Mona Lisa"
            src={props.imageUrl}
            onClick={openImage} // Agrega el manejador de eventos para abrir la imagen
          />
          {isCardExpanded && (
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <h4 style={{ fontSize: "1.2em", fontWeight: 600 }}>
                {props.name}
              </h4>
              <h3>{props.precio}</h3>
              <p>
                {props.description}
              </p>
              
            </section>
          )}
        </div>
      </div>
    </MagicCard>
  );
}