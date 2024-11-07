import { useState } from "react";
import Swal from 'sweetalert2';
import './App.css'; 

function App() {

  const [num, setNum] = useState(0);

  function addDurood() {
    setNum(num + 1);
   
  }

  function ResetBtn() {
    if (num === 0) {
      Swal.fire("Durood Sharif already 0 hai");
    } else {
      Swal.fire({
        title: 'Kya aap waqai Durood Sharif ko reset karna chahte hain?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Haan ',
        cancelButtonText: 'Nahi'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'JazakAllah!',
            text: 'Aap ne ' + num + ' Durood Sharif parhe hain.',
            icon: 'success',
            confirmButtonText: 'Shukriya'
          });
          setNum(0); 
        }
      });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-tasbeeh-pattern bg-cover bg-center text-green-300">
      <div className="card bg-gray-800 shadow-2xl rounded-lg p-6 text-center max-w-md border border-gray-700 relative">
        <div className="absolute inset-0 rounded-lg border-2 border-dashed border-green-600 opacity-25 pointer-events-none"></div>
        <h1 className="text-2xl font-semibold text-green-500 mb-6 tracking-widest font-arabic">
          Durood-e-Pak Counter
        </h1>
        <div className="counter mb-6">
          <h2 className="text-5xl font-bold text-green-400 tracking-widest bg-black px-4 py-2 rounded-lg shadow-glow border border-green-600">
            {num}
          </h2>
        </div>
        <div className="btn-container grid grid-cols-1 gap-4">
          <button className="btn bg-green-700 text-white py-2 px-6 rounded-full hover:bg-green-800 transform hover:scale-105 transition-all duration-300 shadow-glow focus:ring-2 focus:ring-green-400 focus:outline-none" onClick={addDurood}>
            Durood Pak Parhein
          </button>
          <button className="btn bg-orange-600 text-white py-2 px-6 rounded-full hover:bg-yellow-800 transform hover:scale-105 transition-all duration-300 shadow-glow focus:ring-2 focus:ring-orange-400 focus:outline-none" onClick={ResetBtn}>
            Reset Karain
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
