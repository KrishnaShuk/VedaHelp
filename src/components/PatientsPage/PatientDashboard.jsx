import React, { useState, useRef } from 'react';

function PatientDashboard() {
  const [capturedImage, setCapturedImage] = useState(null);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const [showCamera, setShowCamera] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setShowCamera(true);
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Could not access camera");
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    const imageUrl = canvas.toDataURL('image/jpeg');
    setCapturedImage(imageUrl);
    stopCamera();
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    stream?.getTracks().forEach(track => track.stop());
    setShowCamera(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Patient Dashboard</h1>
      
      <div className="space-y-4">
        {/* Camera Controls */}
        {!showCamera ? (
          <button 
            onClick={startCamera}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Open Camera
          </button>
        ) : (
          <div className="space-y-2">
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              className="w-full max-w-md border rounded"
            />
            <div>
              <button 
                onClick={capturePhoto}
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              >
                Take Photo
              </button>
              <button 
                onClick={stopCamera}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Close Camera
              </button>
            </div>
          </div>
        )}

        {/* File Upload */}
        <div>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            Upload Photo
          </button>
        </div>

        {/* Display Captured/Uploaded Image */}
        {capturedImage && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Preview:</h2>
            <img 
              src={capturedImage} 
              alt="Captured or uploaded" 
              className="max-w-md border rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default PatientDashboard;