import{r as l}from"./index-CQeZQOC0.js";function w(){const[i,n]=l.useState(void 0);return l.useEffect(()=>{const s=()=>n(window.innerWidth);return n(window.innerWidth),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),i}const f=({containerId:i})=>{const n=w(),s=n<=540?"height: 400px; width: 300px; left: 50%; transform: translateX(-50%);":n<=768?"height: 366px; width: calc(300px * 16 / 9);":n<=1024?"height: 400px; width: calc(366px * 16 / 9);":"height: 500px; width: calc(500px * 16 / 9);";return l.useEffect(()=>{const o="https://labs.heygen.com",p=`${o}/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJFbGVub3JhX0lUX1NpdHRpbmdfcHVibGlj%0D%0AIiwicHJldmlld0ltZyI6Imh0dHBzOi8vZmlsZXMyLmhleWdlbi5haS9hdmF0YXIvdjMvY2JkNGE2%0D%0AOTg5MGEwNDBlNmEwZDU0MDg4ZTYwNmE1NTlfNDU2MTAvcHJldmlld190YWxrXzMud2VicCIsIm5l%0D%0AZWRSZW1vdmVCYWNrZ3JvdW5kIjpmYWxzZSwia25vd2xlZGdlQmFzZUlkIjoiMmVlMjA1YTBkNDNh%0D%0ANDg1YWEzODMzOTE5ZjhkZTBmZmIiLCJ1c2VybmFtZSI6ImE2NzAxM2I3Yzc2NzQ3NTg4ZjE5NGM0%0D%0AYmNkMDg1MTJkIn0%3D&inIFrame=1`,e=document.createElement("div");e.id="heygen-streaming-embed";const r=document.createElement("div");r.id="heygen-streaming-container";const h=document.createElement("style");h.innerHTML=`
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
        ${s}
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
    `;const d=document.createElement("iframe");d.allowFullscreen=!1,d.title="Streaming Embed",d.role="dialog",d.allow="microphone",d.src=p;let a=!1,m=!1;const c=t=>{var g;t.origin===o&&((g=t.data)==null?void 0:g.type)==="streaming-embed"&&(t.data.action==="init"?(m=!0,e.classList.toggle("show",m)):t.data.action==="show"?(a=!0,e.classList.toggle("expand",a)):t.data.action==="hide"&&(a=!1,e.classList.toggle("expand",a)))};if(r.appendChild(d),e.appendChild(h),e.appendChild(r),i){const t=document.getElementById(i);t?t.appendChild(e):console.error(`No se encontró un contenedor con el id: ${i}`)}else document.body.appendChild(e);return window.addEventListener("message",c),()=>{window.removeEventListener("message",c),e.remove()}},[i,s]),null};export{f as default};
