import React from 'react';

const Present = () => {
  React.useEffect(() => {
    const toastTrigger = document.getElementById('liveToastBtn');
    const toastLiveExample = document.getElementById('liveToast');

    if (toastTrigger) {
      const bootstrapToast = window.bootstrap.Toast.getOrCreateInstance(toastLiveExample);
      toastTrigger.addEventListener('click', () => {
        bootstrapToast.show();
      });
    }
  }, []);

  return (
    <div>
      {/* Button to trigger toast */}
      <button type="button" className="btn btn my-3" id="liveToastBtn" style={{ backgroundColor: "#fb6e50" }}>
        <b>Show Message</b>
      </button>

      {/* Toast Container */}
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            {/* Adjusted Image Size */}
            <img 
              src="https://ik.imagekit.io/mhcockpit1/MH%20Cognition/LOGO/MH%20Cognizant%20LOGO.png" 
              className="rounded me-2" 
              alt="MH Cognition Logo" 
              style={{ width: "40px", height: "40px" }} 
            />
            <strong className="me-auto">MH Cognition</strong>
            <small>11 mins ago</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div className="toast-body">
            Hello! Have a great learning
          </div>
        </div>
      </div>
    </div>
  );
};

export default Present;
