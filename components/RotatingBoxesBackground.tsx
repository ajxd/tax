// components/RotatingBoxesBackground.tsx
"use client";

export default function RotatingBoxesBackground() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div className="box box1"></div>
        <div className="box box2"></div>
        <div className="box box3"></div>
        <div className="box box4"></div>
      </div>
      <style jsx>{`
        .box {
          position: absolute;
          border: 2px solid rgba(255, 255, 255, 0.2);
          animation: rotate 30s linear infinite;
        }
        .box1 {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }
        .box2 {
          width: 150px;
          height: 150px;
          top: 20%;
          left: 80%;
          animation-delay: 7s;
        }
        .box3 {
          width: 250px;
          height: 250px;
          top: 60%;
          left: 20%;
          animation-delay: 14s;
        }
        .box4 {
          width: 180px;
          height: 180px;
          top: 70%;
          left: 75%;
          animation-delay: 21s;
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
