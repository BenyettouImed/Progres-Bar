/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      keyframes : {
        "progressBar" :{
          "0%" : {"background" : "cyan"},
          "25%" : {"background" : "lime"},
          "50%" : {"background" : "yellow"},
          "75%" : {"background" : "orange"},
          "100%" : {"background" : "red"},
        },
        
        
      },
      animation:{
        "progressBar" : "progressBar 4s",
      }
    },
  },
  plugins: [],
}

