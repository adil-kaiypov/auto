const circle = document.querySelector("#circle");
      const square = document.querySelector("#square");
      const colors = document.querySelectorAll(".color");
      const shapeInputs = document.querySelectorAll("input[name='shape']");
      let selectedShape = "circle";
      
      for (let color of colors) {
        color.addEventListener("click", () => {
          if (selectedShape === "circle") {
            circle.style.backgroundColor = color.style.backgroundColor;
          } else {
            square.style.backgroundColor = color.style.backgroundColor;
          }
        });
      }
      
      for (let input of shapeInputs) {
        input.addEventListener("click", () => {
          selectedShape = input.value;
          if (selectedShape === "circle") {
            circle.style.display = "block";
            square.style.display = "none";
          } else {
            circle.style.display = "none";
            square.style.display = "block";
          }
        });
      }