import { useRef, useState } from "react";
import profilePicture from "../assets/ProfilePicture.PNG";

const ProfilePicture = () => {
  const imgRef = useRef(null); // Crea una referencia mutable para la imagen.
  const [lastMousePosition, setLastMousePosition] = useState({ x: 50, y: 50 }); // Almacena la última posición del mouse.

  // Calcula la posición del fondo radial de la imagen basada en la posición del mouse.
  const calculateBackgroundPosition = (offsetX, offsetY, width, height) => {
    const x = (offsetX / width) * 100;
    const y = (offsetY / height) * 100;
    return { x, y };
  };

  // Actualiza el fondo de la imagen con un gradiente radial.
  const updateBackground = (x, y) => {
    imgRef.current.style.background = `radial-gradient(circle at ${x}% ${y}%, #ffb2ffff, #FBCC12ff )`;
  };

  const handleMouseOver = (e) => {
    const { offsetWidth: width, offsetHeight: height } = imgRef.current; // Obtiene el ancho y alto de la imagen.
    const { offsetX, offsetY } = e.nativeEvent; // Obtiene la posición del mouse realtiva a la imagen.

    setLastMousePosition({ x: offsetX, y: offsetY });

    const { x, y } = calculateBackgroundPosition(
      offsetX,
      offsetY,
      width,
      height
    );
    updateBackground(x, y);
  };

  const handleMouseLeave = () => {
    const { x, y } = lastMousePosition;
    updateBackground(x, y);
  };

  return (
    <div className="profile-picture">
      <img
        ref={imgRef}
        src={profilePicture}
        alt="Foto de perfil de Stevens Contreras"
        onMouseMove={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        aria-label="Profile picture of Stevens Contreras"
      />
    </div>
  );
};

export default ProfilePicture;
