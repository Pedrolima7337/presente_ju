import "./style.css";

function Video() {
  return (
    <div className="container">
      <video width="100%" controls loop className="video">
        <source
          src="/Vídeo do WhatsApp de 2025-07-21 à(s) 17.32.48_01b05c9a.mp4"
          type="video/mp4"
        />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <a
        href="/Vídeo do WhatsApp de 2025-07-21 à(s) 17.32.48_01b05c9a.mp4"
        download
      >
        <button style={{ marginTop: "10px" }}>📥 Baixar Vídeo</button>
      </a>
    </div>
  );
}
export default Video;
