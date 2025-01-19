import { useWindowWidth } from "@/hooks";
import React, { useEffect } from "react";

interface HeygenEmbedProps {
  containerId?: string; // Opcional: ID del contenedor donde se mostrará el iframe
}

const HeygenEmbed: React.FC<HeygenEmbedProps> = ({ containerId }) => {
  const widthScreen = useWindowWidth();
  const expandedWidth =
    widthScreen! <= 540
      ? "height: 250px; width: 300px; left: 50%; transform: translateX(-50%);"
      : widthScreen! <= 768
      ? "height: 300px; width: calc(300px * 16 / 9);"
      : widthScreen! <= 1024
      ? "height: 350px; width: calc(366px * 16 / 9);"
      : "height: 400px; width: calc(500px * 16 / 9);";

  useEffect(() => {
    const host = "https://labs.heygen.com";
    const url = `${host}/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJFbGVub3JhX0lUX1NpdHRpbmdfcHVibGlj%0D%0AIiwicHJldmlld0ltZyI6Imh0dHBzOi8vZmlsZXMyLmhleWdlbi5haS9hdmF0YXIvdjMvY2JkNGE2%0D%0AOTg5MGEwNDBlNmEwZDU0MDg4ZTYwNmE1NTlfNDU2MTAvcHJldmlld190YWxrXzMud2VicCIsIm5l%0D%0AZWRSZW1vdmVCYWNrZ3JvdW5kIjpmYWxzZSwia25vd2xlZGdlQmFzZUlkIjoiMmVlMjA1YTBkNDNh%0D%0ANDg1YWEzODMzOTE5ZjhkZTBmZmIiLCJ1c2VybmFtZSI6ImE2NzAxM2I3Yzc2NzQ3NTg4ZjE5NGM0%0D%0AYmNkMDg1MTJkIn0%3D&inIFrame=1`;

    const wrapDiv = document.createElement("div");
    wrapDiv.id = "heygen-streaming-embed";

    const container = document.createElement("div");
    container.id = "heygen-streaming-container";

    const stylesheet = document.createElement("style");
    stylesheet.innerHTML = `
      #heygen-streaming-embed {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        // border: 2px solid #fff;
        // box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.12);
        transition: width linear 0.1s, height linear 0.1s;
        overflow: hidden;

        opacity: 0;
        visibility: hidden;
      }
      #heygen-streaming-embed.show {
        opacity: 1;
        visibility: visible;
      }
      #heygen-streaming-embed.expand {
        ${
          expandedWidth
          // widthScreen! < 600
          //   ? "height: 400px; width: 300px; left: 50%; transform: translateX(-50%);"
          //   : "height: 400px; width: calc(500px * 16 / 9);"
        }
        border: 0;
        border-radius: 8px;
      }
      #heygen-streaming-container {
        width: 100%;
        height: 100%;
      }
      #heygen-streaming-container iframe {
        width: 100%;
        height: 100%;
        border: 0;
      }
    `;

    const iframe = document.createElement("iframe");
    iframe.allowFullscreen = false;
    iframe.title = "Streaming Embed";
    iframe.role = "dialog";
    iframe.allow = "microphone";
    iframe.src = url;

    let visible = false;
    let initial = false;

    // Message listener for iframe communication
    const handleMessage = (e: MessageEvent) => {
      if (e.origin === host && e.data?.type === "streaming-embed") {
        if (e.data.action === "init") {
          initial = true;
          wrapDiv.classList.toggle("show", initial);
        } else if (e.data.action === "show") {
          visible = true;
          wrapDiv.classList.toggle("expand", visible);
        } else if (e.data.action === "hide") {
          visible = false;
          wrapDiv.classList.toggle("expand", visible);
        }
      }
    };

    // Append elements
    container.appendChild(iframe);
    wrapDiv.appendChild(stylesheet);
    wrapDiv.appendChild(container);

    if (containerId) {
      const externalContainer = document.getElementById(containerId);
      if (externalContainer) {
        externalContainer.appendChild(wrapDiv);
      } else {
        console.error(`No se encontró un contenedor con el id: ${containerId}`);
      }
    } else {
      document.body.appendChild(wrapDiv); // Uso predeterminado en el body
    }

    // Add event listener
    window.addEventListener("message", handleMessage);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("message", handleMessage);
      wrapDiv.remove();
    };
  }, [containerId, expandedWidth]);

  return null;
};

export default HeygenEmbed;
